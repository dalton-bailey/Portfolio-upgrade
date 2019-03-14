import { planets } from '../data/planets.js'

const intro = document.querySelector('.intro')

const sortedPlanets = planets.sort((a,b) => {
    return a.orbital_period - b.orbital_period
})

console.log(sortedPlanets)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

sortedPlanets.forEach((planet) => {
    let planetElement = document.createElement('div')
    planetElement.className = 'box'
    planetElement.textContent = planet.orbital_period

    let planetName = document.createElement('p')
    planetName.textContent = planet.name
    
    planetElement.appendChild(planetName)
    mainContainer.appendChild(planetElement)

    intro.appendChild(mainContainer)
})