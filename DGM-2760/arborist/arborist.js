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

//Find position of second tree in list
const pos = trees.indexOf('pine')

//Remove 2nd tree
document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(pos, 1)
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

//Sort array a to z
document.querySelector('#sortTrees').onclick = () => {
    trees.sort()
    listTrees()
}

//Make lowercase
const lowerTrees = trees.map(lowTree => { return lowTree.toLowerCase()})
document.querySelector('#lowerCase').onclick = () => {
    lowerTrees
}

console.log(lowerTrees)
