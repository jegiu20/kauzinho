const { WAConnection, MessageTypeProto, MessageType, Presence, Mimetype, GroupSettingChange } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const { wait, webp2gifFile, simih, convertSticker, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start,  info, success, close } = require('./lib/functions')
//cker,  createSticker } = require('wa-sticker-formatter')

const { fetchJson, fetchText, getBase64, createExif } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const {  y2mateA, y2mateV, ytplay } = require('./plugins/y2mate.js')
const { 
spawn, 
exec, 
execSync
} = require('child_process')
const {
  ytMp3,
  ytMp4,
  ytPlay2,
  ytPlayMp4,
  ytSearch
} = require('./lib/yt.js')
/////Modulos//   

const fs = require('fs')
const hx = require('./lib/api')
const gimage = require('./lib/g-i-s')
const thiccysapi = require('textmaker-thiccy');
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const util = require('util');
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const yts = require('./lib/yt-search')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const settings = JSON.parse(fs.readFileSync('./media/settings.json'));
const settingsss = JSON.parse(fs.readFileSync('./media/settings2.json'));
const comandos = JSON.parse(fs.readFileSync('./media/user/comandos.json'));
const sugestao = JSON.parse(fs.readFileSync('./media/user/sugestao.json'))
const mess2 = require('./lib/bot/config.js')
const mess = JSON.parse(fs.readFileSync('./lib/bot/mess.json'))
prefix = require('./config.json').prefix
//battre = '0'
textodono = `
Sou uma Inteligencia Artificial
criada para gerenciar e administrar
grupos de whatsapp trazendo
diversão e muita alegria
Sou apenas um bot humilde
criado por Kauan

caso queira ajudar 
mande um pix:

d76468dd-b7f5-4c5c-9b85-302f5f353c05
`



blocked = []
function tempo(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var horas = Math.floor(seconds / (60*60));
  var minutos = Math.floor(seconds % (60*60) / 60);
  var segundos = Math.floor(seconds % 60);
  return `${pad(horas)} : ${pad(minutos)} : ${pad(segundos)} segundos`
}

async function starts() {
const conn = new WAConnection()
conn.logger.level = 'warn'
console.log(banner.string)
conn.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanei o código QR acima'))
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
conn.on('connecting', () => {
start('2', 'Conectando...')
})
conn.on('open', () => {
success('2', 'Conectado.')
})
await conn.connect({timeoutMs: 30*1000})
console.log ("olá " + conn.user.name + "! Você conectou via proxy")
fs.writeFileSync('./session.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))


/////////////BATERIA///////////////
conn.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
battre = batterylevel 
Charging2 = parseInt (json[2][0][1].live)
charging = Charging2
if (json[2][0][1].live == 'true') charging = true
if (json[2][0][1].live == 'false') charging = false
console.log(json[2][0][1])
console.log(color('Carga da bateria: ' + batterylevel+'%', "pink"))
})

 /*if (battre == undefined) {
				bateria = `[▒▒▒▒▒▒▒▒▒]`
  }else if (battre <= 10) {
				bateria = `[█▒▒▒▒▒▒▒▒▒]`
			} else if (battre <= 20) {
				bateria = `[██▒▒▒▒▒▒▒▒]`
			} else if (battre <= 30) {
				bateria = `[███▒▒▒▒▒▒▒]`
			} else if (battre <= 40) {
				bateria = `[████▒▒▒▒▒▒]`
			} else if (battre <= 50) {
				bateria = `[█████▒▒▒▒▒]`
			} else if (battre <= 60) {
				bateria = `[██████▒▒▒▒]`
			} else if (battre <= 70) {
				bateria = `[███████▒▒▒]`
			} else if (battre <= 80) {
				bateria = `[████████▒▒]`
			} else if (battre <= 90) {
				bateria = `[█████████▒]`
			} else if (battre <= 100) {
				bateria = `[██████████]`
			}
			*/

//////////////FIM//////////////
conn.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}})


conn.on('group-participants-update', async (anu) => {
if (!welkom.includes(anu.jid)) return
try {
const mdata = await conn.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
kk = ["1","2"]
k2 = kk[Math.floor(Math.random() * kk.length)]
if(k2 === '1'){
//const grupo = await conn.groupMetadata(anu.jid)
num = anu.participants[0]
console.log(color('[ADD] entraram via link ou foi adicionado', 'red'))
await conn.sendMessage(anu.jid, `bem vindo ${num.split('@')[0]}`, MessageType.text)
}
if(k2 === '2'){
//const grupo = await conn.groupMetadata(anu.jid)
num = anu.participants[0]
balala = `🤖 Olá, @⁨${num.split("@")[0]}\n\nBem vindo(a)\n\n┏━━━━━━━━━━━━━━━\n┃────「 ɪɴᴛʀᴏ 」────\n┃━━━━━━━━━━━━━━━\n┠⊷️ 👤 NOME\n┠⊷️ 👀 GÊNERO \n┠⊷️ 🏙️ CIDADE NATAL \n┠⊷️ 🗃️ CPF\n┠⊷️ 🕵️ RG\n┠⊷️ 🤡 FOTO DA INDENTIDADE\n┠⊷️ 💳 FOTO DO CARTÃO\n┠⊷️ ❗ OBS: FRENTE E VERSO\n┗━━━━━━━━━━━━━━━\n\n*APROVEITE O GRUPO!*`
conn.sendMessage(anu.jid, balala, MessageType.text)
conn.sendMessage(anu.jid, `🤖 Leia as regras do grupo, @${num.split("@")[0]}⁨⁩ ... Muitos floodadores, travazapers e pessoas sem noção já foram banidos, não seja mais um imbecil e vire estatística! 🤝🏼`, MessageType.text)
}}else if(anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await conn.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `Sayonara @${num.split('@')[0]}👋`
let buff = await getBuffer(ppimg)
conn.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}} catch (e) {
console.log('Error : %s', color(e, 'red'));
}})

