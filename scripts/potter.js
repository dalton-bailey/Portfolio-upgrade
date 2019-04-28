import { people } from '../data/potterpeople.js'

// const sorted = people.sort((a,b) => (a.house > b.house) ? 1 : -1) 


// Create new array using map from people array with name, house, role, and image

const allCharacters = people.map(person => {
    let imageURL = person.house
    return {
        name: person.name,
        house: person.house,
        role: person.role,
        imagePath: `../images/${imageURL}.jpg`
    }
})


// Filters by house

const gryffindor = people.filter(person => person.house === "Gryffindor")

const hufflepuff = people.filter(person => person.house === "Hufflepuff")

const slytherin = people.filter(person => person.house === "Slytherin")

const ravenclaw = people.filter(person => person.house === "Ravenclaw")

console.log(allCharacters)
// Create HTML elements with content from person array and appended to intro div in HTML file

const characters = document.querySelector('.intro')

allCharacters.forEach(person => {
    let personElement = document.createElement('div')
    personElement.className = 'box'

    let nameElement = document.createElement('p')
    nameElement.className = 'name'
    nameElement.textContent = person.name

    let personImage = document.createElement('img')
    
    // If their house is know display image. Everything else display crest

    if (person.house === "Gryffindor" || person.house === "Hufflepuff" || person.house === "Slytherin" || person.house === "Ravenclaw") {
        personImage.src = person.imagePath
    }
    else {
        personImage.src = `../images/crest.jpg`
    }
    
    personElement.appendChild(personImage)
    personElement.appendChild(nameElement)
    characters.appendChild(personElement)
})

