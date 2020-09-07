import { Schema, model } from "mongoose"
import { IRoomUser } from "../types/roomUser"

const roomUserSchema = new Schema({
    roomId: {
        type: Schema.Types.ObjectId,
        ref: 'Room'
      },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
  })
  
  export default model<IRoomUser>("Room_User", roomUserSchema)