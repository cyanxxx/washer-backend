
import { Response, Request } from "express"
import User from "../models/user"

const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    let { openId } = req.token
    let user = await User.findById(openId);
    res.status(200).json({ user })
  } catch (error) {
    throw error
  }
}

export {getUser}