conn.on('chat-update', async (msg) => {
try{
            const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
            
            if (!msg.hasNewMessage) return
            msg = msg.messages.all()[0]
			if (!msg.message) return
			if (msg.key && msg.key.remoteJid == 'status@broadcast') return
			//if (msg.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(msg.message)
			const speed = require('performance-now');
			const from = msg.key.remoteJid
			const type = Object.keys(msg.message)[0]
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
			const time = moment.tz('America/Sao_paulo').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text.startsWith(prefix) ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : (type == 'stickerMessage') && ((msg.message[type].fileSha256.toString('base64')) !== null && (msg.message[type].fileSha256.toString('base64')) !== undefined) ? (msg.message[type].fileSha256.toString('base64')) : ""			         
            budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
            button = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedDisplayText : ''
            button = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
            const q = args.join(' ')
			const isCmd = body.startsWith(prefix)
			const botNumber = conn.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? msg.participant : msg.key.remoteJid
			const pushname = conn.contacts[sender] != undefined ? conn.contacts[sender].notify : conn.user.name
            const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = msg.key.fromMe || setting.ownerNumber.includes(sender)
			const isLeveling = isGroup ? settings.leveling.includes(from) : false
			const sendFileFromUrl = async(link, type, options) => {
    hasil = await getBuffer(link)
	conn.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	conn.sendMessage(from, hasil, type, options).catch(e => {
	conn.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Erro ao fazer o download Da Media_')
	  console.log(e)
	});});});});}
			const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}
			const reply = (teks) => {
				conn.sendMessage(from, teks, text, {quoted:msg})}
			const sendMess = (hehe, teks) => {
				conn.sendMessage(hehe, teks, text)}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : conn.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})}

const ftoko = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync(`./src/image.jpg`)},"title": `eai ${pushname}\nTudo bão??`,"description": "_EDICTH-BOT_", "currencyCode": "IDR","priceAmount1000": "9999999999","retailerId": "_EDICTH-BOT_","productImageCount": 1},"businessOwnerJid": `554491150998@s.whatsapp.net`}}}

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `_EDICTH-BOT_`,"title": "hmm" }}}
///////////FUNÇÕES//////
/*
const getEujá = (from) => { let position = false; Object.keys(settingsss.eujaXeununca).forEach((i) => { if (settingsss.eujaXeununca[i].ativado === true && settingsss.eujaXeununca[i].groupId === from) {  position = i }}); if (position !== false) { return  settingsss.eujaXeununca[position].eujá }
const getEununca = (from) => { let position = false; Object.keys(settingsss.eujaXeununca).forEach((i) => { if (settingsss.eujaXeununca[i].ativado === true && settingsss.eujaXeununca[i].groupId === from) {  position = i }}); if (position !== false) { return  settingsss.eujaXeununca[position].eununca }
const addEujaXeununca = (from) => { const obj = { groupId: from, ativado: true, eujá: 0, eununca: 1};settingsss.eujaXeununca.push(obj); fs.writeFileSync('./media/settings2.json', JSON.stringify(settingsss))}
const addEujá = (from) => { let position = false; Object.keys(settingsss.eujaXeununca).forEach((i) => { if (settingsss.eujaXeununca[i].ativado === true && settingsss.eujaXeununca[i].groupId === from) { position = i }}); if (position !== false) { settingsss.eujaXeununca[position].eujá += 1; fs.writeFileSync('./media/settings2.json', JSON.stringify(settingsss))}}
const addAtivado = (from) => { let position = false; Object.keys(settingsss.eujaXeununca).forEach((i) => { if (settingsss.eujaXeununca[i].ativado === true && settingsss.eujaXeununca[i].groupId === from) { position = i }}); if (position !== false) { settingsss.eujaXeununca[position].ativado = false; fs.writeFileSync('./media/settings2.json', JSON.stringify(settingsss))}}
const addEununca = (from) => { let position = false; Object.keys(settingsss.eujaXeununca).forEach((i) => { if (settingsss.eujaXeununca[i].ativado === true && settingsss.eujaXeununca[i].groupId === from) { position = i }}); if (position !== false) { settingsss.eujaXeununca[position].eununca += 1; fs.writeFileSync('./media/settings2.json', JSON.stringify(settingsss))}}
*/
//////BLOCK CMD///////
const addComandosId = (from) => { const obj = { groupId : from, comandos:[]}; comandos.push(obj); fs.writeFileSync('./media/user/comandos.json', JSON.stringify(comandos))};
const getComandos = (from) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from) { position = i }}); if (position !== false) { return comandos[position].groupId }}
const addComandos = (from, oq) => { let position = false;Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from ){ position = i }}); if (position !== false) { comandos[position].comandos.push(oq); fs.writeFileSync('./media/user/comandos.json', JSON.stringify(comandos))}}
const deleteComandos = (from, oq) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from ){ position = i }}); if (position !== false) { comandos[position].comandos.splice(oq, 1); fs.writeFileSync('./media/user/comandos.json', JSON.stringify(comandos))}}
const getComandoBlock = (from) => { let position = false; Object.keys(comandos).forEach((i) => { if (comandos[i].groupId === from) { position = i }}); if (position !== false) { return comandos[position].comandos}}

const getLevelcash2 = (userId, from) => { let position = false; Object.keys(settings.level).forEach((i) => { if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) { position = i }}); if (position !== false) { return settings.level[position].cash }}
const getLevellevel2 = (userId, from) => { let position = false; Object.keys(settings.level).forEach((i) => { if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) { position = i }}); if (position !== false) { return settings.level[position].level }}
const getLeveling2 = (userId, from) => { let position = false; Object.keys(settings.level).forEach((i) => { if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) { position = i }}); if (position !== false) { return settings.level[position].pessoa }}
const addCash2 = (userId, from, quanto) => { let position = false; Object.keys(settings.level).forEach((i) => { if (settings.level[i].pessoa === userId && settings.level[i].grupo === from) { position = i }}); if (position !== false) { settings.level[position].cash += quanto; fs.writeFileSync('./media/settings.json', JSON.stringify(settings))}}
const addLevel2 = (userId, from, quanto) => { let position = false; Object.keys(settings.level).forEach((i) => { if (settings.level[i].pessoa === userId && settings.level[i].grupo === from ){ position = i }}); if (position !== false) { settings.level[position].level += quanto; fs.writeFileSync('./media/settings.json', JSON.stringify(settings)) }}
const addLevelingId2 = (userId, from) => { const obj = { grupo: from, pessoa: userId, cash: 1, level: 1}; settings.level.push(obj); fs.writeFileSync('./media/settings.json', JSON.stringify(settings))}



if(isGroup){ checar = getComandos(from); if(checar === undefined) addComandosId(from) }
if(isGroup && isCmd && getComandoBlock(from).includes(command)){ 
k = `  Olá *${pushname}*
├ O comando *${command}* está
├ Blockeado no momento`
return reply(k)}
////FIMMMMMMMMM/////


