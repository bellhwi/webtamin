const tooltips = document.querySelectorAll('.tooltip')

function addEventListenersToAllTooltips() {
  tooltips.forEach((tooltip) => {
    tooltip.addEventListener('mouseover', () => {
      tooltip.nextElementSibling.classList.toggle('hidden')
    })
    tooltip.addEventListener('mouseout', () => {
      tooltip.nextElementSibling.classList.toggle('hidden')
    })
  })
}

addEventListenersToAllTooltips()
