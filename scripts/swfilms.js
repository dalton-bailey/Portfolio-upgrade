import { films } from '../data/films.js'

const intro = document.querySelector('.intro')

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2
    if(url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}

const sorted = films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1) 

const allFilms = films.map(film => {
    let imageURL = getLastNumber(film.url)
    return {
        title: film.title,
        opening_crawl: film.opening_crawl,
        imagePath: `https://starwars-visualguide.com/assets/img/films/${imageURL}.jpg`
    }
    
})

//console.log(allFilms)

const mainContainer = document.createElement('div')
mainContainer.className = "container"

allFilms.forEach(film => {
    let tile = document.createElement('div')
    tile.className = 'box'

    let titleElement = document.createElement('h1')
    tile.appendChild(titleElement)
    titleElement.textContent = film.title

    let crawlElement = document.createElement('h3')
    tile.appendChild(crawlElement)
    crawlElement.textContent = film.opening_crawl

    let imageElement = document.createElement('img')
    imageElement.src = film.imagePath

    tile.appendChild(imageElement)
    tile.appendChild(titleElement)
    tile.appendChild(crawlElement)
    mainContainer.appendChild(tile)

    intro.appendChild(mainContainer)
})


