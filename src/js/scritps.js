// Requires
// const fs = require('fs')
// const path = require('path')

// DOM FORMS
const name = document.querySelector('#name')
const phone = document.querySelector('#phone')
const email = document.querySelector('#email')
const plant = document.querySelector('#plant')
// Select
const town_select = document.querySelector('#town-select')
// Check Box
const contact_email = document.querySelector('#contact-email')
const contact_phone = document.querySelector('#contact-phone')

// Button
const submit = document.querySelector('#submit')

// Submit
submit.addEventListener('click', () => {
    event.preventDefault()
    console.log(contact_email.checked)
})