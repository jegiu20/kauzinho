const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
const cheerio = require('cheerio');
const FormData = require('form-data')
const { default: Axios } = require('axios');
const { exec } = require('child_process');
const fs = require('fs');

const wait = async (media) => new Promise(async (resolve, reject) => {
    const attachmentData = `data:image/jpeg;base64,${media.toString('base64')}`
    const response = await fetch("https://trace.moe/api/search",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
    if (!response.ok) reject(`Gambar tidak ditemukan!`);
    const result = await response.json()
    try {
    	const { is_adult, title, title_chinese, title_romaji, title_english, episode, season, similarity, filename, at, tokenthumb, anilist_id } = result.docs[0]
    	let belief = () => similarity < 0.89 ? "Saya memiliki keyakinan rendah dalam hal ini : " : ""
    	let ecch = () => is_adult ? "Iya" : "Tidak"
    	resolve({video: await getBuffer(`https://media.trace.moe/video/${anilist_id}/${encodeURIComponent(filename)}?t=${at}&token=${tokenthumb}`), teks: `${belief()}
~> Ecchi : *${ecch()}*
~> Judul Jepang : *${title}*
~> Ejaan Judul : *${title_romaji}*
~> Judul Inggris : *${title_english}*
~> Episode : *${episode}*
~> Season  : *${season}*`});
	} catch (e) {
		console.log(e)
		reject(`Saya tidak tau ini anime apa`)
	}
})
const simih = async (texto) => {
	try {
		const simi = await fetch(`https://kauan-ofc.herokuapp.com/api/simsimi?texto=${texto}`, {method: 'GET'})
		const res = await simi.json()
		return '👾\n' + res.resposta
	} catch {
		return 'Simi não sabe'
	}
}

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      'User-Agent': 'axios/0.21.1',
      'Content-Length': 151330
    },
    data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":false}}`
  }).then(({data}) =>{
    resolve(data.webpBase64)
  }).catch(reject)
     
 }) 
}

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const spinner = { 
  "interval": 120,
  "frames": [
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
    "🕛"
  ]}

let globalSpinner;


const getGlobalSpinner = (disableSpins = false) => {
  if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
  return globalSpinner;
}

spins = getGlobalSpinner(false)

const start = (id, text) => {
	spins.add(id, {text: text})
	}
const info = (id, text) => {
	spins.update(id, {text: text})
}
const success = (id, text) => {
	spins.succeed(id, {text: text})

	}

const close = (id, text) => {
	spins.fail(id, {text: text})
}

const banner = cfonts.render(('EDICTH|BOT'), {
    font: 'chrome',
    color: 'candy',
    align: 'center',
    gradient: ["red","yellow"],
    lineHeight: 3
  });




function webp2gifFile(path) {
     return new Promise((resolve, reject) => {
          const bodyForm = new FormData()
          bodyForm.append('new-image-url', '')
          bodyForm.append('new-image', fs.createReadStream(path))
          Axios({
               method: 'post',
               url: 'https://s6.ezgif.com/webp-to-mp4',
               data: bodyForm,
               headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
               }
          }).then(({ data }) => {
               const bodyFormThen = new FormData()
               const $ = cheerio.load(data)
               const file = $('input[name="file"]').attr('value')
               const token = $('input[name="token"]').attr('value')
               const convert = $('input[name="file"]').attr('value')
               const gotdata = {
                    file: file,
                    token: token,
                    convert: convert
               }
               bodyFormThen.append('file', gotdata.file)
               bodyFormThen.append('token', gotdata.token)
               bodyFormThen.append('convert', gotdata.convert)
               Axios({
                    method: 'post',
                    url: 'https://ezgif.com/webp-to-mp4/' + gotdata.file,
                    data: bodyFormThen,
                    headers: {
                         'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`
                    }
               }).then(({ data }) => {
                    const $ = cheerio.load(data)
                    const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
                    resolve({
                         status: true,
                         message: "Criado por Kauãzin",
                         resultado: result
                    })
               }).catch(reject)
          }).catch(reject)
     })
}



module.exports = { wait, webp2gifFile,simih, convertSticker, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close }
