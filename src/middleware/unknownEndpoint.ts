const { model } = require("../models/user")

import { Response, Request } from "express"

export const unknownEndpoint = (request: Request, response: Response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}