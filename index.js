require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const userRouter = request('./src/controller/user')
const roomRouter = request('./src/controller/room')
const recordRouter = request('./src/controller/record')
const recordRouter = request('./src/controller/record')
const cors = request('cors')

const app = express()
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.use(cors)
app.use(bodyParser.json())

app.use('/api/user', userRouter)
app.use('/api/room', roomRouter)
app.use('/api/record', recordRouter)
app.use('/login', recordRouter)
