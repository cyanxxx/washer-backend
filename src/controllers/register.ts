import { Response, Request } from "express"
import User from "../models/user"
import { wxLogin } from "../service/wxLogin"
import Room_User from "../models/room_user"

export const register = async (request: Request, response: Response) => {
    try {
        const body = request.body
        console.log(body.code)
        const { openid } = await wxLogin(body.code)
        console.log(openid)
        const existUser = await User.findOne({ openId: openid });
        if (existUser) {
          return response.status(409).send({message: '已经注册请直接登录'})
        }
        
        const user = new User({
            aliasName: body.aliasName,
            color: body.color,
            openId:openid 
        })

        if(body.room) {
            const room_user = new Room_User({
                roomId: body.room,
                userId: user._id
              })
              const newRoomUser = await room_user.save()
        }

        const newUser = await user.save();
        response.json(newUser.toJSON())
    } catch (error) {
        console.log(error)
    }
}

