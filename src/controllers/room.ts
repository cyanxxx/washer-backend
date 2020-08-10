
import { Response, Request } from "express"
import Room from "../models/room"

const getRooms = async (req: Request, res: Response): Promise<void> => {
  try {
    const roomList = await Room.find()
    res.json(roomList.map(room => room.toJSON()))
  } catch (error) {
    throw error
  }
}

const createRoom = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body
    const newRoom = new Room({
        name
    })
    res.json(newRoom.toJSON())
  } catch (error) {
    throw error
  }
}

export {getRooms, createRoom}