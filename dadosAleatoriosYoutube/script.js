const diceElement = document.getElementById('dice');
const rollButton = document.getElementById('rollBtn');

const diceSides = 6; // Caras del dado

function rollDice(){
    const randomValue = Math.floor( Math.random() * diceSides) + 1;
    diceElement.innerText = randomValue;
}

rollButton.addEventListener('click', rollDice);