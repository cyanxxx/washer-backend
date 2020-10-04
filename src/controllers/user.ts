
import { Response, Request } from "express"
import User from "../models/user"
import Room_User from "../models/room_user"

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let { userId } = req.token
    let user = await User.findById(userId);
    res.status(200).json({ user })
  } catch (error) {
    throw error
  }
}

const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let { userId } = req.token
    const { room, ...userInfo } = req.body
    let user = await User.findByIdAndUpdate({_id: userId}, userInfo)
    let roomInfo = []
    for(let i = 0; i<room.length;i++) {
      const data = room[i]
      const record = await Room_User.exists({ roomId: data._id,  userId: req.token.userId});
      if(record)continue
      else{
        const room_user = await new Room_User({
          roomId: data._id,
          userId: req.token.userId
        })
        const newRoomUser = await room_user.save();
        roomInfo.push(newRoomUser.populate('roomId', '_id name'))
      }
    }
    res.status(200).json({ user, room: roomInfo})
  } catch (error) {
    throw error
  }
}

export {getUser, updateUser}