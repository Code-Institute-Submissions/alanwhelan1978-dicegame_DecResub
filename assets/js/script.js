// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
       button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert('You rolled the dice')
        } 
       }) 
    }
})

/**
 * The main game "loop", called when the script is firast loaded
 * and after the users answer has been processed
 */

function runGame() {

    // Creates two random numbers between 1 & 12
    let num1 = Math.floor(Math.random() * 11) + 1;
    let num2 = Math.floor(Math.random() * 11) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}