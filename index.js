let userMessage = document.getElementById("game-info")
let cardSum = document.getElementById("card-sum")
let userCards = document.getElementById("cards")
let firstCard = 50
let secondCard = 10
let cardArray = [firstCard , secondCard];
let sum = firstCard + secondCard

function renderGame(){
    userCards.innerText="Your cards: "
    for (let i=0; i < cardArray.length; i++){
        userCards.textContent +=  cardArray[i] + " "
    }      
    cardSum.innerText="The sum is: "+ sum
    if (sum > 21){
        userMessage.innerText="Game  over You lose"
    }
    else if(sum === 21){
        userMessage.innerHTML="You got blackjack"
    }
    else {
        userMessage.innerHTML="Do you want to draw another card"
    }
}
function newCard(){
    let thirdCard = 3
    cardArray.push(thirdCard)
    sum += thirdCard
    renderGame()
}
