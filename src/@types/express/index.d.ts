
import * as express from "express"
import { IUserToken } from '../../types/token'
declare global {
    namespace Express {
        interface Request {
            token: IUserToken
        }
    }
}