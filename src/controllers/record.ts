
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
    if(record.length > 0) {
        response.json(record[0].toJSON())
    }else{
        response.json({})
    }
    
}

const createRecord = async (request: Request, response: Response) => {
    const {date, roomId, userId} = request.body
    let newRecord = new Record({
      date: new Date(date),
      roomId,
      userInfo: userId,
    });
    const record = await newRecord.save()
    response.json(record && record.toJSON())
}

const updateRecord = async (request: Request, response: Response) => {
    const {
        params: { id },
        body,
      } = request
    const record = await Record.findByIdAndUpdate(
        { _id: id },
        body
    )
    response.json(record && record.toJSON())
}

const deleteRecord = async (request: Request, response: Response) => {
    const {
        params: { id },
      } = request
    const records = await Record.findByIdAndDelete(
        { _id: id }
    )
    response.json(records && records.toJSON())
}

export {updateRecord, createRecord, getLatest, getRecord, deleteRecord}