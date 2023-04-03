const body = document.body
const btn1 = document.getElementById('btn1') //select data by Id
const btn = document.querySelector('.btn2') //select any data 

const defaultText = 'Click Me 1' 
btn1.textContent = defaultText

const newText = document.createElement('p')

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.color = 'white'
btn1.style.backgroundColor = 'tomato'

function clickButton() {
    btn1.style.backgroundColor = 'cyan'
    
}

function ubahText() {
    btn1.textContent = 'hihihi'
}

function oriText() {
    btn1.textContent = defaultText
}

function tampilText() {

    newText.textContent = 'halo aku Haris'
    body.append(newText)
}

function gantiWarna() {
    newText.style.color = 'red'
}