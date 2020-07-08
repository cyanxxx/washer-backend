  const mongoose = require('mongoose')
  const roomSchema = mongoose.Schema({
      name: String,
      id: String,
      members: [
         {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'User'
         }
      ]
  })

  const Room = mongoose.model('Room', roomSchema)

  module.exports = Room