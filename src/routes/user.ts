import { Router } from "express"
import {getUser} from "../controllers/user"
export const userRouter: Router = Router()
userRouter.get("/get", getUser)
