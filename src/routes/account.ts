import { Router } from "express"
import {login} from "../controllers/login"
export const loginRouter: Router = Router()
loginRouter.post("/", login)

import {resignter} from "../controllers/resignter"
export const resignterRouter: Router = Router()
resignterRouter.post("/", resignter)

 