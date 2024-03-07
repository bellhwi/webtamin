const menuToggle = document.getElementById('menu-toggle'),
  navList = document.getElementById('nav-list'),
  navClose = document.getElementById('nav-close'),
  navOverlay = document.getElementById('nav-overlay'),
  contactMenu = document.getElementById('contact-menu'),
  portfolioMenu = document.getElementById('portfolio-menu'),
  servicesMenu = document.getElementById('services-menu'),
  currentDate = new Date(),
  currentYear = document.getElementById('currentYear')
function toggleSideNavbar() {
  navList.classList.toggle('show'),
    null !== navOverlay &&
      !(document.body.clientWidth > 1024) &&
      navOverlay.classList.toggle('hidden')
}
function handleSideNavbar() {
  null !== menuToggle &&
    menuToggle.addEventListener('click', () => {
      toggleSideNavbar()
    }),
    null !== navClose &&
      navClose.addEventListener('click', () => {
        toggleSideNavbar()
      }),
    null !== navOverlay &&
      navOverlay.addEventListener('click', () => {
        toggleSideNavbar()
      }),
    null !== contactMenu &&
      contactMenu.addEventListener('click', () => {
        toggleSideNavbar()
      }),
    null !== portfolioMenu &&
      portfolioMenu.addEventListener('click', () => {
        toggleSideNavbar()
      })
}
function toggleServicesMenu() {
  servicesMenu.addEventListener('mouseenter', (e) => {
    let n = e.target.querySelector('div')
    n.classList.remove('lg:hidden')
  }),
    servicesMenu.addEventListener('mouseleave', (e) => {
      let n = e.target.querySelector('div')
      n.classList.add('lg:hidden')
    })
}
function initAllEventListeners() {
  handleSideNavbar(), toggleServicesMenu()
}
function getCurrentYear() {
  currentYear.innerText = currentDate.getFullYear()
}
initAllEventListeners()
getCurrentYear()
