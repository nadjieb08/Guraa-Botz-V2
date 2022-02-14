let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╭═══ *〘 SEWA 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Sewa = _5k/grup (1 Bulan)_
║┊ ⌲ Sewa = _15k/grup (Permanent)_                                                                      
║┊ ⌲ Sewa = _20k/2grup (12 bulan)_
╰═ ┅ ═══════
╭═══ *〘 BELI PREMIUM 〙*
║ ┅ ๑————————————๑
║┊ ⌲ Premium = _10k/bulan_
║┊ ⌲ Premium = _15k/permanent_
║┊ ⌲ Jadi Owner = _25k/permanen
║┊ ⌲ Black Card Vip = _30k/permanen
╰═ ┅ ═══════

༅ _*KEUNTUNGAN SEWABOT*_

✧ *Bot akan masuk gc*
✧ *Bisa Menyuruh Bot Buka/Tutup Group*
✧ *Kick Orang*
✧ *Add Orang*
✧ *Anti Link On*
✧ *Bisa Memasukkan Bot Ke dalam Grup*

*[❗] Jika Group Sepi 2 minggu, bot akan leave*

◪ *Jika Minat Hubungi owner kami*

▌│█║▌║▌║║▌║▌║█│▌
`.trim(), `GuraaBotz`, 'List Menu', '#menu', 'Owner', '#owner', m)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i

module.exports = handler
