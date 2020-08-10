import { Router } from "express"
import {updateRecord, createRecord, getLateset, getRecord} from "../controllers/record"
export const recordRouter: Router = Router()
recordRouter.get("/get", getRecord)
recordRouter.post("/latest", getLateset)
recordRouter.post("/add", createRecord)
recordRouter.post("/update", updateRecord)

 