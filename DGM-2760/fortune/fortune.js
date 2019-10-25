function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


function getMonthName(month) {
    let name
    switch (month) {
        case 1:
            name = "January"
            break
        case 2:
            name = "February"
            break
        case 3:
            name = "March"
            break
        case 4:
            name = "April"
            break
        case 5:
            name = "May"
            break
        case 6:
            name = "June"
            break
        case 7:
            name = "July"
            break
        case 8:
            name = "August"
            break
        case 9:
            name = "September"
            break
        case 10:
            name = "October"
            break
        case 11:
            name = "November"
            break
        case 12:
            name = "December"
            break
        default:
            name = "Not a month"
            break;
    }
    return name
}

function getFortune(fate) {
    let message
    switch (fate) {
        case 1:
            message = 'all your hard work will pay off.'
            break
        case 2:
            message = 'an important person will offer you support.'
            break
        case 3:
            message = 'allow compassion to guide your decisions.'
        case 4:
            message = 'you will be a great success both in the business world and society.'
            break
        case 5:
            message = 'you will inherit a large sum of money.'
            break
        default:
            message = ' your character can be described as natural and unrestrained.'
            break
    }

    return message
}



let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 5)
let day = getRandomIntInclusive(1, 30)

const monthName = getMonthName(month)

const fortune = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, ${fortune}`

document.querySelector('#fortune').innerText = fortuneRevealed

console.log(fortune)