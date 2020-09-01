import { IUser } from "../types/user"
import { model, Schema } from "mongoose"

const userSchema = new Schema({
    aliasName: String,
    openId: String,
    color: String,
})

export default model<IUser>("User", userSchema)