const toggleAddCart = require ("./product-to-cart.js")
const data = require('./data')
const populateProducts = require('./templates')

toggleAddCart();

const emailInput = document.querySelector('.email-input')
const emailForm = document.querySelector('.email-form')
const submitButton = document.querySelector('.submit-button')

// submitButton.addEventListener('click', function(event) {
//   console.log('hello');
//     if(emailInput.value === "") {
//       emailInput.classList.add('shake-box')
//         setTimeout(function() {
//           emailInput.classList.remove('shake-box')
//         }, 300)
//     }else{
//       alert('Thank you for signing up!')
//     }
// })

//So I had to disable the submit.addEventListener bc this element doesn't exist on the products page.
//I couldn't get the below function to run from the new populate-products.js page. I am not good with browserify
//and I think maybe our products.html page should not use it because we don't necessarily want the entire main.js
//file running on our products.html page? Help haha.
//

//PRODUCT POPULATION FUNCTION USING TEMPLATE AND DATA
function renderFilteredProducts(products){
  //products parameter takes in an array of data(products) (coming from data.js currently)
  let filteredProductsArray = products.map(populateProducts)
  //map function runs each object (or product) in the products array through the populateProducts
  //template found in templates.js and fills a new array with each product turned into HTML for our page
  let productsDisplayTable = document.querySelector('.products-page-container')
  //identifies products-page-container area to place the products
  let rowsAmount = Math.round(filteredProductsArray.length/3)
  //calculates how many rows we need depending on how many products are included
  let counter = 0
  //counter for nested loop below
  for(let i = 0; i < rowsAmount; i++){
    let row = document.createElement('row')
    productsDisplayTable.append(row)
    //adds row to page
      for(let j = 0; j < 3; j++){
        if(counter < filteredProductsArray.length){
        let product = filteredProductsArray[counter]
        row.innerHTML += product
        //grabs each product and adds it to the row until there are 3 in each row
        counter ++
        }
     }
  }
}

renderFilteredProducts(data)
//this is the render function call where we want to pass in our filtered array
