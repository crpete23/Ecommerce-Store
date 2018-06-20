<<<<<<< HEAD
<<<<<<< HEAD
=======
const toggleAddCart = require ("./product-to-cart.js")
>>>>>>> 98b5cf310fe6194f8ad929eccf2ca6b12689d116

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
<<<<<<< HEAD
=======

const toggleAddCart = require ("./product-to-cart.js")

toggleAddCart();



const emailInput = document.querySelector(".email-input")
const emailForm = document.querySelector(".email-form")
const submitButton = document.querySelector(".submit-button")

submitButton.addEventListener('click', function(event) {
  console.log('hello');
    if(emailInput.value === "") {
      emailInput.classList.add("shake-box")
      event.preventDefault()
        setTimeout(function() {
          emailInput.classList.remove("shake-box")
        }, 300)
    }else{
      alert("Thank you for signing up!")
    }

})

>>>>>>> 9503ee46df4bbe5ba979397547fbfab7967ffdca
=======



>>>>>>> 98b5cf310fe6194f8ad929eccf2ca6b12689d116
