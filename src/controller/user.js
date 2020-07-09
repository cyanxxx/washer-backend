const userRouter = require('express').Router()
const Users = require('../models/rooms')

userRouter.post('/create', async (request, response) => {
    const {aliasName, color} = request.body
    //拿userId数据库拿或者token拿
    let userId = request.token.id
    const newUser = new Users({
        aliasName,
        color,
        userId 
    })
    response.json(newUser.toJSON())
})

userRouter.get('/', async (request, response) => {
    let userId = request.token.id
    let user = Users.findById(userId)
    response.json(user.toJSON())
})