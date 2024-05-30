const menuToggle = document.getElementById('menu-toggle'),
  navList = document.getElementById('nav-list'),
  navClose = document.getElementById('nav-close'),
  navOverlay = document.getElementById('nav-overlay'),
  portfolioMenu = document.getElementById('portfolio-menu'),
  aboutMenu = document.getElementById('about-menu'),
  pricingMenu = document.getElementById('pricing-menu'),
  currentDate = new Date(),
  currentYear = document.getElementById('currentYear'),
  movingNav = document.getElementById('moving-nav')

let lastScrollTop = 0

// FAQ open and close
let questions = document.querySelectorAll('.accordion')

if (questions !== null) {
  questions.forEach((question) => {
    question.addEventListener('click', () => {
      let answer = question.querySelector('p')
      let openIcon = question.querySelector('.open-icon')
      let closeIcon = question.querySelector('.close-icon')
      answer.classList.toggle('hidden')
      openIcon.classList.toggle('hidden')
      closeIcon.classList.toggle('hidden')
    })
  })
}

function handleScroll() {
  let benefitsEl = document.getElementById('benefits')
  let benefitsElPosition =
    benefitsEl.getBoundingClientRect().top + window.scrollY

  // If scrolling past the benefits section
  if (window.scrollY > benefitsElPosition) {
    // Detect scroll direction
    let st = window.scrollY || document.documentElement.scrollTop
    movingNav.classList.toggle('show', st < lastScrollTop)
    lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
  } else {
    movingNav.classList.remove('show')
  }
}

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
    null !== portfolioMenu &&
      portfolioMenu.addEventListener('click', () => {
        toggleSideNavbar()
      }),
    null !== aboutMenu &&
      aboutMenu.addEventListener('click', () => {
        toggleSideNavbar()
      }),
    null !== pricingMenu &&
      pricingMenu.addEventListener('click', () => {
        toggleSideNavbar()
      })
}
function initAllEventListeners() {
  handleSideNavbar()
  window.addEventListener('scroll', handleScroll)
}
function getCurrentYear() {
  currentYear.innerText = currentDate.getFullYear()
}
initAllEventListeners()
getCurrentYear()
