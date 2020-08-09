import { Response, Request } from "express"
import User from "../models/user"
import { wxLogin } from "../service/wxLogin"

export const resignter = async (request: Request, response: Response) => {
    try {
        const body = request.body
        const { openid } = await wxLogin(body.code)
        const newUser = new User({
            aliasName: body.aliasName,
            color: body.color,
            openId:openid 
        })
        const user = await newUser.save()
        response.json(newUser.toJSON())
    } catch (error) {
        console.log(error)
    }
}

