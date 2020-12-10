const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

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
    console.log('req.body:', req.body)
    res.json({
        sup: 'bro',
        body: req.body,
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 8080, () => {
    console.log(`🌎 ==> Server now on port ${process.env.PORT || 8080}!`)
})
