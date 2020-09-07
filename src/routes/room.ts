import { Router } from "express"
import { getRooms, createRoom, addMemberToRoom, leaveRoom, getRoomMember } from "../controllers/room"

export const roomRouter: Router = Router()
roomRouter.get("/get", getRooms)
roomRouter.post("/add", createRoom)
roomRouter.post("/add-member/:id", addMemberToRoom)
roomRouter.post("/get-member/:id", getRoomMember)
roomRouter.delete("/leave-room", leaveRoom)
