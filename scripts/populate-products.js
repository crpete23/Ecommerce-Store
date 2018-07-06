//PRODUCT POPULATION FUNCTION USING TEMPLATE AND DATA
const templates = require('./templates')

function renderFilteredProducts(products) {
  document.querySelector('.products-display').innerHTML = ''
  let filteredProductsArray = products.map(templates)
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

// functions to render view results for filter options
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

module.exports = {
  renderFilteredProducts,
  renderRick,
  renderMorty,
  renderTech,
  renderSale
}
