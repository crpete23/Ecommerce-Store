function populateProducts(product) {
let productHtml =
`<div class="col-3 products-page">
  <article>
    <div class="imgProd">
      <img src="${product.image}" alt="${product.title}" class="mb-2">
      <div class="hidden visible text-center">
        <a href="#">Add To Cart</a>
      </div>
    </div>
    <p class="product-title">${product.title}</p>
  </article>
  <aside>
    <p><span>
      <img class="currency" src="./images/shm.png" alt="currency">
    </span>${product.price}</p>
    <div class="row ratings">
      <div class="col">
        ${product.mortys}
      </div>
    </div>
    <div class="row reviews">
      <div class="col">
        <span>${product.reviews}</span>
      </div>
    </div>
  </aside>
</div>
`
return productHtml
}

module.exports = populateProducts
