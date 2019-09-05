const header = document.querySelector('.top')

const company = document.createElement('h1')
company.className = 'companyName'
company.textContent = "Guessing Game"
header.appendChild(company)

const slogan = document.createElement('h2')
slogan.className = 'slogan'
slogan.textContent = 'Loops'
header.appendChild(slogan)


// pick a random number between 0 and 16

const correctNumber = Math.floor(Math.random() * 15)

console.log(correctNumber)

let guessed = false
let totalGuesses = 0
let gamerGuess = 0

function evalGuess() {
    totalGuesses += 1 // add in increments of 1
    gamerGuess = document.querySelector('#guess').value
    console.log(totalGuesses)
    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'Congradulations, that is the correct number!'
        giveAward()
    }
    else if (gamerGuess > correctNumber && gamerGuess < 16) {
        feedback.innerText = 'Your guess was too high, try again.'
    }
    else if (gamerGuess < correctNumber && gamerGuess > 0) {
        feedback.innerText = 'Your guess was too low, try again.'
    }
    else {
        feedback.innerText = 'Please choose a number between 1 and 15.'
        totalGuesses -= 1
    }

    document.querySelector('#attempts').innerText = totalGuesses
}

function giveAward() {
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = 'DGM-2760/game/images/blue.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = 'DGM-2760/game/images/red.png'
            break;
        case 7:
            imagePath = 'DGM-2760/game/images/yellow.png'
    }

    const awardImage = document.createElement('img')
    awardImage.setAttribute('src', imagePath)
    awardImage.className = 'award'
    const ribbon = document.querySelector('#ribbon')
    
    if (ribbon.hasChildNodes()){

    }
    ribbon.appendChild(awardImage)
    // only appendChild if the ribbon element does not have any child nodes yet
}
