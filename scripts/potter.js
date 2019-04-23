import { people } from '../data/potterpeople.js'

const intro = document.querySelector('.intro')

// const allCharacters = people.map(person => { 
//     return {
//         name: person.name,
//         house: person.house,
//         role: person. role
//     }
// })

const gryffindor = people.filter(person => person.house === "Gryffindor")

console.log(gryffindor)

const mainContainer = document.createElement('div')
mainContainer.className = "container"

gryffindor.forEach(person => {
    let personElement = document.createElement('div')
    personElement.className = 'box'

    let nameElement = document.createElement('p')
    nameElement.className = 'name'
    nameElement.textContent = person.name

    let personImage = document.createElement('img')
    personImage.src = `../images/gryffindor.jpg`
    
    personElement.appendChild(personImage)
    personElement.appendChild(nameElement)
    mainContainer.appendChild(personElement)

    intro.appendChild(mainContainer)
})
