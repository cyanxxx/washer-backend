import express, { Express, Router } from "express"
import cors from "cors"
import {recordRouter, roomRouter, userRouter, loginRouter, resignterRouter} from "./routes"
import { unknownEndpoint } from "./middleware/unknownEndpoint"
import { checkAuth } from "./middleware/auth"

const app:Express = express()
const PORT = process.env.PORT
const router = Router()
app.use(cors())
app.use(express.json())
app.use(checkAuth)
router.use('/api/user', userRouter)
router.use('/api/room', roomRouter)
router.use('/api/record', recordRouter)
router.use('/api/login', loginRouter)
router.use('/api/resignter', resignterRouter)
app.use(router)
app.use(unknownEndpoint)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


