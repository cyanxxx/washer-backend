import { Response, Request } from "express"
import { verify } from "jsonwebtoken"
import { IUserToken } from "../types/token"

// ...
export const getTokenFrom = (request: Request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

export const tokenExtractor = (request: Request, response: Response, next: any) => {
    // code that extracts the token
    const token = getTokenFrom(request)
    if (!token) {
        return response.status(401).json({
            error: 'token missing or invalid'
        })
    }
    const decodedToken = verify(token, process.env.SECRET!)
    request.token = decodedToken as IUserToken
    next()
}
const whiteList = ['/login', 'resignter']
export const checkAuth = (request: Request, response: Response, next: any) => {
    let isWhiteUrl = whiteList.some((whiteUrl)=> request.url === whiteUrl);
    if(isWhiteUrl) {
        next()
    }else{
        tokenExtractor(request, response, next)
    }
}