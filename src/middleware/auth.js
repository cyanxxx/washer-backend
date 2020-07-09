const jwt = require('jsonwebtoken')

// ...
const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const tokenExtractor = (request, response, next) => {
    // code that extracts the token
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({
            error: 'token missing or invalid'
        })
    }
    request.token = decodedToken
    next()
}

module.exports = tokenExtractor