//FUNÇAO PATENTE
const nivelAtual = getLevellevel2(sender, from)
var patt = 'Bronze I🥉'; if (nivelAtual === 1) {patt = 'Bronze  I🥉' } else if (nivelAtual === 2) {patt = 'Bronze II🥉'} else if (nivelAtual === 3) {patt = 'Bronze  III🥉'} else if (nivelAtual === 4) {patt = 'Bronze  IV🥉'} else if (nivelAtual === 5) {patt = 'Bronze  V🥉'} else if (nivelAtual === 6) {patt = 'Prata I🥈'} else if (nivelAtual === 7) {patt = 'Prata II🥈'} else if (nivelAtual === 8) {patt = 'Prata III🥈'} else if (nivelAtual === 9) {patt = 'Prata IV🥈'} else if (nivelAtual === 10) {patt = 'Prata V🥈'} else if (nivelAtual === 11) {patt = 'Ouro I🥇'} else if (nivelAtual === 12) {patt = 'Ouro II🥇'} else if (nivelAtual === 13) {patt = 'Ouro III🥇'} else if (nivelAtual === 14) {patt = 'Ouro IV🥇'} else if (nivelAtual === 15) {patt = 'Ouro V🥇'} else if (nivelAtual === 16) {patt = 'Campeão I🏆'} else if (nivelAtual === 17) {patt = 'Campeão II🏆'} else if (nivelAtual === 18) {patt = 'Campeão III🏆'} else if (nivelAtual === 19) {patt = 'Campeão IV🏆'} else if (nivelAtual === 20) {patt = 'Campeão V🏆'} else if (nivelAtual === 21) {patt = 'Diamante I 💎'} else if (nivelAtual === 22) {patt = 'Diamante II 💎'} else if (nivelAtual === 23) {patt = 'Diamante III 💎'} else if (nivelAtual === 24) {patt = 'Diamante IV 💎'} else if (nivelAtual === 25) {patt = 'Diamante V 💎'} else if (nivelAtual === 26) {patt = 'Mestre I 🐂'} else if (nivelAtual === 27) {patt = 'Mestre II 🐂'} else if (nivelAtual === 28) {patt = 'Mestre III 🐂'} else if (nivelAtual === 29) {patt = 'Mestre IV 🐂'} else if (nivelAtual === 30) {patt = 'Mestre V 🐂'} else if (nivelAtual === 31) {patt = 'Mítico I 🔮'} else if (nivelAtual === 32) {patt = 'Mítico II 🔮'} else if (nivelAtual === 33) {patt = 'Mítico III 🔮'} else if (nivelAtual === 34) {patt = 'Mítico IV 🔮'} else if (nivelAtual === 35) {patt = 'Mítico V 🔮'} else if (nivelAtual === 36) {patt = 'God I🕴'} else if (nivelAtual === 37) {patt = 'God II🕴'} else if (nivelAtual === 38) {patt = 'God III🕴'} else if (nivelAtual === 39) {patt = 'God IV🕴'} else if (nivelAtual === 40) {patt = 'God V🕴'} else if (nivelAtual > 41) {patt = '🛐Grande Mestre🛐'}

////////SISTEMA LEVEIS
if (isGroup && isLeveling && !msg.key.fromMe ) {
currentLevel = getLevellevel2(sender, from)
checkin = getLeveling2(sender, from)
try {
if (currentLevel === undefined && checkin === undefined) addLevelingId2(sender, from)
const amountXp = Math.floor(Math.random() * 10) + 200
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevellevel2(sender, from)
addCash2(sender, from, amountXp)
if (requiredXp <= getLevelcash2(sender, from)) {
addLevel2(sender, from, 1)
b = `            ◪ *LEVEL UP* ◪
            
├─ ❏ *NÚMERO*: ${sender.split("@")[0]}.  
├─ ❏ *HORA*: ${time}.                                                                                    
├─ ❏ *PATENTE*: ${patt}
├─ ❏ *CASH*: ${getLevelcash2(sender, from)}
└─ ❏ *LEVEL*: ${getLevel} -> ${getLevellevel2(sender, from)}`
 reply(b) }} catch (err) { console.error(err) }}


data = new Date();

var semana = data.getDay();

var mês = data.getMonth();

switch(semana){

case 0: semana = 'Domingo'; break

case 1: semana = 'Segunda'; break

case 2: semana = 'Terça'; break

case 3: semana = 'Quarta'; break

case 4: semana = 'Quinta'; break

case 5: semana = 'Sexta'; break

case 6: semana = 'Sabado'; break

}

switch(mês){

case 0: mês = 'Janeiro'; break

case 1: mês = 'Fevereiro'; break

case 2: mês = 'Março'; break

case 3: mês = 'Abril'; break

case 4: mês = 'Maio'; break

case 5: mês = 'Junho'; break

case 6: mês = 'Julho'; break

case 7: mês = 'Agosto'; break

case 8: mês = 'Setembro'; break

case 9: mês = 'Outubro'; break

case 10: mês = 'Novembro'; break

case 11: mês = 'Dezembro'; break

}





//////FIM/////

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isImage = (type === 'imageMessage')
			const isSticker = (type === 'stickerMessage')
			const isVideo = (type === 'videoMessage')
			

			if (!isCmd && !isGroup) {  console.log('> MENSAGEM AS', color(time, 'yellow'), 'DE', color(`"${pushname} "`)) }
            if (!isCmd && isGroup) {  console.log('> MENSAGEM AS', color(time, 'yellow'), 'DE', color(`"${pushname}" `), 'EM', color(`"${groupName || formattedTitle}"`)) }
            if (isCmd && !isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(time, 'yellow'), 'DE', color(`"${pushname} - []"`)) }
            if (isCmd && isGroup) { console.log(color(`> COMANDO "[${prefix}${command.toUpperCase()}]"`), 'AS', color(time, 'yellow'), 'DE', color(`"${pushname} - []"`), 'EM', color(`"${groupName || formattedTitle}"`)) }
		
