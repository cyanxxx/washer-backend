const mongoose = require('mongoose')
const Record = require('./models/record')
const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })
  const record = new Record({
    date: '2020-07-07',
  })
  
  record.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
  })
  
module.exports = mongoose