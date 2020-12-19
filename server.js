const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const nodemailer = require('nodemailer')
const Axios = require('axios')
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const transport = {
    host: 'outlook.office365.com',
    auth: {
        user: 'charland@wisc.edu',
        pass: 'Seriousas2motherfuckers!'
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

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.post('/api/contact', (req, res) => {
    const {name, email, subject, message, token} = req.body
    const secret = process.env.SECRET
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
    const mail = {
        from: 'charland@wisc.edu',
        replyTo: email,
        to: 'ac3charland@gmail.com',
        subject,
        text: `From ${name}: ${message}`
    }

    Axios.post(verifyUrl).then(captchaRes => {
        const {score, success} = captchaRes.data
        if (!success || score < 0.5) {
            res.json({msg: 'captcha failed', url: req.url, body: req.body})
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

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`🌎 ==> Server now on port ${process.env.PORT || 8080}!`)
})
