const header = document.querySelector('.header')
const dateObj = document.querySelector('.date')
const name = document.querySelector('.name')

const company = document.createElement('h1')
company.className = 'companyName'
company.textContent = 'Joes Bed & Breakfast'
header.appendChild(company)

const slogan = document.createElement('h2')
slogan.className = 'slogan'
slogan.textContent = 'Heavenly Bed. Heavenly Breakfast'
header.appendChild(slogan)

const date = new Date()
const month = date.getMonth() + 1
const day = date.getDate()
const year = date.getFullYear()

const newDate = document.createElement('p')
newDate.className = 'date'
newDate.textContent = month + '/' + day + '/' + year
dateObj.appendChild(newDate)

let userName = document.createElement('p')
userName.className = 'name'
userName.textContent = 'Hello ' + prompt("What's your name?") + ', welcome to Joes.'
name.appendChild(userName)

console.log(userName)