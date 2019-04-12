import { pokemon } from '../data/poke.js'

class Pokemon {
  constructor(name) {
    this.id = 0,
      this.name = name
  }
}

const mainContainer = document.querySelector('.card')

function cardFront(pokedata) {
  let card = document.createElement('div')
  card.className = 'card__face card__face--front'
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')

  let upperName = pokedata.name.charAt(0).toUpperCase() + pokedata.name.slice(1)
  name.textContent = upperName
  if (pokedata.id !== 0) {
    image.src = `../images/0${pokedata.id}${upperName}.png`
  } else {
    image.src = `../images/Pokeball.png`
  }

  figure.appendChild(image)
  figure.appendChild(name)
  card.appendChild(figure)
  return cardFront
}

function cardBack(pokedata) {
  let cardBack = document.createElement('div')
  card.className = 'card__face card__face--back'
  return cardBack
}

function createPokeCard(pokedata) {
  let card = document.createElement('div')
  card.className = 'card'
  card.appendChild(cardFront)
  card.appendChild(cardBack)
  mainContainer.appendChild(card)
}

pokemon.forEach((singleMon) => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      createPokeCard(myJson)
    });
})

const newPokemonButton = document.querySelector('button')

newPokemonButton.addEventListener('click', function() {
  let newPokeName = prompt('Enter new Pokemon name')
  createPokeCard(new Pokemon(newPokeName))
})


