import { films } from './films.js'

console.log(films)

const intro = document.querySelector('.intro')

films.sort((a, b) =>  (a.episode_id > b.espidsode_id) ? 1 : -1)

films.forEach(film => {
    let tile = document.createElement('div')

    let titleElement = document.createElement('h1')
    intro.appendChild(titleElement)
    titleElement.textContent = film.title

    let crawlElement = document.createElement('h3')
    intro.appendChild(crawlElement)
    crawlElement.textContent = film.opening_crawl

   intro.appendChild(tile)
})








