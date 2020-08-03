  const mongoose = require('mongoose')
  const userSchema = mongoose.Schema({
      aliasName: String,
      openId: String,
      color: String,
      rooms: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
      }]
  })

  const User = mongoose.model('User', userSchema)

  module.exports = User