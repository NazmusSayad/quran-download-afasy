const download = require('download')
const { readFileSync, writeFileSync } = require('fs')

const file = './verses-ogg.json'
const allLinks = JSON.parse(readFileSync(file, 'utf-8'))
const TEMP_LINKS = [...allLinks]

;(async () => {
  try {
    for (let verseLink of allLinks) {
      const verseDetails = verseLink.split('/')
      const format = verseDetails.at(-2)
      const number = verseDetails.at(-1).slice(0, 3)

      await download(verseLink, `download/${format}/${number}`)

      TEMP_LINKS.shift()
      console.log(verseLink)
    }
  } catch {
    writeFileSync(file, JSON.stringify(TEMP_LINKS))
  }
})()
