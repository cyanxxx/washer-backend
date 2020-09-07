
import { Response, Request } from "express"
import Room from "../models/room"
import Room_User from "../models/room_user"
import user from "../models/user"

const getRooms = async (req: Request, res: Response): Promise<void> => {
  try {
    let roomList = []
    if(req.query) {
      const { personal } = req.query
      if(personal) {
        console.log('room:', req.token)
        roomList = await Room_User.find({
          userId: req.token.userId
        }).populate('roomId', '_id name')
        res.json(roomList.map((room) => room.toJSON())); 
      }
    }else{
       roomList = await Room.find();
       res.json(roomList.map((room) => room.toJSON()));
    }
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
    console.log(id)
    const room = await Room.findById(id);
    console.log('getRoomMember', room)
    if (room) {
      const records = await Room_User.find({
        roomId: id
      }).populate('userId')
      res.json({
        members: records.map(record => record.userId)
      })
    } else {
      res.status(404);
    }
  } catch (error) {
      throw error;
    }
}
const addMemberToRoom = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const room = await Room.findById({ _id: id });
    if (!room) {
      res.status(404)
    }
    const room_user = new Room_User({
      roomId: id,
      userId: req.token.openId
    })
    const newRoomUser = await room_user.save()
    res.status(200)
  } catch (error) {
    throw error;
  }
}

const leaveRoom = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const room = await Room.findById({ _id: id });
    if (!room) {
      res.status(404);
    }
    const deleteRoom = await Room_User.remove({
      roomId: id,
      userId: req.token.userId
    });
    res.status(200);
  } catch (error) {
    throw error;
  }
};

export {
  getRooms,
  createRoom,
  updateRoom,
  getRoomMember,
  addMemberToRoom,
  leaveRoom,
};