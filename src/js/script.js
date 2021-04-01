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

function validateEmail() {
  const email = document.querySelector('.email')
  const msg =  document.querySelector('.error-msg')
  console.log(email.value)
  if((email.value === '')||(!isEmailValid(email.value))) {
    msg.innerHTML = 'Please insert a valid email'
    email.classList.add('error')
  } else {
    email.classList.remove('error')
    msg.innerHTML = ''
  }
}

function isEmailValid(email) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) return (true)
 else return (false)
}