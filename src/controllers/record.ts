
import { Response, Request } from "express"
import Record from "../models/record"
import User from "../models/user";
import moment from 'moment'

const getRecord = async (request: Request, response: Response) => {
    //查今年
    const {year} = request.query
    let startDate = new Date(`${year}-01-01`)
    let endDate = new Date(`${year}-12-31`)
    const records = await Record.find({
        date: {
            $lt: endDate,
            $gte: startDate
        }
    }).populate('userInfo', 'aliasName color _id')
    console.log(records)
    if(records.length > 0) {
        response.json(records.map(record => record.toJSON()))
    }else{
        response.json([])
    }
    
}

const getLatest =  async (request: Request, response: Response) => {
    const {
        params: { id },
      } = request
    //最新日期
    const record = await Record.find({roomId:id}).populate('userInfo').sort('-date').limit(1)
    response.json(record[0].toJSON())
}

const createRecord = async (request: Request, response: Response) => {
    const {date, roomId} = request.body
    let user = await User.findById(request.token.userId)
    let newRecord = new Record({
      date: new Date(date),
      roomId,
      userInfo: user,
    });
    const record = await newRecord.save()
    response.json(record.toJSON())
}

const updateRecord = async (request: Request, response: Response) => {
    const {
        params: { id },
        body,
      } = request
    const records = await Record.findByIdAndUpdate(
        { _id: id },
        body
    )
    response.json(records && records.toJSON())
}

export {updateRecord, createRecord, getLatest, getRecord}