const userRouter = require('express').Router()
const Users = require('../models/rooms')

userRouter.post('/create', async (request, response) => {
    const {aliasName, color} = request.body
    //拿userId数据库拿或者token拿
    let userId = ""
    const newUser = new Users({
        aliasName,
        color,
        userId 
    })
    response.json(records.map(roomList => roomList.toJSON()))
})