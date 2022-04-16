const get = require('https').get

/**
 * 获取要发送的消息
 */
const getMessageContent = () => {
  const msg = process.env.TG_MSG
  if (!msg) throw new Error('没有获取到要发送的消息，请确保环境变量 TG_MSG 设置正确')
  return msg
}
/**
 * 获取 token
 */
const getToken = () => {
  const token = process.env.TG_TOKEN
  if (!token) throw new Error('没有获取到 Bot Token，请确保环境变量 TG_TOKEN 设置正确')
  return token
}

/**
 * 获取目标对话的 ID
 */
 const getChatId = () => {
  const chatId = process.env.CHAT_ID
  if (!chatId) throw new Error('没有获取到目标对话的 ID，请确保环境变量 CHAT_ID 设置正确')
  return chatId
}

const main = () => {
  // 转义获取到的消息
  const msg = encodeURIComponent(getMessageContent())
  const token = getToken()
  const chatId = getChatId()
  // 开始发送
  get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${msg}&parse_mode=MarkdownV2`, (res) => {
    // 设置要接收的编码格式
    res.setEncoding('utf-8')
    // 响应数据
    let rawData = ''
    res.on('data', (chunk) => rawData += chunk)
    res.on('end', () => {
      try {
        const d = JSON.parse(rawData)
        if (d.ok) {
          console.log('Bot 消息发送成功')
        } else {
          console.log('Bot 消息发送失败' + JSON.stringify(d))
        }
      } catch (e) {
        console.error(e.toString())
      }
    })
  }).on('error', (e) => {
    // 捕获错误
    console.error(`Got error: ${e.toString()}`)
  })
}

main()