
import e, { Response, Request } from "express"
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
    const room = await new Room({
      name,
    });
    const newRoom = await room.save();
    res.json(newRoom.toJSON())
  } catch (error) {
    throw error
  }
}

const updateRoom = async (req: Request, res: Response): Promise<void> => {
  try {
     const {
       params: { id },
       body,
     } = req;
    const room = await Room.findByIdAndUpdate({ _id: id }, body);
    const rooms = await Room.find();
    res.json({
      message: 'update successfully',
      room,
      roomList: rooms
    });
  } catch (error) {
    throw error
  }
}
const getRoomMember = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const room = await Room.findById({ _id: id });
    if (room) {
      res.json({
        memebers: room.members,
      });
    } else {
      res.status(404);
    }
  } catch (error) {
    throw error;
  }
};

export { getRooms, createRoom, updateRoom, getRoomMember };