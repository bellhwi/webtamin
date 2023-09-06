// JavaScript code to get and display the current year
const currentYearElement = document.getElementById('currentYear')

// Get the current year
const currentYear = new Date().getFullYear()

// Set the current year in the HTML element
currentYearElement.textContent = currentYear
