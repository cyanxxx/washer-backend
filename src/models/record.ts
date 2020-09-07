import { IRecord } from "../types/record"
import { model, Schema } from "mongoose"
import moment from "moment";

const recordSchema = new Schema({
   date: Date,
   roomId: String,
   userInfo: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
 }, { timestamps: true })

 recordSchema.path('date').get(function (date: moment.MomentInput) {
   return moment(date).format('YYYY-MM-DD')
 });
 recordSchema.set('toJSON', { getters: true });
export default model<IRecord>("Record", recordSchema)