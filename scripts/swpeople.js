import { people } from '../data/people.js'
import { planets } from '../data/planets.js'

const intro = document.querySelector('.intro')

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })

    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        eye_color: person.eye_color,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
    }
})

//console.log()

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    personElement.className = 'box'

    let nameElement = document.createElement('p')
    nameElement.className = 'name'
    nameElement.textContent = person.name

    personElement.style.borderColor = person.eye_color

    let planetElement = document.createElement('p')
    planetElement.className = 'planet'
    planetElement.textContent = person.home

    let imageElement = document.createElement('img')
    imageElement.src = person.imagePath

    personElement.appendChild(imageElement)
    personElement.appendChild(nameElement)
    personElement.appendChild(planetElement)
    mainContainer.appendChild(personElement)

    intro.appendChild(mainContainer)
})