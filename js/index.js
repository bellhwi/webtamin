// Nav Toggle Button Control (Mobile)
// Purpose: Hide and show mobile navigation menu
//
// 1. Assign the navigation toggle button to "navToggle" variable
// 2. Assign the navigation content div to "navContent" variable
// 3. "toggle" function to hide/show the navigation content
// 4. Add click listener to navToggle to call toggle() on navContent when navToggle is clicked

;(function buttonControlInit() {
  const navOpen = document.querySelector('#nav_open')
  const navClose = document.querySelector('#nav_close')
  const navContent = document.querySelector('#nav_content')

  // Toggles menu depending on id of event target ("nav_open" or "nav_close")
  function toggleNav(e) {
    if (e.target.id === 'nav_open') {
      navContent.classList.add('right-0')
      navContent.classList.remove('right-full')
    } else {
      navContent.classList.remove('right-0')
      navContent.classList.add('right-full')
    }
  }

  ;[navOpen, navClose].map((button) =>
    button.addEventListener('click', toggleNav)
  )
})()
