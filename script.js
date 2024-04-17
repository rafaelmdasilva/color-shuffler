'use strict'

const titleEle = document.querySelector('#title')
const resultEle = document.querySelector('#result')
const buttonEle = document.querySelector('#fetch')
const nameEle = document.createElement('p')
const hexEle = document.createElement('p')
const holderEle = document.createElement('p')

nameEle.setAttribute('id', 'name')
hexEle.setAttribute('id', 'hex')

holderEle.innerText = 'Go on. Give it a go.'
buttonEle.innerText = 'Fetch!'

resultEle.appendChild(holderEle)

buttonEle.addEventListener('click', () => {
    fetch('https://unpkg.com/color-name-list@10.21.0/dist/colornames.bestof')
        .then(response => { return response.json(); })
        // fetch and parse data
        .then(parsedData => {
            // log parsed data
            const parsedLength = Object.keys(parsedData).length;
            let random = Math.round(Math.random() * parsedLength)
            // caps random to object length

            resultEle.appendChild(nameEle);
            resultEle.appendChild(hexEle);

            nameEle.innerText = parsedData[random].name
            hexEle.innerText = parsedData[random].hex
        })
        .then(() => {
            holderEle.remove()
            document.body.style.background = `linear-gradient(to bottom, ${hexEle.textContent}, #ffffff)`
            titleEle.innerText = nameEle.textContent
            buttonEle.style.background = hexEle.textContent
        }
        )
})