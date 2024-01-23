let btn = document.getElementById('btn')
let nav = document.getElementById('nav')
let close = document.getElementById('close')

btn.addEventListener('click',shownav)
close.addEventListener('click',hidenav)

function shownav(){
    nav.style.right = "0px"
}
function hidenav(){
    nav.style.right = "-200px"
}