const toggleAddCart = require("./product-to-cart.js")
const data = require('./data')
const populateProducts = require('./templates')

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const emailForm = document.querySelector('.email-form')
const submitButton = document.querySelector('.submit-button')

//PRODUCT POPULATION FUNCTION USING TEMPLATE AND DATA
function renderFilteredProducts(products) {
  document.querySelector('.products-display').innerHTML = ''
  let filteredProductsArray = products.map(populateProducts)
  let productsDisplayTable = document.querySelector('.products-display')
  let rowsAmount = Math.round(filteredProductsArray.length / 3)
  let counter = 0


  for (let i = 0; i < rowsAmount; i++) {
    let row = document.createElement('row')
    productsDisplayTable.append(row)
    //adds row to page
    for (let j = 0; j < 3; j++) {
      if (counter < filteredProductsArray.length) {
        let product = filteredProductsArray[counter]
        row.innerHTML += product
        counter++
      }
    }
  }
}
renderFilteredProducts(data)

const links = Array.from(document.querySelectorAll('.product-listing .sort ul li a'))

links.map(el => el.addEventListener('click', function() {
  const dataValue = el.dataset.category
  if (dataValue === 'all') {
    renderFilteredProducts(data)
  } else if (dataValue === 'rick') {
    renderRick(data)
  } else if (dataValue === 'morty') {
    renderMorty(data)
  } else if (dataValue === 'tech') {
    renderTech(data)
  } else if (dataValue === 'sale') {
    renderSale(data)
  } else {
    "There is some error here"
  }
}))


function renderRick(data) {
  const rickDataArr = data.filter(el => {
    return el.type === 'rick'
  })
  renderFilteredProducts(rickDataArr)
}

function renderMorty(data) {
  const mortyDataArr = data.filter(el => {
    return el.type === 'morty'
  })
  renderFilteredProducts(mortyDataArr)
}

function renderTech(data) {
  const techDataArr = data.filter(el => {
    return el.type === 'tech'
  })
  renderFilteredProducts(techDataArr)
}

function renderSale(data) {
  const saleDataArr = data.filter(el => el.sale)
  renderFilteredProducts(saleDataArr)
}
