import { pokemon } from '../data/poke.js'

class Pokemon {
  constructor(name) {
    ; (this.id = 0), (this.name = name)
  }
}

const mainContainer = document.querySelector('.container')

function cardFront(pokedata) {
  let cardFront = document.createElement('div')
  cardFront.className = 'card__face card__face--front'
  let figure = document.createElement('figure')

  let name = document.createElement('figcaption')
  let image = document.createElement('img')

  let upperName = pokedata.name.charAt(0).toUpperCase() + pokedata.name.slice(1)
  name.textContent = pokedata.name
  if (pokedata.id !== 0) {
    image.src = `../images/${pokedata.imageid}${upperName}.png`
  } else {
    image.src = `../images/Pokeball.png`
  }

  figure.appendChild(image)
  figure.appendChild(name)
  cardFront.appendChild(figure)
  return cardFront
}

function cardBack(pokedata) {
  let cardBack = document.createElement('div')
  cardBack.classname = 'card__face card__face--back'

  let backimage = document.createElement('img')
  backimage.src = `../images/Pokeball.png`

  let height = document.createElement('p')
  height.textContent = "Height = " + pokedata.height

  let weight = document.createElement('p')
  weight.textContent = "Weight = " + pokedata.weight

  cardBack.appendChild(backimage)
  cardBack.appendChild(weight)
  cardBack.appendChild(height)
  return cardBack
}

function createPokeCard(pokedata) {
  let scene = document.createElement('div')
  let card = document.createElement('div')
  scene.className = 'scene'
  card.className = 'card'
  card.appendChild(cardFront(pokedata))
  card.appendChild(cardBack(pokedata))
  
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
  
  scene.appendChild(card)
  mainContainer.appendChild(scene)
}

const allFetchedPokemon = []

pokemon.forEach(singleMon => {
  fetch(singleMon.url)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      allFetchedPokemon.push(myJson)
      createPokeCard(matchIdToImage(myJson))
    })
})

function matchIdToImage(aPokemon) {
  if (aPokemon.id === 0) {
    aPokemon.imageid = 0
  }
  if (aPokemon.id < 10) {
    aPokemon.imageid = '00' + aPokemon.id
  }
  if (aPokemon.id > 9 && aPokemon.id < 100) {
    aPokemon.imageid = '0' + aPokemon.id
  }
  if (aPokemon.id > 99) {
    aPokemon.imageid = aPokemon.id
  }
  aPokemon.name = aPokemon.name.charAt(0).toUpperCase() + aPokemon.name.slice(1)
  return aPokemon
}

const newPokemonButton = document.querySelector('button')
newPokemonButton.addEventListener('click', function () {
  let newPokeName = prompt('Enter new Pokemon name')
  createPokeCard(new Pokemon(newPokeName))
})

var card = document.querySelector('.card');
card.addEventListener('click', function () {
  card.classList.toggle('is-flipped');
});


