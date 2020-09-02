import { Router } from "express"
import { getRooms, createRoom, addMemberToRoom, leaveRoom } from "../controllers/room"

export const roomRouter: Router = Router()
roomRouter.get("/get", getRooms)
roomRouter.post("/add", createRoom)
roomRouter.post("/add-member", addMemberToRoom)
roomRouter.delete("/leave-room", leaveRoom)
