let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Private Om:v')).buffer(), `
> Script Ori = https://github.com/nurutomo/wabot-aq

`.trim(), '© IyanXyz Gnteng', 'OwnerBot', '.owner')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
