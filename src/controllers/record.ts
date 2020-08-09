
import { Response, Request } from "express"
import Record from "../models/record"

const getRecord = async (request: Request, response: Response) => {
    //查今年
    const {year} = request.body
    let startDate = new Date(`${year}-01-01`)
    let endDate = new Date(`${year}-12-31`)
    const records = await Record.find({
        $lte: endDate,
        gte: startDate
    })
    response.json(records.map(record => record.toJSON()))
}

const getLateset =  async (request: Request, response: Response) => {
    const {roomId} = request.body
    //最新日期
    const records = await Record.find({roomId}).sort('-date').limit(1)
    response.json(records.map(record => record.toJSON()))
}

const createRecord = async (request: Request, response: Response) => {
    const {date, roomId} = request.body
    //拿user相关
    //最新日期
    let newRecord = new Record({
        date: new Date(date),
        roomId,
        userId: request.token.openId
    })
    const record = await newRecord.save()
    response.json(record.toJSON())
}

const updateRecord = async (request: Request, response: Response) => {
    const {
        params: { id },
        body,
      } = request
    //拿user相关
    //最新日期
    const records = await Record.findByIdAndUpdate(
        { _id: id },
        body
    )
    response.json(records && records.toJSON())
}

export {updateRecord, createRecord, getLateset, getRecord}