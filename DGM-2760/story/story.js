function tellStory() {
    //nounArray = querySelector(noun)
    //lower case String split()
    //repeat
    var nounArray = document.querySelector('#noun').value.trim().split(/\s+/)
    
    console.log(noun)

    var adjectiveArray = document.querySelector('#adj').value.trim().split(/\s+/)
    
    console.log(adj)

    var verbArray = document.querySelector('#verb').value.trim().split(/\s+/)
    
    console.log(verb)


    //make nouns lowercase
    var lowNounArray = nounArray.map(v => v.toLowerCase())

    console.log(lowNounArray);

    //make verbs lowercase
    var lowVerbArray = verbArray.map(v => v.toLowerCase())

    //make adjectives lowercase
    var lowAdjArray = adjectiveArray.map(v => v.toLowerCase())

    const myStory = `Once upon a time there were four ${lowNounArray[0]}s named Geroge, Bill, Harry, and Ron. They 
    were ${lowAdjArray[0]} ${lowNounArray[0]}s who loved to ${lowVerbArray[0]}. One day they went to the ${lowNounArray[1]}. After they watched all the 
    ${lowAdjArray[1]} ${lowNounArray[4]} ${lowVerbArray[1]} the ${lowNounArray[1]} caught on ${lowNounArray[2]}. Then George, Bill, Harry, and Ron went home to ${lowVerbArray[0]} some more and eat
    ${lowNounArray[5]}.`

    // get a reference to the querySelector('#story') = myStory

    let storyContainer = document.querySelector('#story')
    storyContainer.textContent = myStory
}

