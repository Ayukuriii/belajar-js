const body = document.body
const btn1 = document.getElementById('btn1') //select data by Id
const btn = document.querySelector('button') //select any data 

const defaultText = 'Click Me 1' 
btn1.textContent = defaultText

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.color = 'white'
btn1.style.backgroundColor = 'tomato'

function clickButton() {
    btn1.style.backgroundColor = 'cyan'
    const newText = document.createElement('p')
    newText.textContent = 'halo haris'
    body.append(newText)
}

function ubahText() {
    btn1.textContent = 'hihihi'
}

function oriText() {
    btn1.textContent = defaultText
}