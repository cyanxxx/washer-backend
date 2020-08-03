const loginRouter = require('express').Router()
const wxLogin = require('../service/wxLogin')
const Users = require('../models/user')

loginRouter.post('/', async (request, response) => {
	const body = request.body
	console.log(body)
	const { opernId } = wxLogin(body.code)
   
	const user = await Users.findOne({userId: opernId})
	if(user) {
		const userForToken = {
			id: user._id,
		}
		const token = jwt.sign(userForToken, process.env.SECRET)
		response
			.status(200)
			.send({
				token,
				name: user.aliasName
			})
	}
})

module.exports = loginRouter