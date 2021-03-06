const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const nodemailer = require('nodemailer')
const Axios = require('axios')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const getStrapiURL = (path = '') => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337'}${path}`
}

const transport = {
    host: 'outlook.office365.com',
    auth: {
        user: process.env.HANDLER_EMAIL,
        pass: process.env.EMAIL_PASS
    }
}
const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log('server is ready to take messages')
    }
})

app.use(express.static(path.join(__dirname, 'build')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/ping', function (req, res) {
    return res.send('pong')
})


app.post('/api/contact', (req, res) => {
    const {name, email, subject, message, token} = req.body
    const secret = process.env.SECRET
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    const mail = {
        from: process.env.HANDLER_EMAIL,
        replyTo: email,
        to: process.env.CONTACT_RECEIPT_EMAIL,
        subject,
        text: `From ${name}: ${message}`
    }

    Axios.post(verifyUrl).then(captchaRes => {
        const {score, success} = captchaRes.data
        if (!success || score < 0.5) {
            res.json({msg: 'captcha failed', url: req.url, body: req.body, res: captchaRes.data})
        }
        else {
            transporter.sendMail(mail, (err, data) => {
                if (err) {
                    res.json({
                        msg: err
                    })
                }
                else {
                    res.json({
                        msg: 'success'
                    })
                }
            })
        }
    })
})

app.get('/api/events', (req, res) => {
    Axios.get(`${getStrapiURL()}/events`).then(eventsRes => {
        const events = eventsRes.data || []
        if (events.length > 0) {
            events
                .filter(event => {
                    // Filter out events from the past
                    return true
                })
                .map(event => {
                    // Filter out unnecessary key value pairs (id, created/modified timestamps)
                    // Put in reducer?
                    return event
                })
        }

        res.json({events})
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`🌎 ==> Server now on port ${process.env.PORT || 8080}!`)
})
