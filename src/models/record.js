const mongoose = require('mongoose')
const recordSchema = mongoose.Schema({
   date: Date,
   roomId: String,
   userId: String
 })
 
const Record = mongoose.model('Record', recordSchema)

module.exports = Record