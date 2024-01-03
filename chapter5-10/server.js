import "dotenv/config"

import express from 'express'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
import cors from 'cors'
import morgan from "morgan"

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

router.get('/', (req, res) => {
  res.json({
    message: 'API Initialized!'
  })
})

app.use('/', router)
app.listen(8081, () => {
  console.log('api running on port 8081')
})