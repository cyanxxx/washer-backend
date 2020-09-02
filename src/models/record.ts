import { IRecord } from "../types/record"
import { model, Schema } from "mongoose"

const recordSchema = new Schema({
   date: Date,
   roomId: String,
   userInfo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
 }, { timestamps: true })
 
export default model<IRecord>("Record", recordSchema)