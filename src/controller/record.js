const recordsRouter = require('express').Router()
const Record = require('../models/record')

recordsRouter.get('/', async (request, response) => {
    //查一个月范围内的日期
    const {year, month} = request.body
    const records = await Record.find({})
    response.json(records.map(record => record.toJSON()))
})

recordsRouter.get('/latest', async (request, response) => {
    const {roomId} = request.body
    //最新日期
    const records = await Record.find({})
    response.json(records.map(record => record.toJSON()))
})

recordsRouter.post('/create', async (request, response) => {
    const {date, roomId} = request.body
    //拿user相关
    //最新日期
    const records = await Record.find({})
    response.json(records.map(record => record.toJSON()))
})

recordsRouter.post('/update', async (request, response) => {
    const {date, roomId} = request.body
    //拿user相关
    //最新日期
    const records = await Record.find({})
    response.json(records.map(record => record.toJSON()))
})

