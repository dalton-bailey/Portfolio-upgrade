const header = document.querySelector('.top')

const company = document.createElement('h1')
company.className = 'companyName'
company.textContent = "Inspector Clouseau"
header.appendChild(company)

const slogan = document.createElement('h2')
slogan.className = 'slogan'
slogan.textContent = 'Blah blah blah blah blah blah'
header.appendChild(slogan)

function windowProp() {
let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`
let myUrl = `The full URL of this page is: ${window.location.href}`
let myWindow = document.querySelector('.window').innerText = `${windowSizes} \n ${offset} \n ${myUrl}`
}

windowProp()

function documentProp() {
    let docTitle = `The title of this document is ${document.title}.`
    let update = `Last updated on: ${document.lastModified}.`
    let myDocument = document.querySelector('.document').innerText = `${docTitle} \n ${update}`
}

documentProp()
    

console.log(documentProp)