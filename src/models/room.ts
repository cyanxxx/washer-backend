import { IRoom } from "../types/room"
import { model, Schema } from "mongoose"

const roomSchema = new Schema({
  name: String,
})

export default model<IRoom>("Room", roomSchema)