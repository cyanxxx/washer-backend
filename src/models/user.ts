import { IUser } from "../types/user"
import { model, Schema } from "mongoose"

const userSchema = new Schema({
    aliasName: String,
    openId: String,
    color: String,
    rooms: [{
      type: Schema.Types.ObjectId,
      ref: 'Room'
    }]
})

export default model<IUser>("User", userSchema)