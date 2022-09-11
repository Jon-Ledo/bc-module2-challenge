const toggleBtn = document.querySelector('.toggle-btn')
const navbarListContainer = document.querySelector('.navbar__list-container')

toggleBtn.addEventListener('click', toggleClass)



function toggleClass () {
  navbarListContainer.classList.toggle('active')
}