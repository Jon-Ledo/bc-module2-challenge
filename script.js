const toggleBtn = document.querySelector('.toggle-btn')
const navbarListContainer = document.querySelector('.navbar__list-container')

toggleBtn.addEventListener('click', () => {
  navbarListContainer.classList.toggle('active')
  console.log('test')
})