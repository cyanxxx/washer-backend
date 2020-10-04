import fetch from 'node-fetch'

const wxLogin = async function (code: string) {
    try {
        const res = await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}&js_code=${code}&grant_type=authorization_code`)
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export { wxLogin }