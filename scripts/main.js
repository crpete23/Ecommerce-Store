const toggleAddCart = require ("./product-to-cart.js")

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const emailForm = document.querySelector('.email-form')
const submitButton = document.querySelector('.submit-button')

submitButton.addEventListener('click', function(event) {
  console.log('hello');
    if(emailInput.value === "") {
      emailInput.classList.add('shake-box')
        setTimeout(function() {
          emailInput.classList.remove('shake-box')
        }, 300)
    }else{
      alert('Thank you for signing up!')
    }
})
