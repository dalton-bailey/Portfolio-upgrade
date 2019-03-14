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

//const sortedPlanets = planets.sort((a,b) => {
//    return a.orbital_period - b.orbital_period
//})

const allPlanets = planets.map(planet => {
    let imageURL = getLastNumber(planet.url)
    return {
        name: planet.name,
        orbital_period: planet.orbital_period,
        imagePath: `https://starwars-visualguide.com/assets/img/planets/${imageURL}.jpg`
    }
})

console.log(allPlanets)

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allPlanets.forEach((planet) => {
    let planetElement = document.createElement('div')
    planetElement.className = 'box'

    let planetName = document.createElement('p')
    planetName.textContent = planet.name

    let orbitalPeriodElement = document.createElement('p')
    orbitalPeriodElement.textContent = planet.orbital_period

    let imageElement = document.createElement('img')
    imageElement.src = planet.imagePath
    
    planetElement.appendChild(imageElement)
    planetElement.appendChild(planetName)
    planetElement.appendChild(orbitalPeriodElement)
    mainContainer.appendChild(planetElement)

    intro.appendChild(mainContainer)
})