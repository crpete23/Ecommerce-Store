const toggleAddCart = require("./product-to-cart.js")
const data = require('./data')
const templates = require('./templates')

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const emailForm = document.querySelector('.email-form')
const submitButton = document.querySelector('.submit-button')

// products.html populate products on page
const populate = require('./populate-products.js')
populate.renderFilteredProducts(data)
toggleAddCart();

// products.html (filter function)
const links = Array.from(document.querySelectorAll('.list-products .sort ul li a'))

links.map(el => el.addEventListener('click', function() {
  const dataValue = el.dataset.category
  switch (dataValue) {
    case 'all':
      populate.renderFilteredProducts(data)
      toggleAddCart();
      break;
    case 'rick':
      populate.renderRick(data)
      toggleAddCart();
      break;
    case 'morty':
      populate.renderMorty(data)
      toggleAddCart();
      break;
    case 'tech':
      populate.renderTech(data)
      toggleAddCart();
      break;
    case 'sale':
      populate.renderSale(data)
      toggleAddCart();
      break;
    default:
      console.log("There is some error here")
  }
}))
