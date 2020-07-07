  const mongoose = require('mongoose')
const recordSchema = mongoose.Schema({
   date: String,
 })
 
const Record = mongoose.model('Record', recordSchema)

module.exports = Record