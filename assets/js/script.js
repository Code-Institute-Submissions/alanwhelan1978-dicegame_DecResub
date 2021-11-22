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

function runGame() {

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