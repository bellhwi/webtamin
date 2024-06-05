const currentDate = new Date(),
  currentYear = document.getElementById('currentYear'),
  movingNav = document.getElementById('moving-nav')

const emailSubscribeBtn = document.querySelector('.ml-form-embedSubmit button')
let lastScrollTop = 0

if (emailSubscribeBtn !== null) {
  emailSubscribeBtn.onclick = function () {
    return gtag_report_conversion('email')
  }
}

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

function getCurrentYear() {
  currentYear.innerText = currentDate.getFullYear()
}

function init() {
  getCurrentYear()
  window.addEventListener('scroll', handleScroll)
}

init()
