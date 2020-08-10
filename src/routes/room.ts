import { Router } from "express"
import { getRooms, createRoom } from "../controllers/room"

export const roomRouter: Router = Router()
roomRouter.get("/get", getRooms)
roomRouter.post("/add", createRoom)