function addMetadata(packname, author) { if (!packname) packname = 'edicth'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, ''); let name = `${author}_${packname}`; if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`; const json = {	"sticker-pack-name": packname,"sticker-pack-publisher": author }; const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	;const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]; let len = JSON.stringify(json).length ; let last; if (len > 256) { len = len - 256; bytes.unshift(0x01)	} else { bytes.unshift(0x00) }; if (len < 16) {	last = len.toString(16)	; last = "0" + len	} else {	last = len.toString(16)	}; const buf2 = Buffer.from(last, "hex"); const buf3 = Buffer.from(bytes); const buf4 = Buffer.from(JSON.stringify(json)); const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4]); fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	return `./src/stickers/${name}.exif` }); }
if(isOwner){
//INICIO COMANDOS STARTSWITH
if (budy.startsWith('>')) { console.log('[', color('EVAL', 'silver'),']', color(moment(msg.messageTimestamp * 1000).format('DD/MM HH:mm:ss'), 'yellow'), color(budy)); try { return reply(JSON.stringify(eval(budy.slice(2)),null,'\t')) } catch(e) { reply(`${e}`)}}
if (budy.startsWith('=>')){ var konsol = budy.slice(3); Return = (sul) => { var sat = JSON.stringify(sul, null, 2); bang = util.format(sat); if (sat == undefined){ bang = util.format(sul) }; return reply(bang)}; try { reply(util.format(eval(`;(async () => { ${konsol} })()`))); console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))} catch(e){ reply(String(e)) }}
if (budy.startsWith('$')) {exec(q, (err, stdout) => { if(err) return reply(`${err}`); if (stdout) { reply(stdout) }})}
}
///////////////COMANDOS SEM PREFIXO
switch(budy){
case 'bot':;case 'Bot':;case 'BOT':
conn.sendButtons(from, 'Esse menu foi ativado, por que você falou o meu nome, em que posso ser útil?', 
                [{
                    buttonId: `${prefix}menu`,
                    buttonText:{displayText: 'MENU DO BOT'},type:1},
                {
                    buttonId: `${prefix}about`,
                    buttonText: {displayText: 'Saiba mais de mim'},type:1},
                 {
                    buttonId: "nadinha",
                    buttonText: {displayText: 'por enquanto nada'},type:1}], "Oi? ta falando de mim? Em que posso te ajudar?")

break

case '..':
conn.sendButtons(from, ' ', 
                [               
                {
                    buttonId: "id3",
                    buttonText: {displayText: 'Não'},type:1}
                    ]
                    , "  ")

break

case '...':
conn.sendButtons(from, ' ',  [{buttonId: "id3", buttonText: {displayText: 'SIMM'}, type:1}], "  ")
break

}
switch(command) {
			
		  
			case 'chatlist':
			totalchat = await conn.chats.all()
					conn.updatePresence(from, Presence.composing)  
					teks = 'Esta é a lista em numero dos chats :\n'
					for (let all of totalchat) {
						teks += `~> @${JSON.stringify(all.jid).replace('@s.whatsapp.net','').replace('@g.us', '')}\n`
					}
					teks += `Total : ${totalchat.length}`
					conn.sendMessage(from, teks.trim(), extendedText, {quoted: msg})
					break
			
			case 'eujaXeununca':
/*if(!args.join('|')[0].includes(Number))return reply(`use assim:\n${prefix}{command} 1 | Quem nunca caiu??`)
checck = getComandos(from)
if(checck === undefined) addEujaXeununca(from)
*/
/////Lista aqui/////

 objsss = [{
rowId: `${prefix}votoeujá sim`,
title: `Votar`,
description: 'eu já'
},{
rowId: `${prefix}votoeujá não`,
title: `Votar`,
description: 'eu nunca'
}]
buutton = {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Jogo: eujáXeununca`,
listType: 1,
sections: [{
title: "Eu já -X- eu Nunca",
rows: objsss
}]
}
conn.sendMessage(from, buutton, MessageType.listMessage)
/*setInterval(() => {
kauannn = `
Acabou hehe
Jogo: euja X eununca

Votação:
eujá : ${getEujá(from)}
eununca : ${getEununca(from)}
`
addAtivado(from)
reply(kauannn)
}, args.join('|')[0] *60000)*/
			break
			case 'figurinha':
			bala = args.join(' ')
			autor = bala.split('|')[0]
			pack = bala.split('|')[1]
    encmedia = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
    image = await conn.downloadAndSaveMediaMessage(encmedia)
    sticker = new Sticker(image, {
    pack: pack,
    author: autor,
    type: StickerTypes.FULL,
    categories: ['🤩', '🎉'], 
    id: '12345',
    quality: 50,
    background: '#000000'
})

buffer = await sticker.toBuffer()
await sticker.toFile('sticker.webp')
conn.sendMessage(from, await sticker.toMessage(), sticker)

			break
			case 'reiniciar':
			reply('irei reiniciar')
			console.log('REINICIANDO....')
			conn.close()
			reply('reiniciei com sucesso')
			break
			case 'leveis':
if (!isGroup) return reply('Só em Grupo')
//if (!isGroupAdmins) return reply('BOT PRECISA SER ADM')
if (args.length < 1) return reply('Ative pressione -on, Desativar pressione -off')
if (args[0] === '-on') {
if (isLeveling) return reply('*O recurso de nível já estava ativo antes*')
settings.leveling.push(from)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply(mess.levelon) 
} else if (args[0] === '-off') {
settings.leveling.splice(from, 1)
fs.writeFileSync('./media/settings.json', JSON.stringify(settings))
reply('_o recurso de leveis está desativado_')
} else {
reply('「* Adicionar parâmetro 1 / habilitar ou 0 / desabilitar*」')
}
break
			case 'sugestoes':
jrc = '          SUGESTOES PENDENTES\n'
for (let benn of sugestao) {
jrc += `\n${benn}\n_____________________________`
}
jrc += `\n\nTotal de : ${sugestao.length} sugestões`
conn.sendMessage(from, jrc.trim(), extendedText)
break
case 'sugestao':
if (!isGroup) return reply(mess.only.group)
bah = `
*sugestão nmr*: *#${sugestao.length + 1}*\n
*Sugestão*: *${body.slice(10)}*\n
*feita em*: ${date}`
sugestao.push(bah)
fs.writeFileSync('./media/user/sugestao.json', JSON.stringify(sugestao))
susp = `✔ Sugestão criada com sucesso!\n
*Sugestão nmr*: *#${sugestao.length}*\n
*Sugestão*: *${body.slice(10)}*\n
*Feita em*: *${date}*`
conn.sendMessage(from, susp, text)   
break
case 'chatinfo':


