const form = document.getElementById('contact-form');
const userName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const result = document.querySelector('.result');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if ( userName.value === '' || email.value === '' || message.value === '' ) {
        result.classList.add('error');
        result.innerText = 'Error submiting form. Please enter valid details in all fields.';
    } else {
        result.classList.add('success');
        result.innerText = 'Message sent successfully!';
    }

    setTimeout(() => { 
        result.innerText = ''
    } , 3000)
}