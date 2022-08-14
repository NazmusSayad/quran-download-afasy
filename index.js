const download = require('download')
const { readFileSync, writeFileSync } = require('fs')

const file = './verses-ogg.json'
const Links = JSON.parse(readFileSync(file, 'utf-8'))

;(async () => {
  try {
    for (let verseLink of Links) {
      const verseDetails = verseLink.split('/')
      const format = verseDetails.at(-2)
      const number = verseDetails.at(-1).slice(0, 3)

      await download(verseLink, `download/${format}/${number}`)

      Links.shift()
      console.log(verseLink)
    }
  } catch {
    writeFileSync(file, JSON.stringify(Links))
  }
})()
