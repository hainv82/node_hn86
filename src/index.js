import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './config/db.js'

dotenv.config()

import userRouter from './routers/users.route.js'
import { errorHandler } from './middleware/error.js'
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDb()

const port = process.env.PORT || 3000


const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

app.use(requestTime)

app.get('/', (req, res) => {
  let responseText = 'Hello World!<br>'
  responseText += `<small>Requested at: ${req.requestTime}</small>`
  res.send(responseText)
})

// app.get('/user/:id', (req, res) => {
//   res.status(200).json(req.params);
// });

app.use('/user', userRouter);
app.use(errorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

