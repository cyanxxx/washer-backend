import fetch from 'node-fetch'

const wxLogin = async function (code: string) {
    try {
        const data = await fetch(`https://api.weixin.qq.com/sns/jscode2session?appid=${process.env.APP_ID}&secret=${process.env.APP_SECRET}&js_code=${code}&grant_type=authorization_code`)
        return data.json()
    } catch (error) {
        console.log(error)
    }
}

export { wxLogin }