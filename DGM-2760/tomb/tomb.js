const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Bill",
    option4: "Joe",
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        // display the questions options here
        document.querySelector('#answer1').textContent = question.option1
        document.querySelector('#answer2').textContent = question.option2
        document.querySelector('#answer3').textContent = question.option3
        document.querySelector('#answer4').textContent = question.option4

    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('.feedback').textContent =  "You are correct! Yay!"
        }
        // else...

        else {
            document.querySelector('.feedback').textContent = "Wrong! Try again."
        }

    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))


question.display()