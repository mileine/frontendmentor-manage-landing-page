const links = document.querySelector('.nav')
const btnMenu =  document.querySelector('.btn-menu')
const btnClose = document.querySelector('.btn-close')
const body = document.querySelector('body')

function openMenu() {
  links.classList.add('display')
  btnMenu.classList.add('hidden')
  body.classList.add('menu-mobile-visible')
}

function closeMenu() {
  links.classList.remove('display')
  btnMenu.classList.remove('hidden')
  body.classList.remove('menu-mobile-visible')
}