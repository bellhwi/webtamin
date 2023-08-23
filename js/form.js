// Form Submit Control
// Purpose: Submit form data to Netlify server & show status to user
(function formControlInit() {
  const form = document.querySelector('form');

  function submitHandler(e) {
    e.preventDefault();
    // form data sent to Netlify server
    const formData = new FormData(form);

    // user-facing message containers (hidden initially)
    const errorDisplay = document.querySelector('#error');
    const successDisplay = document.querySelector('#success');

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(handleErrors)
      .then(() => {
        // displays success message to user
        successDisplay.style.display = 'block';
      })
      .catch((error) => {
        // displays error message to user
        errorDisplay.style.display = 'block';
        console.log(error);
      });
  }

  // only adds an event listener if there is a form present on the page
  if (form) form.addEventListener('submit', submitHandler);
})();

// Error Handler
function handleErrors(response) {
  // throws an error if HTTP response failed
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
