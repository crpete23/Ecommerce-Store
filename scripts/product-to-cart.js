function toggleAddCart() {
  $('.product-img').hover(function() {
    console.log('hi');
      $(this).find('.visible').toggleClass( "hidden" );
  });
}

module.exports = toggleAddCart;
