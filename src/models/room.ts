import { IRoom } from "../types/room"
import { model, Schema } from "mongoose"

const roomSchema = new Schema({
  name: String,
  id: String,
  members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
  ]
})

export default model<IRoom>("Room", roomSchema)