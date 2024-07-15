const currentDate = new Date(),
  currentYear = document.getElementById('currentYear'),
  movingNav = document.getElementById('moving-nav')

let lastScrollTop = 0

// Select the node that will be observed for mutations
var targetNode = document.body

// Options for the observer (which mutations to observe)
var config = { childList: true, subtree: true }

// Callback function to execute when mutations are observed
var callback = function (mutationsList, observer) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      var element = document.querySelector(
        '.ml-embedded .ml-form-embedSubmit button'
      )
      if (element) {
        // Element is now in the DOM, run your function
        setSignupConversionTag()
        // Once the element is found, you can stop observing
        observer.disconnect()
        break
      }
    }
  }
}

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback)

// Start observing the target node for configured mutations
observer.observe(targetNode, config)

function setSignupConversionTag() {
  // Your code here
  const emailSubscribeBtn = document.querySelector(
    '.ml-embedded .ml-form-embedSubmit button'
  )
  if (emailSubscribeBtn !== null) {
    emailSubscribeBtn.onclick = function () {
      if (typeof gtag_report_conversion_signup === 'function') {
        gtag_report_conversion_signup()
      }
      return false
    }
  }
}

// Handle form submission
const handleSubmit = (event) => {
  event.preventDefault()

  const myForm = event.target
  const formData = new FormData(myForm)

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/thank-you.html' // Redirect in the same tab
      } else {
        throw new Error('Form submission failed')
      }
    })
    .catch((error) => alert(error))
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
  let servicesEl = document.getElementById('services')
  if (servicesEl === null) return

  let servicesElPosition =
    servicesEl.getBoundingClientRect().top + window.scrollY

  // If scrolling past the benefits section
  if (window.scrollY > servicesElPosition) {
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
  document.querySelector('form').addEventListener('submit', handleSubmit)
  window.addEventListener('scroll', handleScroll)
}

init()
