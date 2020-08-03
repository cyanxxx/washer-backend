const userRouter = require('express').Router()
const Users = require('../models/user')

userRouter.get('/', async (request, response) => {
    let userId = request.token.id
    let user = Users.findById(userId)
    response.json(user.toJSON())
})

module.exports = userRouter