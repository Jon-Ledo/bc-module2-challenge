// VARIABLES
const toggleBtn = document.querySelector('.toggle-btn')
const navbarListContainer = document.querySelector('.navbar__list-container')
const navLinks = document.querySelectorAll('.navbar__link')
const body = document.querySelector('body')

// toggle active class
toggleBtn.addEventListener('click', toggleClass)

// Remove active class on:
// link click
navLinks.forEach(link => {
  link.addEventListener('click', removeActiveClass)
})

// page click
const bodyArray = Array.from(body.children)
bodyArray.forEach(child => {
  if (child.className === 'nav-section') {
    return 
  }
  else {
    child.addEventListener('click', removeActiveClass)
  }
})

// FUNCTIONS 
function toggleClass () {
  navbarListContainer.classList.toggle('active')
}

function removeActiveClass () {
  navbarListContainer.classList.remove('active')
}