conn.messageInfo(from, msg.message.extentedTextMessage.contextInfo.stanzald)
.then((res) => {
var anu = []
var txt = `*Info Chat*\n\n`
for(i = 0; i < res.reads.length;i++){
anu.push(res.reads[i].jid)
txt += `@${res.reads[i].jid.split("@")[0]}\n`
txt += `criado em: ${moment(`${res.reads[i].t}` * 1000).tz('America/Sao_Paulo').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
reply(txt)
}).catch((err) => reply(jsonformat(err)))
break
			case 'printweb':
			if(args.length < 1)return reply('cade a url??')
 k = await getBuffer(`https://kauan-ofc4.herokuapp.com/api/ssweb?url=${args.join(' ')}`)
conn.sendMessage(from, k, image)
break
			case 'mek':
//Quoted = info.message
sat = JSON.stringify(msg, null, 2)
reply(`${sat}`)
break
case 'criargp':
    group = await conn.groupCreate (args.join(' '), [sender])
    console.log ("criei um grupo, id: " + group.gid)
    conn.sendMessage(group.gid, "Olá hehe bem vindo, eu sou a _Edicth-bot_", MessageType.extendedText)
conn.sendMessage(group.gid, textodono, MessageType.extendedText)
conn.groupMakeAdmin(group.gid, [sender])
break

case 'ttp': 
if (args.length < 1) return enviar (`cadê o texto mano?\nexemplo ${prefix + command} ${pushname}`)
 cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
 fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${body.slice(5)}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`               
bala = await getBuffer(sitee)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
var bas64 = `data:image/jpeg;base64,${site.toString('base64')}`
var mantap = await convertSticker(bas64, `Bot💯`, `Edicth`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
fs.unlinkSync('./imagem.webp')
//conn.sendMessage(from, fs.readFileSync('./webp.webp'), imagem)

//conn.sendMessage(from,{url : site}, imagem,{quoted: msg})

break

case 'wallpaper':
reply(mess.wait)
kauan = await fetchJson('https://kauan-ofc.herokuapp.com/api/wallpaper')
kauan2 = await getBuffer(kauan.resultado)
conn.sendMessage(from, kauan2, image, {quoted:msg, caption: "'-'"})
break

case 'status':
groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
uptime = process.uptime();
unread = await conn.loadAllUnreadMessages();
timestampe = speed();
totallChat = await conn.chats.all()
latensie = speed() - timestampe
teks = `\`\`\`ESTATÍSTICAS DE BOT\`\`\`
\`\`\`▢ mensagens nao lidas: ${unread.length}\`\`\`
\`\`\`▢ Bate-papos em grupo : ${groups.length}\`\`\`
\`\`\`▢ Chats Privados : ${privat.length}\`\`\`
\`\`\`▢ Total de bate-papos : ${totallChat.length}\`\`\`
\`\`\`▢ Velocidade : ${latensie.toFixed(4)} _Segundo_\`\`\`
\`\`\`▢ Tempo Ativo : ${tempo(process.uptime())}\`\`\`


\`\`\`ESTATÍSTICAS DE TELEFONE\`\`\`
\`\`\`▢ Uso de Ram : ${ram2}\`\`\`
\`\`\`▢ Tempo de atividade : ${tempo(process.uptime())}\`\`\`
\`\`\`▢ Wa Versão: ${conn.user.phone.wa_version}\`\`\`
\`\`\`▢ A versão: ${conn.user.phone.os_version}\`\`\`
\`\`\`▢ Fabricante do dispositivo: ${conn.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Modelo do dispositivo: ${conn.user.phone.device_model}\`\`\`
\`\`\`▢ Número da construção do sistema operacional: ${conn.user.phone.os_build_number}\`\`\``
reply(teks)

break

case 'github':
reply(mess.wait)
if(args.length < 1)return reply('Cade o usuario')
usuario = args.join(' ')
k = await fetchJson('https://kauan-ofc.herokuapp.com/api/github?usuario='+usuario)
b = k.resultado
a = `*GITHUB STALK*

*Username* : ${b.username}
*Id* : ${b.id}
*Node_ID* : ${b.Node_ID}
*url* : ${b.url}
*local* : ${b.local}
*bio* : ${b.bio}
*twitter* : ${b.twitter}
*Seguidores* : ${b.seguidores}
*Seguindo* : ${b.seguindo}
*Site* : ${b.Site}
*Repositórios* : ${b.repositorios}
*Tipo* : ${b.tipo}
`
reply(a)
break

case 'ytsrc':
teks = body.slice(7)
anu = await fetchJson(`https://kauan-ofc.herokuapp.com/api/ytsrc?q=${teks}`)
var objs = []
for(i=0;i< anu.resultado.length; ++i) {
let data = {
rowId: `${prefix}play `+ anu.resultado[i].title,
title: `${prefix}play`,
description: anu.resultado[i].title
}
objs.push(data)
}
var button = {
title: "✅ Músicas encotradas ✅",
buttonText: "Mostra lista de músicas",
description: `Pesquisa: ${teks}`,
listType: 1,
sections: [{
title: "Músicas relacionadas",
rows: objs
}]
}
var sendMsg = await conn.sendMessage(from, button, MessageType.listMessage)
break

case 'varmp3':
if (args.length < 1) return
reply(mess.wait)
teks = args.join(' ')
res = await y2mateA(`${teks}`).catch(e => {
reply('_[ ! ] Erro ao entrar no Y2mate Web * Tente repetir*_')})
sendFileFromUrl(res[0].link, audio, {quoted: msg, mimetype: 'audio/mp4', filename: res[0].output})
break

case 'swm':
case 'take':
//try{
if (type === 'imageMessage' || isQuotedImage){
var kls = args.join(' ')
var pack = kls.split("|")[0];
var author = kls.split("|")[1];
 getbuff = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
 dlfile = await conn.downloadMediaMessage(getbuff)
reply(mess.wait)
 bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
} else {
var kls = args.join(' ')
var pack = kls.split("|")[0];
var author = kls.split("|")[1];
 getbuff = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
 dlfile = await conn.downloadMediaMessage(getbuff)
reply(mess.wait)
 bas64 = `data:video/mp4;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
}
/*
}catch{
reply('Desculpe mais eu não identifico emoji nem letras modificadas')
}*/
break
case 'simsimi':
if(args < 1)return reply('cadê o texto onichan👉👈')
kauan = await fetchJson('https://kauan-ofc.herokuapp.com/api/simsimi?texto='+args.join(' '))
reply('👾\n' + kauan.resposta)
break
case 'tovideo':
if ((isMedia && !msg.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
 mediaaa = await conn.downloadAndSaveMediaMessage(encmediaaa)
ran = getRandom('.mp4')
/*exec(`ffmpeg -i ${mediaaa} ${ran}`, (err) => {
						fs.unlinkSync(mediaaa)
						if (err) return reply('❌ Falha ao converter figurinha em imagem ❌'+err)
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, video, {quoted: msg, mimetype: 'video/mp4', caption: 'Tá na mão'})
						fs.unlinkSync(ran)
					})*/
					var im = require('imagemagick');
im.convert([mediaaa, '-resize', '320x320', ran], 
function(err, stdout){
 fs.unlinkSync(mediaaa)
						if (err) return reply('❌ Falha ao converter figurinha em imagem ❌'+err)
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, video, {quoted: msg, mimetype: 'video/mp4', caption: 'Tá na mão'})
						fs.unlinkSync(ran)
  console.log('stdout:', stdout);
})
					}
break

case 'teste':
encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
media = await conn.downloadAndSaveMediaMessage(encmedia)
exec('ffmpeg -i undefined.jpeg media.webp', (err, stdout) => {
conn.sendMessage(from, fs.readFileSync('./media.webp'), sticker)
})
break
case 'testeeeee':
var a = `BOT`
var b = `BLZ`
if (isMedia && !msg.message.videoMessage || isQuotedImage ) {
encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
 media = await conn.downloadAndSaveMediaMessage(encmedia)
 await createExif(a,b)
 out = getRandom('.webp')
 ffmpeg(media)
 .on('error', (e) => {
 console.log(e)
 conn.sendMessage(from, 'Há um erro', 'conversation', { quoted: msg })
 fs.unlinkSync(media)
 })
 .on('end', () => {
 _out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: msg })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(160,iw)':min'(160,ih)':force_original_aspect_ratio=decrease,fps=15, pad=160:160:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && msg.message.videoMessage.seconds < 11 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
 media = await conn.downloadAndSaveMediaMessage(encmedia)
var a = `BOT`
var b = `Blz`
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
conn.sendMessage(from, 'Há um erro', 'conversação', { quoted: msg })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
.on('exit', () => {
conn.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: msg })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(160,iw)':min'(160,ih)':force_original_aspect_ratio=decrease,fps=15, pad=160:160:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)       
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 8 segundos)`)
}
break
             
case 'play2':  
if(args.length < 1)return reply('digite o nome da musica que vc deseja procurar')
play2 = args.join(" ")
anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play2}&apikey=AriaGanzTzy`)
if (anu.error) return reply(anu.error) 
conn.sendMessage(from, 
'Enviando sua música, aguarde 🎬'
,text, {quoted: msg})
infomp3 = `*Título:* ${anu.result.title}\n*Fonte:* ${anu.result.source}\n*Tamanho:* ${anu.result.size}`
buffer = await getBuffer(anu.result.thumbnail) 
lagu = await getBuffer(anu.result.url_audio)
conn.sendMessage(from, buffer, image,
{quoted: msg, 
caption: infomp3})
conn.sendMessage(from,  lagu, audio,{
mimetype: 'audio/mp4', 
filename: `${anu.title}.mp3`, 
quoted: msg, 
thumbnail: null})
break   

case 'play':  
if(args.length < 1)return reply('digite o nome da musica que vc deseja procurar')
play2 = args.join(" ")
anu = await fetchJson(`https://kauan-ofc.herokuapp.com/api/play?musica=${play2}`)
//if (anu.error) return reply(anu.error) 
conn.sendMessage(from, 
'Enviando sua música, aguarde 🎬'
,text, {quoted: msg})
infomp3 = `*Título:* ${anu.titulo}\n*Fonte:* ${anu.canal}\n*Tamanho:* ${anu.tamanho}`
buffer = await getBuffer(anu.link_image) 
lagu = await getBuffer(anu.link_musica)
conn.sendMessage(from, buffer, image,
{quoted: msg, 
caption: infomp3})
conn.sendMessage(from,  lagu, audio,{
mimetype: 'audio/mp4', 
filename: `${anu.titulo}.mp3`, 
quoted: msg, 
thumbnail: null})
break   

				case 'help':
				case 'menu':
					conn.sendMessage(from,fs.readFileSync('./src/image.jpg'), image,{caption: help(prefix), quoted: selo})
					break
				case 'info':
					me = conn.user
					uptime = process.uptime()
					teks = `*Nome bot* : ${me.name}\n*Numero Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Contatos Blockeados* : ${blocked.length}\n*O bot está ativo há* : ${tempo(process.uptime())}`
					conn.sendMessage(from, teks, text, {contextInfo:{mentionedJid: [me.jid]}})
					break
case 'ping':
fixo = speed();
fixoo = speed() - fixo		
reply(`*💥_•Speed: ${fixoo.toFixed(4)}ms*
*⏳🧐_•Runtime: ${tempo(process.uptime())}*

🚀🔥 - *Speed ​​​​e tempo online*`)
break

case 'blocklist':
					teks = 'Esta é a lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					conn.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": blocked}})
					break
case 'get':
				if(args.length < 1) return reply('Cade o link?')
				fetch(`${args[0]}`)
				.then(resultado => resultado.text())
				.then(result => {
				reply(result)
				})
break	
					
		case 'playstore':
		play = await hx.playstore(args.join(' '))
		store = '      EDICTH BOT \n'
		for(i of play){
		store += `\n    PLAY STORE\n
_*Nome* : ${i.name}
_*Link* : ${i.link}
_*Dev* : ${i.developer}
_*Link Dev* : ${i.link_dev}
\n ___________________________\n`
		}
		reply(store)
		break
					
					
				case 'ocr':
				case 'ler':
					if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						 media = await conn.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(`Desculpe mais não foi possivel ler`)								
								console.log(err)
								fs.unlinkSync(media)
							})
					} else {
						reply('Marque uma foto')
					}
					break
			case 's':;case 'f':;case 'st':;case 'figu':;case 'sticker':
