function toggleAddCart() {
  $('.product-img').hover(function() {
      $(this).find('.visible').toggleClass( "hidden" );
  });
}

module.exports = toggleAddCart;
