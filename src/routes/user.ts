import { Router } from "express"
import {getUser, updateUser} from "../controllers/user"
export const userRouter: Router = Router()
userRouter.get("/get", getUser)
userRouter.post("/post", updateUser)
