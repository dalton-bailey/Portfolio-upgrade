function duplicateMenu() {
    //get all of the anchor elements form the top menu
    let topList = document.querySelectorAll('ul#primaryNavigation li a')

    // create the new list items for the bottom of the page

    let newList = document.createElement('ul')

    let linkContent = document.getElementById('primaryNavigation').textContent


    topList.forEach(menuItem => { 
        let newLI = document.createElement('li')
        let newLink = document.createElement('a')
        newLink.setAttribute('href', menuItem.getAttribute('href'))

        // 'copy' the textContent form upper menu to new menu

        // append children to make them appear in the DOM

        newLink.textContent = menuItem.textContent
        newLI.appendChild(newLink)
        newList.appendChild(newLI)
        document.getElementById('smallNavArea').appendChild(newList)
    })

    console.log(newList)
}

duplicateMenu()

