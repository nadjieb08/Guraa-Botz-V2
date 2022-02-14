let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'Top Up Invertory')).buffer(), `╭═══ *〘 Top Up Exp & Money 〙*
║ ┅ ๑————————————๑
║┊ ⌲ 500.000.000 Exp = _5k_
║┊ ⌲ 500.000.000 Money = _10k_                                                                      
╰═ ┅ ═══════
╭═══ *〘 Top Up Crate 〙*
║ ┅ ๑————————————๑
║┊ ⌲ 500.000 Legendary Crate = _5k_
║┊ ⌲ 1.000.000 Legendary = _10k_
║┊ ⌲ 500.000 Mythic Crate = _5k_
║┊ ⌲ 1.000.000 Mythic Crate = _10k_
╰═ ┅ ═══════
`.trim(), `GuraaBotz`, 'List Menu', '#menu', 'Owner', '#owner', m)
}

handler.help = ['topup']
handler.tags = ['main']
handler.command = /^topup(bot)?$/i

module.exports = handler
