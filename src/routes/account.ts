import { Router } from "express"
import {login} from "../controllers/login"
export const loginRouter: Router = Router()
loginRouter.post("/", login)

import {register} from "../controllers/register"
export const resignterRouter: Router = Router()
resignterRouter.post("/", register)

 