if (type === 'imageMessage' || isQuotedImage ){
var getbuff = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
var dlfile = await conn.downloadMediaMessage(getbuff)
reply(`Vai toma um cafezinho...\n já já eu volto`)
var bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `Bot💯`, `Edicth`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
}else {
reply('marque ou mande uma imagem')
}
break


					case 'roubar':
					var kls = args.join(' ')
var pack = kls.split("|")[0];
var autor = kls.split("|")[1];
					if (!isQuotedSticker) return reply('❌ Responda com uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter figurinha em imagem ❌')
						var bas64 = `data:image/png;base64,${ran.toString('base64')}`
var mantap = await convertSticker(bas64, pack, autor)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})
					})
					break
					
				case 'gtts':
					if (args.length < 1) return conn.sendMessage(from, 'Cade o codigo de limguagem', text, {quoted: msg})
					 gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return conn.sendMessage(from, 'Cade o texto', text, {quoted: msg})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Texto muito grande')
					: gtts.save(ranm, dtt, function() {
						conn.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: msg, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
				
case 'imagem':
conn.sendMessage(from, {url: `${args.join()}`}, image,{quoted:msg})
break
case 'gimagem':
gimage(args.join(' '),async (error, results) => {
      if (error) {
        console.log(error);
      }
      else {
conn.sendMessage(from, await getBuffer(results[1].url), image,{quoted: msg, caption: `Gerei imagem sobre:`+args.join(' ') })
      }
    });
break
				
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
			
			
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                
				
				case 'bc':
					if (!isOwner) return reply('Você não tem permissão para utilizar este comando.')
					if (args.length < 1) return reply('.......')
					anu = await conn.chats.all()
					if (isMedia && !msg.message.videoMessage || isQuotedImage) {
						 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						buff = await conn.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							conn.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO ]\n\n${body.slice(4)}`})
						}
						reply('Transmição enviada com sucesso')
					} else {
						for (let _ of anu) {
							conn.sendMessage(_.jid, `[ Ini Broadcast ]\n\n${body.slice(4)}`, text)
						}
						reply('Transmissão efetuada com sucesso')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promovido com sucesso \n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(`Promovido com sucesso @${mentioned[0].split('@')[0]} Como administrador do grupo!`, mentioned, true)
						conn.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Rebaixado com sucesso \n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(`rebaixado @${mentioned[0].split('@')[0]} voce se tornou um membro comun!`, mentioned, true)
						conn.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Você precisa informar o usuário que deseja adcionar.')
					if (args[0].startsWith('08')) return reply('Use o código do país')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						conn.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falha ao adcionar, talvez o usuário não permita ser adcionado em grupos.')
					}
					break
				case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Marque o alvo que você deseja expulsar!')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ação emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						conn.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						conn.groupRemove(from, mentioned)
					}
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores do grupo: *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await conn.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	conn.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('❌ Responda com uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falha ao converter figurinha em imagem ❌')
						buffer = fs.readFileSync(ran)
						conn.sendMessage(from, buffer, image, {quoted: msg, caption: 'Tá na mão'})
						fs.unlinkSync(ran)
					})
					break
					case 'testefigu':
					//if (!isQuotedImage) return reply('❌ Responda com uma figurinha ❌')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await conn.downloadAndSaveMediaMessage(encmedia)
					//ran = getRandom('.webp')
					//exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						//fs.unlinkSync(media)
						if (err) console.log(err)
				//		buffer = fs.readFileSync(media)
						conn.sendMessage(from, fs.readFileSync(media), 'stickerMessage', {quoted: msg})
						fs.unlinkSync(media)
					
					break
				case 'simi':
					if (args.length < 1) return reply('cade o texto?')
					teks = body.slice(5)
					anu = await simih(teks) 
				
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					//if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Modo simsimi já está ativo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('ativado com sucesso o modo simsimi nesse grupo✔️')
					} else if (Number(args[0]) === 0) {
						if (!isSimi) return reply('Modo simsimi já está desativado')
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('desativado com sucesso o modo simsimi nesse grupo✔️')
					} else {
						reply('1 para ativar, 0 para desativar')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Está ativado?')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('O recurso de boas vindas foi ativado com sucesso ✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('O recurso de boas vindas foi desativado com sucesso ✔️')
					} else {
						reply('1 para ativar, 0 para desativar.')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await conn.getProfilePicture(id)
						buffer = await getBuffer(pp)
						conn.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !msg.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						 encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
						media = await conn.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							conn.sendMessage(from, res.video, video, {quoted: msg, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('mande ou marque uma imagem')
					}
					break
					//////LOGOS_ TEXTPRO
					
					
				

case 'demon':	
case 'demongreen':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'metalfire':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait) 
thiccysapi.textpro("https://textpro.me/hot-metal-text-effect-843.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunder':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait) 
thiccysapi.textpro("https://textpro.me/create-thunder-text-effect-online-881.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neongreen':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/green-neon-text-effect-874.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neontxt':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'rainbow':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ice':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lapis':	
case 'lápis':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'gameov': 
case 'gameover':   
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case '3dstone':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'fiction':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'wall':
case 'break':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'blood':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'joker':	
case 'jokerlogo':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demon':	
case 'demongreen':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'natal':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'asfalto':	
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/road-warning-text-effect-878.html",`${q}`).then(async (data) => { 
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
 } catch(err) { 
console.log(err)
} 
});
break

case 'neon3d':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'ossos':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/skeleton-text-effect-online-929.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'jeans':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/denim-text-effect-online-919.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'metalblue':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'carbon':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/glossy-carbon-text-effect-965.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'pink':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/holographic-3d-text-effect-975.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'style':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/1917-style-text-effect-online-980.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'vidro':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/dropwater-text-effect-872.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'areia':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neve':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/xmas-cards-3d-online-942.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neon3':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'nuvem':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'horror':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'matrix':
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/matrix-style-text-effect-online-884.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'transformer':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'berry':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'luxury':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'colaq':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'thunderv2':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'demonfire':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'neondevil':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'cattxt':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'glitch2': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'grafity': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'steel': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/3d-steel-text-effect-877.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break 

case 'marvel': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'stone': 
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'space':
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad/Sad
tem que ter a / senão não vai.`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",[ `${texto1}`, `${texto2}`]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'halloween':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",`${q}`).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break

case 'lava':  
if(!q) return reply(`Digite o texto que vai aparecer na imagem | Exemplo: ${prefix + command} sad`)
reply(mess.wait)
thiccysapi.textpro("https://textpro.me/lava-text-effect-online-914.html",`${q}`,
["Developer"], ["Phaticusthiccy"]).then(async (data) => {
try { 
let di = await getBuffer(data)
await conn.sendMessage(from, di, image, {quoted: msg})
console.log(data)
} catch(err) { 
console.log(err)
} 
});
break
//////FIM TEXT-PRO

/////APIS DA EXTEAM/////
case 'drip':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/dripp?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'merda':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/shit?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'hitler':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/hitler?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'arma':
case 'figuarma':
if ((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'wanted':
case 'procurado':
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`https://api-exteam.herokuapp.com/api/gun?img=${link}`)
conn.sendMessage(from, postt, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'gtav':
case 'gta-v':
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=gtav&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'cadernoft':
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await getBuffer(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=passbook&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case '2armas':
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=cross-gun&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'papelcortado':
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=paper-tearing&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'coração':
case 'coracao':  
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=heart-dish&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'cubom':  
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=cube-magic-four&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'pokebola':  
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
postt = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=pokebola&text=${link}&apikey=aleofc`)
altr = await getBuffer(postt.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break

case 'natalfoto':  
if ((isMedia && !msg.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo : msg
reply(mess.wait)
base64 = await conn.downloadMediaMessage(post)
link = await upload(base64)
jrep = await fetchJson(`http://api-exteam.herokuapp.com/api/photooxy/foto?tema=beautiful-pine&text=${link}&apikey=aleofc`)
altr = await getBuffer(jrep.result)
conn.sendMessage(from, altr, image, {quoted: msg})
} else {
reply('Selecione uma imagem...!')
}
break


//////FIM API EXTEAM

	//////// APIS  TEAM OF HERO				
					case 'glitch2':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(8)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
reply('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'glitch':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(7)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch2?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'demon':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/demon?apikey=darling&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'toxic':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(6)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/toxic?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'transformer':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(12)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/transformer?apikey=apiteam&texto=team=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'graffiti':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(9)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
reply('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/graffiti?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'blackpink':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
reply('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/glitch1?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'thunder':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(8)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunder?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'thunderv2':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/thunderv2?apikey=apiteam&texto=team=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'harrypotter':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(12)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/harrypotter2?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'pornhub':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(8)
teks1 = teks.split("|")[0];
teks2 = teks.split("|")[1];
reply('[❗]ESPERE ...')
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/pornhub?apikey=apiteam&texto1=${teks1}&texto2=${teks2}`)
buff = await getBuffer(team.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'neon3d':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(7)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon3d?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'horrorblood':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(12)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/horror-blood?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'neondevil':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/neon-devil?texto=${teks}&apikey=apiteam`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'dropwater':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'advancedglow':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(13)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/advanced-glow?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'wonderfulgraffiti':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(18)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/wonderful-graffiti?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'dropwater':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/dropwater?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'captainamerica':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(15)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/captain-america?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'jokerlogo':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(10)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/jokerlogo?apikey=apiteam&texto=${teks}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'marvel':

if (args.length < 1) return reply('Cadê o texto?')
teks = body.slice(7)
reply('[❗]ESPERE ...')
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/marvel?apikey=apiteam&texto1=${teks1}&texto2={teks2}`)
buff = await getBuffer(anu.resultado)
tomioka.sendMessage(from, buff, image, {quoted: msg})
break
case 'lavatext':

team = body.slice(9)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/lava-text?apikey=apiteam&texto1=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: msg,  thumbnail: hero})
break
case 'magma':

team = body.slice(6)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/magma-text?apikey=apiteam&texto=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: msg,  thumbnail: hero})
break
case 'matrix':

team = body.slice(7)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/matrix-text?texto=${team}&apikey=apiteam`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
tomioka.sendMessage(from, of, image, {quoted: msg,  thumbnail: hero})
break
case 'breakwall':

team = body.slice(10)
team = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/textpro/break-wall?apikey=apiteam&texto=${team}`)
of = await getBuffer(team.resultado)
hero = await getBuffer(`https://i.ibb.co/3h6M64p/48bb51875d47.jpg`)
conn.sendMessage(from, of, image, {quoted: msg,  thumbnail: hero})
break
////// FIM API TEAM HERO/////
					
case 'loli':

reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/neko')
loliz = await getBuffer(anu.data.url)
tomioka.sendMessage(from, loliz, image, {quoted: msg, contextInfo: null, caption: 'rum'})
break
case 'loli2':

reply('*「 ❗ 」 Aguarde um pouco amigo, a procura da imagem...*')
anu = await axios.get('https://nekos.life/api/v2/img/fox_girl')
loliz = await getBuffer(anu.data.url)
conn.sendMessage(from, loliz, image, {quoted: msg, contextInfo: null, caption: 'rum'})
break		

//////Folhas-1-6\\
case 'folha':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice(7))
reply(mess.wait)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nulis?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: msg, thumbnail: null})
break	

case 'folha2':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(mess.wait)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskanan?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: msg, thumbnail: null})
break	

case 'folha3':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(mess.wait)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/nuliskiri?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: msg, thumbnail: null})
break	

