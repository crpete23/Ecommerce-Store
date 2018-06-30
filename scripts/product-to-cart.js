function toggleAddCart() {
  $('.imgProd').hover(function() {
      $(this).find('.visible').toggleClass( "hidden" );
  });
}

module.exports = toggleAddCart;
