import { Router } from "express"
import {updateRecord, createRecord, getLatest, getRecord} from "../controllers/record"
export const recordRouter: Router = Router()
recordRouter.get("/get", getRecord)
recordRouter.post("/latest/:id", getLatest)
recordRouter.post("/add", createRecord)
recordRouter.post("/update", updateRecord)

 