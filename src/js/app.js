const links = document.querySelector('.nav')
const btnMenu =  document.querySelector('.btn-menu')
const btnClose = document.querySelector('btn-close')

function openMenu() {
  links.classList.add('display')
  btnMenu.classList.add('hidden')
}

function closeMenu() {
  links.classList.remove('display')
  btnMenu.classList.remove('hidden')
}