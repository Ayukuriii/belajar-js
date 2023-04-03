const body = document.body

const h1 = document.createElement('h1') //membuat element h1
h1.textContent = "ini h1" //isi element h1

const namaSaya = document.createElement('p')
namaSaya.innerHTML = "<marquee>Ekadian Haris</marquee>"

const namaKamu = document.createElement('b')
namaKamu.innerText = "<marquee>Vika Febrisella</marquee>"

body.append(h1) //menampilkan element h1 ke body
body.append(namaSaya)
body.append(namaKamu)