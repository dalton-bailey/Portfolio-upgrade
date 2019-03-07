import { films } from '../data/films.js'

const intro = document.querySelector('.intro')

const sorted = films.sort((a,b) => (a.episode_id > b.episode_id) ? 1 : -1)

console.log(sorted)

films.forEach(film => {
    let tile = document.createElement('div')
    tile.className = 'box'

    let titleElement = document.createElement('h1')
    tile.appendChild(titleElement)
    titleElement.textContent = film.title

    let crawlElement = document.createElement('h3')
    tile.appendChild(crawlElement)
    crawlElement.textContent = film.opening_crawl

   intro.appendChild(tile)
})


