/* The DOM loaded event fires when the initial html document completed loaded and passed.
The target of our event is the document we are referring */
/* Array.from() lets you create Arrays from array-like objects (objects with a length property and indexed elements) */
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const ScoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10

    //console.log(squares)
});
