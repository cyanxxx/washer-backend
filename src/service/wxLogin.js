const fetch = require('node-fetch')
const wxLogin = function(code) {
    return fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}&js_code=${code}&grant_type=authorization_code`).then(res => {
        return res.json()
    }).then(json => {
        console.log(json)
        return json
    }).catch(err => {
        console.log(error)
    })
}

module.exports = wxLogin