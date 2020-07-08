const roomRouter = require('express').Router()
const Rooms = require('../models/rooms')

roomRouter.get('/', async (request, response) => {
    const roomList = await Rooms.find({})
    response.json(records.map(roomList => roomList.toJSON()))
})

roomRouter.post('/create', async (request, response) => {
    const { name } = request
    const newRoom = new Rooms({
        name
    })
    response.json(records.map(roomList => roomList.toJSON()))
})