const recordsRouter = require('express').Router()
const Record = require('../models/record')

recordsRouter.get('/', async (request, response) => {
    //查今年
    const {year} = request.body
    let startDate = new Date(`${year}-01-01`)
    let endDate = new Date(`${year}-12-31`)
    const records = await Record.find({
        $lte: endDate,
        gte: startDate
    })
    response.json(records.map(record => record.toJSON()))
})

recordsRouter.get('/latest', async (request, response) => {
    const {roomId} = request.body
    //最新日期
    const records = await Record.find({roomId}).sort('-date').limit(1)
    response.json(records.map(record => record.toJSON()))
})

recordsRouter.post('/create', async (request, response) => {
    const {date, roomId} = request.body
    //拿user相关
    //最新日期
    let newRecord = new Record({
        date: new Date(date),
        roomId,
        userId: request.token.id
    })
    const record = await newRecord.save()
    response.json(record.toJSON())
})

recordsRouter.post('/update', async (request, response) => {
    const {date, roomId} = request.body
    //拿user相关
    //最新日期
    const records = await Record.update({
        date,
        roomId
    }, {
        $set: {
            userId: request.token.id
        }
    })
    records.then(res => {
        response.json(records.toJSON())
    }).catch(error => next(error))
})

