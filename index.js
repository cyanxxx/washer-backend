require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const userRouter = require('./src/controller/user')
const roomRouter = require('./src/controller/room')
const recordRouter = require('./src/controller/record')
const loginRouter = require('./src/controller/login')
const resignterRouter = require('./src/controller/resignter')
const unknownEndpoint = require('./src/middleware/unknownEndpoint')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT
console.log('hi')
app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/room', roomRouter)
app.use('/api/record', recordRouter)
app.use('/api/login', loginRouter)
app.use('/api/resignter', resignterRouter)
app.use(unknownEndpoint)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


