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

    const myStory = `Once upon a time there were four ${nounArray[0]}s named Geroge, Bill, Harry, and Ron. They 
    were ${adjectiveArray[0]} ${nounArray[0]}s who loved to ${verbArray[0]}.`

    // get a reference to the querySelector('#story') = myStory

    let storyContainer = document.querySelector('#story')
    storyContainer.textContent = myStory
}