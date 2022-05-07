var navMenu = document.querySelector('#header nav')
var toggleMenu = document.querySelectorAll('.toggle')
var allLinks = document.querySelectorAll('.btn-nav')

for (const link of toggleMenu) {
  link.addEventListener('click', function () {
    navMenu.classList.toggle('show')
  })
}
for (const links of allLinks) {
  links.addEventListener('click', function () {
    navMenu.classList.remove('show')
  })
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  delay: 200
}).reveal(`
#dois,
#about .intro h2,
.cards .box-card,
.intro-txt,
#artigos .box,
.b-info`)