case 'folha4':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(mess.wait)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokanan?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: msg, thumbnail: null})
break	

case 'folha5':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
var txt = encodeURI(body.slice())
reply(mess.wait)
anu = await getBuffer(`https://dapuhy-api.herokuapp.com/api/maker/foliokiri?text=${txt}&apikey=${dapuhykey}`)
await conn.sendMessage(from, anu, image, {quoted: msg, thumbnail: null})
break
//========================================\\

case 'neondevil':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} sad`)
sd = args.join(" ")
reply(mess.wait)
sad = await getBuffer(`https://dapuhy-api.herokuapp.com/api/textpro/neondevil?text=${sd}&apikey=${dapuhykey}`)
await conn.sendMessage(from, sad, image, {quoted: msg, thumbnail: null})
break 

case 'show':
if(args.length < 2) return reply(`Exemplo: ${prefix + command} Sad/Tenso/Demais`)
txt = body.slice(6)
jro = txt.split("/")[0];
jru = txt.split("/")[1];
jrp = txt.split("/")[2];
reply(mess.wait)
tyd = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/retrowave?text1=${jro}&text2=${jru}&text3=${jrp}&apikey=${dapuhykey}`, {method: 'get'})
await conn.sendMessage(from, tyd, image, {quoted: msg, thumbnail: null})
break 

case 'bracelet':
if(args.length < 1) return reply(`Exemplo: ${prefix + command} Sad`)
lvc = body.slice(10)
reply(mess.wait)
lop = await getBuffer(`https://dapuhy-api.herokuapp.com/api/photofunia/bracelet?text=${lvc}&apikey=${dapuhykey}`, {method: 'get'})
await conn.sendMessage(from, lop, image, {quoted: msg, thumbnail: null})
break
////FMM DAPUHI
case 'attp':
try {
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${args.join(' ')}`)
await conn.sendMessage(from, buffer, sticker, { quoted: msg})
} catch {
reply("ERRO '-' ")
}

break
case 'ttp2':
reply(mess.wait)
string = args.join(' ') || 'Texto indefinido'
post = `https://api-exteam.herokuapp.com/api/fun/ttp?apikey=aleofc&text=${string}`
bala = await getBuffer(post)
fs.writeFileSync('./imagem.webp', bala)
site = fs.readFileSync('./imagem.webp')
var bas64 = `data:image/jpeg;base64,${site.toString('base64')}`
var mantap = await convertSticker(bas64, `Bot💯`, `Edicth`)
var imageBuffer = new Buffer.from(mantap, 'base64');
conn.sendMessage(from, imageBuffer, MessageType.sticker, {quoted: msg})

break
case 'attp2':		
case 'attp3': 
case 'attp4':
case 'attp5': 
case 'attp6':  
if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp Sad`)
reply(mess.wait)
url = await getBuffer(`http://brizas-api.herokuapp.com/ttp/${command}?apikey=lzdomina&text=${encodeURI(q)}`)
await conn.sendMessage(from, url, sticker, {quoted: msg})
break			
						
									
												
																		
				default:
if (isGroup && !msg.key.fromMe && isSimi && budy != undefined) {
kk = ["1","2"]
k2 = kk[Math.floor(Math.random() * kk.length)]
if(k2 == '1'){
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
						}
					} else {
						//return console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					if(isCmd && command.length != 0 && type !== 'stickerMessage'){
/*k = `╭───「 EDICTH-BOT 」
│
├  *NOME* : ${pushname}
├  *NÚMERO* : ${sender.split("@")[0]}
├  *COMANDO* : ${command}               
│
╰───────────────────
`
reply(k)*/
					await exec(`cd lib/config && bash -c 'grep -i "${command.slice(0, 3)}" comandos.txt | shuf -n 1'`, async (error, stdout, stderr) => {
						if (error || stderr || stdout == null || stdout == '') {
							k = `╭───「 EDICTH-BOT 」
│
├  *NOME* : ${pushname}
├  *NÚMERO* : ${sender.split("@")[0]}
├  *COMANDO* : ${command}               
│obs: Comando não encontrado
╰───────────────────
`
							await reply(k)
						} else return await conn.sendButtons(from, 'Edicth-Bot', 
                [{
                    buttonId: prefix+stdout,
                    buttonText:{displayText: stdout},type:1}], mess2.previewcmd())
					})
				
				}
				
					
						
								}
                           }
                           
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
