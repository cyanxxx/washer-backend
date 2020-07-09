const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
    const body = request.body

    //微信接口去拿user
    const userForToken = {
        id: user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    response
        .status(200)
        .send({
            token,
            name: user.name
        })
})

module.exports = loginRouter