let userMessage = document.getElementById("game-info")
let cardSum = document.getElementById("card-sum")
let userCards = document.getElementById("cards")
let firstCard = 1
let secondCard = 1
let wins = 0
let loss = 0
let matches = wins + loss
let cardArray = [firstCard , secondCard]
let sum = firstCard + secondCard
let gameOver =  false               //This is to show that by default user is not a loser

function renderGame(){
    userCards.innerText="Your cards: "
    //for loop to dynamically add new cards when user draws it
    for (let i=0; i < cardArray.length; i++){
        userCards.textContent +=  cardArray[i] + " "
    }      
    cardSum.innerText="The sum is: "+ sum
    if (sum > 21){
        userMessage.innerText="Game  over You lose"
        loss+=1
        document.getElementById("new-card-btn").style.visibility="hidden"
    }
    else if(sum === 21){
        userMessage.innerHTML="You got blackjack"
        win+=1
    }
    else {
        userMessage.innerHTML="Do you want to draw another card"
    }
    document.getElementById("play-btn").style.visibility="hidden"
}
//this function is to draw a new card
function newCard(){
    let thirdCard = 3
    cardArray.push(thirdCard)
    sum += thirdCard
    renderGame()
}

//This function resets the game
function resetGame(){
    document.location.reload()

}
