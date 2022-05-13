const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
function start() {
    const menuBtn = $('.content-menu')
    const appNavBtn = $('.app__nav')
    const overlay =$('.overlay')
    menuBtn.onclick = function() {
        appNavBtn.classList.add('appear')
        appNavBtn.style.display = 'block'
        overlay.style.display = 'block'
    }
    overlay.onclick = function() {
        appNavBtn.style.display = 'none'
        // overlay.style.animation = 'showOut ease 0.3s'
        overlay.style.display = 'none'
    }
}
start()