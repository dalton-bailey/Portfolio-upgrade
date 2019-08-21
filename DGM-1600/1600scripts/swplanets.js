import { planets } from '../1600data/planets.js'

const intro = document.querySelector('.intro')

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const sortedPlanets = planets.sort((a,b) => {
   return a.orbital_period - b.orbital_period})


console.log(sortedPlanets)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

sortedPlanets.forEach(planet => {
    let planetElement = document.createElement('div')
    planetElement.className = 'box'

    let planetName = document.createElement('p')
    planetName.textContent = planet.name
    planetName.className = 'planet'

    let orbitalPeriodElement = document.createElement('p')
    orbitalPeriodElement.textContent = "Orbirtal Period: " + planet.orbital_period
    orbitalPeriodElement.className = 'orbital_period'

    planetElement.appendChild(planetName)
    planetElement.appendChild(orbitalPeriodElement)
    mainContainer.appendChild(planetElement)

    intro.appendChild(mainContainer)
})