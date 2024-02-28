const menuToggle = document.getElementById('menu-toggle')
const navList = document.getElementById('nav-list')
const navClose = document.getElementById('nav-close')
const navOverlay = document.getElementById('nav-overlay')
const contactMenu = document.getElementById('contact-menu')
const portfolioMenu = document.getElementById('portfolio-menu')
const servicesMenu = document.getElementById('services-menu')

function toggleSideNavbar() {
  navList.classList.toggle('show')
  if (navOverlay !== null) {
    if (document.body.clientWidth > 1024) return
    navOverlay.classList.toggle('hidden')
  }
}

function handleSideNavbar() {
  if (menuToggle !== null) {
    menuToggle.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (navClose !== null) {
    navClose.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (navOverlay !== null) {
    navOverlay.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (contactMenu !== null) {
    contactMenu.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }

  if (portfolioMenu !== null) {
    portfolioMenu.addEventListener('click', () => {
      toggleSideNavbar()
    })
  }
}

function toggleServicesMenu() {
  servicesMenu.addEventListener('mouseenter', (e) => {
    const menu = e.target.querySelector('div')
    menu.classList.remove('hidden')
  })

  servicesMenu.addEventListener('mouseleave', (e) => {
    const menu = e.target.querySelector('div')
    menu.classList.add('hidden')
  })
}

function initAllEventListeners() {
  // SideNavbar
  handleSideNavbar()
  // Toggle practice areas menu
  toggleServicesMenu()
}

initAllEventListeners()
