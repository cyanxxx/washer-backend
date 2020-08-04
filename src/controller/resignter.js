const resignterRouter = require('express').Router()
const wxLogin = require('../service/wxLogin');
const Users = require('../models/user')

resignterRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(body)
    const { openid } = await wxLogin(body.code)
    console.log(openid)
    const newUser = new Users({
        aliasName: body.aliasName,
        color: body.color,
        openId:openid 
    })
    try {
        const user = await newUser.save()
        console.log(user)
    } catch (error) {
        console.log(error)
    }
    
    response.json(newUser.toJSON())
    response.end()
})

module.exports = resignterRouter