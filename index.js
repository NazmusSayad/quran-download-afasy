const download = require('download')

const verses_mp3 = require('./data.mp3.js')
const verses_ogg = require('./data.ogg.js')
const allFormats = [verses_ogg, verses_mp3]

;(async () => {
  for (let format of allFormats) {
    for (let verse of format) {
      const surahNumber = verse.split('/').at(-1).slice(0, 3)
      await download(verse, `download/mp3/${surahNumber}`)
      console.log(verse)
    }
  }
})()
