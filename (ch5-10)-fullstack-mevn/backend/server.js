require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('node:fs')

const app = express()
const router = express.Router()
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))

// connect to mongodb
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB, () => {
    console.log('Connection has been made')
})
    .catch((error) => {
        console.error('App starting error:', error)
        process.exit(1)
    })

// include controllers
fs.readdirSync('controllers').forEach((file) => {
    if (file.substr(-3) == '.js') {
        const route = require('./controllers/' + file)
        route.controller(app)
    }
})

router.get('/', (req, res) => {
    res.json({
        message: 'API Initialized!'
    })
})

app.use('/', router)
app.listen(8081, () => {
    console.log('api running on port 8081')
})
