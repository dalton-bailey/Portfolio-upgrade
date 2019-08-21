import { people } from '../1600data/people.js'
import { planets } from '../1600data/planets.js'

const intro = document.querySelector('.intro')

// Get the last number in URL that corresponds with imapge URL
const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

// Filter people array to create new array with name, home world, eye color, and image
const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })

    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        eye_color: person.eye_color,
        personImagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`
    }
})  

console.log(allHomeWorlds)

// Create HTML elements with content from new array

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach(person => {
    let personElement = document.createElement('div')
    personElement.className = 'box'

    let nameElement = document.createElement('p')
    nameElement.className = 'name'
    nameElement.textContent = person.name

    personElement.style.borderColor = person.eye_color

    let planetElement = document.createElement('p')
    planetElement.className = 'planet'
    planetElement.textContent = person.home

    let personImage = document.createElement('img')
    personImage.src = person.personImagePath

    personElement.appendChild(personImage)
    personElement.appendChild(nameElement)
    personElement.appendChild(planetElement)
    mainContainer.appendChild(personElement)

    intro.appendChild(mainContainer)
})