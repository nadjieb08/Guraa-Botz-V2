let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.send2Button(m.chat, `
• Gausah Spam
• Gausah Telp
• Gausah Kirim Virtex
• Gausah Chat Owner Gje
     Mending Gausah Mainin Bot Kalo Gatau Etika
IyanXyz
`.trim(), 'Harap patuhin peraturan tersebut', '⋮☰ Menu', '.menu', 'Owner', '.owner', m)

handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(rules|peraturan)$/i

module.exports = handler

