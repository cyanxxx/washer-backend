import { IRecord } from "../types/record"
import { model, Schema } from "mongoose"

const recordSchema = new Schema({
   date: Date,
   roomId: String,
   userId: String
 }, { timestamps: true })
 
export default model<IRecord>("Record", recordSchema)