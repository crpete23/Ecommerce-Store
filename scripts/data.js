//This will hold ALL of our products. We could maybe add a key:value pair that is { filter: 'morty'} or
//something to grab each product with the filter function

const products = [
  { title: '1 Interdimensional Cable Box', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews' , class: 'rick techgood' },
  { title: '2 Portal Gun', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick techgood techevil' },
  { title: '3 Pickle Rick Replica', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick'},
  { title: '4 Szechuan Sauce', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick'},
  { title: `5 Rick's favorite beer`, image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick' },
  { title: '6 Morty Jr', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'morty' },
  { title: '7 Eyepatch', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class:'morty' },
  { title: `8 Morty's shirt`, image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class:'morty' },
  { title: '9 Mr Meeseeks Box', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick techgood' },
  { title: '10 Butter Robot', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'rick techevil' },
  { title: '11 Microverse Battery', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class:'rick techevil' },
  { title: '12 Ticket to Froopy Land', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'sale' },
  { title: '13 Mind Blowers', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class:'rick morty techevil techgood' },
  { title: '14 Plumbus', image: "https://vignette.wikia.nocookie.net/rickandmorty/images/2/27/Interdimensional_Cable_Box.png/revision/latest?cb=20160910005523", price: '$100', mortys: '5 mortys', reviews: '10 reviews', class: 'techgood' },
]

// console.log(products[0].image);
module.exports = products
