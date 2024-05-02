'use strict'

const url = 'https://unpkg.com/color-name-list@10.21.0/dist/colornames.bestof'

const titleEle = document.querySelector('#title')
const boxEle = document.querySelector('#box')
const resultEle = document.querySelector('#result')
const buttonEle = document.querySelector('#fetch')
const nameEle = document.createElement('p')
const hexEle = document.createElement('p')
const holderEle = document.createElement('p')

nameEle.setAttribute('id', 'name')
hexEle.setAttribute('id', 'hex')
hexEle.style.fontFamily = 'Inconsolata'
hexEle.style.textTransform = 'uppercase'

holderEle.innerText = 'Go on. Give it a go.'
buttonEle.innerText = 'Fetch!'
resultEle.appendChild(holderEle)

boxEle.style.transform = `translateY(-${titleEle.offsetHeight}px)`
titleEle.style.transform = `translateY(-${boxEle.offsetHeight / 2}px)`
//align elements

let parsed
fetch(url)
    .then(response => { return response.json() })
    // fetch and parse data
    .then(data => { parsed = data })
    // log parsed data

buttonEle.addEventListener('click', () => {
    const parsedLength = Object.keys(parsed).length
    let random = Math.round(Math.random() * parsedLength)
    // caps random to object length

    holderEle.remove()
    resultEle.appendChild(nameEle)
    resultEle.appendChild(hexEle)

    nameEle.innerText = parsed[random].name
    hexEle.innerText = parsed[random].hex
    titleEle.innerText = nameEle.textContent

    buttonEle.style.background = hexEle.textContent
    document.body.style.background = `linear-gradient(to bottom, ${hexEle.textContent}, #ffffff)`
}
)