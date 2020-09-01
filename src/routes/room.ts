import { Router } from "express"
import { getRooms, createRoom, addMemberToRoom } from "../controllers/room"

export const roomRouter: Router = Router()
roomRouter.get("/get", getRooms)
roomRouter.post("/add", createRoom)
roomRouter.post("/add-member", addMemberToRoom)
