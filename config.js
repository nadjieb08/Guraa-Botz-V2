// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// thank you to pilarv2
// and thanks you to who support my Bot

gc1 = 'https://tinyurl.com/yapnjvdt'
gc2 = ''
gc3 = ''
global.linkGC = ['https://tinyurl.com/yapnjvdt', ''] // ganti jadi group lu
global.owner = ['6282234343854', '6282234343854', '6282234343854', '6282234343854'] // Put your number here //owner eval
global.kontak = ['6282234343854', '6282234353854', '6289503886568', '6289503886568'] //Ketika ada yang ngetik #owner
global.mods = ['0'] // Want some help?
global.prems = ['6282234343854', '6281244706456', '6281214769844', '6281913868660'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  rey: 'https://server-api-rey.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://rest-api-jibb.herokuapp.com': 'ZBOTZZZZ' (apikey kalian)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'RFK-Rey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'RFK-Rey'
zekskey = 'apivinz'
xteamkey = 'Dawnfrostkey'
//xteam        MIMINETBOT
namaig = 'GAK ADA :)'
namagithub = 'https://github.com/IyanXyz'
kasihcaption = `Nih Om😎`
namakontak1 = 'Owner Tikibot'
namakontak2 = 'Nomor Official TikiBot'

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'TikiBot' // ganti aja
global.author = 'Punya Nadjieb' // ganti aja

//yyy
bc = 'TikiBot' //Broadcast Watermak
footer = 'Broadcast TikiBot'
namabot = 'TikiBot'
namalu = 'Nadjieb'
watermark = 'TikiBot, By nadjieb' //ganti aja

// 
wait = '_*Tunggu Sebentar...*_'
global.botwm = 'TikiBot Nadjieb'
global.wait = '_*Tunggu Sebentar...*_'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Server Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='

// Ubah saja Tambahan By IyanXyz Ganz
global.image = 'https://telegra.ph/file/3338e1a48968776b43aa2.jpg'//thumbnail
global.iyanxyz = 'https://telegra.ph/file/3338e1a48968776b43aa2.jpg'//thumbnail buat menu

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 150 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
