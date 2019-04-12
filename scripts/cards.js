import { pokemon } from '../data/poke.js'

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      createPokeCard(myJson)
    });
})

console.log(pokemon)

const mainContainer = document.querySelector('.card_face_front')

function createPokeCard(pokedata) {
  let card = document.createElement('div')
  card.className = 'box'
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')

  let upperName = pokedata.name.charAt(0).toUpperCase() + pokedata.name.slice(1)
  name.textContent = upperName
  image.src = pokedata.sprites.front_default
  figure.appendChild(image)
  figure.appendChild(name)
  card.appendChild(figure)
  mainContainer.appendChild(card)
}

var card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});