import { Response, Request } from "express"
import User from "../models/user"
import { wxLogin } from "../service/wxLogin"

export const register = async (request: Request, response: Response) => {
    try {
        const body = request.body
        const { openid } = await wxLogin(body.code)
        const existUser = await User.findOne({ openId: openid });
        if (existUser) {
          return response.status(409).send('已经注册请直接登录')
        }
        const user = new User({
            aliasName: body.aliasName,
            rooms: body.rooms || [],
            color: body.color,
            openId:openid 
        })
        const newUser = await user.save();
        response.json(newUser.toJSON())
    } catch (error) {
        console.log(error)
    }
}

