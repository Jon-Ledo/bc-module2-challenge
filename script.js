// VARIABLES
const toggleBtn = document.querySelector('.toggle-btn')
const navbarListContainer = document.querySelector('.navbar__list-container')
const navLinks = document.querySelectorAll('.navbar__link')
const icon = document.querySelector('.fas')
const body = document.querySelector('body')

// toggle active class
toggleBtn.addEventListener('click', () => {
  toggleActiveClass()
  changeIcon()
})

// Remove active class on:
// link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    removeActiveClass()
    changeIcon()
  })
})

// page click
const bodyArray = Array.from(body.children)
bodyArray.forEach(child => {
  if (child.className === 'nav-section') {
    return 
  }
  else {
    child.addEventListener('click', () => {
      removeActiveClass()
      changeIcon()
    })
  }
})

// FUNCTIONS 
function toggleActiveClass () {
  navbarListContainer.classList.toggle('active')
}

function removeActiveClass () {
  navbarListContainer.classList.remove('active')
}

function changeIcon () {
  if (navbarListContainer.classList.contains('active')) {
    icon.classList.replace('fa-bars', 'fa-times')
  }
  else {
    icon.classList.replace('fa-times', 'fa-bars')
  }
}