// Array of 4 trees
const trees = ['Oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')


// Display tree list in displayResults
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elments long</span>`
}


listTrees()

document.querySelector('#lowerCase').onclick = () => {
    if (trees.length > 0) {
        var lowerTrees = []
        for (var i = 0; i < trees.length; i++) {
            lowerTrees.push(trees[i].toLowerCase())
            trees.splice(i, 1, lowerTrees[i])
        }

        lowerTrees.sort()
        listTrees()
    }
}

//Sort array a to z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}


//Add Redwood to end of list
document.querySelector('#add_redwood').onclick = () => {
    trees.push('Redwood')
    listTrees()
}

//Add pear to start of list
document.querySelector('#add_pear').onclick = () => {
    trees.unshift('pear')
    listTrees()
}

//Remove from the first tree
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    }
    else (
        errorElement.textContent = 'No more trees to remove. Try adding one.'
    )
}


//Remove 2nd tree
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    }
    else (
        errorElement.textContent = 'No second tree to remove.'
    )
}

//Remove last tree in list
document.querySelector('#remove_tree3').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    }
    else (
        errorElement.textContent = 'No more trees to remove. Try adding one.'
    )
}




//Display 3rd tree
document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        const treeThree = trees[2]
        listTrees()
        errorElement.textContent = `The third tree is ${treeThree}`
    }
    else (
        errorElement.textContent = 'There is not a 3rd tree in the list. Try adding one.'
    )
}

//Display 4th tree
document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        const treeFour = trees[3]
        listTrees()
        errorElement.textContent = `The fourth tree is ${treeFour}`
    }
    else (
        errorElement.textContent = 'There is not a 4th tree in the list. Try adding one.'
    )

}

