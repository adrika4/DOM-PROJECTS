const randomNumber = (parseInt(Math.random()*100 + 1));
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const start0ver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1


let playGame = true;
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1 || guess > 100){
        alert('Please enter a number between 1 and 100')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
        displayGuess(guess)
        displayMessage(`Game Over! The number was ${randomNumber}`)
        endGame()
        } else {
            displayMessage(`Try again! You have ${11 - numGuess} guesses left.`)
        }
    }
}

function checkGuess(guess){
    
}

function displayGuess(guess){
}

function displayMessage(message){
}


function endGame(){
}

function newGame(){

}

















