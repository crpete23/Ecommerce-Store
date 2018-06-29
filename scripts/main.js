const toggleAddCart = require ("./product-to-cart.js")
const data = require('./data')
const populateProducts = require('./templates')

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const emailForm = document.querySelector('.email-form')
const submitButton = document.querySelector('.submit-button')


//So I had to disable the submit.addEventListener bc this element doesn't exist on the products page.
//I couldn't get the below function to run from the new populate-products.js page. I am not good with browserify
//and I think maybe our products.html page should not use it because we don't necessarily want the entire main.js
//file running on our products.html page? Help haha.
//

//PRODUCT POPULATION FUNCTION USING TEMPLATE AND DATA
function renderFilteredProducts(products){
  let filteredProductsArray = products.map(populateProducts)
  let productsDisplayTable = document.querySelector('.products-page-container')
  let rowsAmount = Math.round(filteredProductsArray.length/3)
  let counter = 0

  for(let i = 0; i < rowsAmount; i++){
    let row = document.createElement('row')
    productsDisplayTable.append(row)
    //adds row to page
      for(let j = 0; j < 3; j++){
        if(counter < filteredProductsArray.length){
        let product = filteredProductsArray[counter]
        row.innerHTML += product
        counter ++
        }
     }
  }
}
renderFilteredProducts(data)
