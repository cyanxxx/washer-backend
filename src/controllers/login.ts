
import { Response, Request } from "express"
import User from "../models/user"
import { wxLogin } from "../service/wxLogin"
import { sign } from "jsonwebtoken"
import { IUserToken } from "../types/token"


const login = async (request: Request, response: Response) => {
	const body = request.body
	console.log(body)
	const { openId } = await wxLogin(body.code)
   
	const user = await User.findOne({ openId: openId });
	if(user) {
		const userForToken:IUserToken = {
			openId: user.openId,
			aliasName: user.aliasName,
			userId: user._id
		}
		const token = sign(userForToken, process.env.SECRET!)
		response
			.status(200)
			.send({
				token,
				name: user.aliasName
			})
	}else{
		response
			.status(401)
			.send({
				msg: '还没在洗碗工注册'
			})
	}
}
export { login }