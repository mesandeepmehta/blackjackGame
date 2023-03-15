let userMessage = document.getElementById("game-info")
let cardSum = document.getElementById("card-sum")
let userCards = document.getElementById("cards")
let impMsg =  document.getElementById("imp-msg")
let sum = 0 
let wins = 0
let loss = 0
let matches = wins + loss
let cardArray = []
let isAlive = false
let blackjack = false

let player = {
    name :  "Sandeep",             //created object
    chips : 150
}

let playerData = document.getElementById("player-data")
playerData.innerHTML = player.name + ": $" + player.chips

 //initially this button is hidden
document.getElementById("new-card-btn").style.visibility="hidden"    


// to generate random number

function randomNumber(){     
    let a =  Math.random()*13
    let b= Math.floor(a)+1
    if (b==1){
        return 11
    }
    else if(b>10){      //in blackjack jack, queen and king
        return 10        //are treated as 10 and 1 is treated                            
    }                    //as 11 or 1 depending upon the player
    else{
    return b
    }
}

function startGame(){
    let firstCard = randomNumber()
    let secondCard = randomNumber()
    cardArray.push(firstCard,secondCard)
    sum = firstCard + secondCard
                      //game starts and user is alive
    renderGame()
}
function renderGame(){
    userCards.innerText="Your cards: "

    
    //for loop to dynamically add new cards when user draws it
    for (let i=0; i < cardArray.length; i++){
        userCards.textContent +=  cardArray[i] + " "
    }     
    
    
    cardSum.innerText="The sum is: "+ sum

    document.getElementById("new-card-btn").style.visibility="visible"  //to make new card button visible

    if (sum > 21){
        userMessage.innerText="Game  over You lose"
        loss+=1
        isAlive = false
         //to make new card button invisible once it is not needed
        document.getElementById("new-card-btn").style.visibility="hidden"
        impMsg.textContent= "You got "+ cardArray[cardArray.length-1] + ", You lose!"
    }


    else if(sum === 21){
        userMessage.innerHTML="You got blackjack"
        impMsg.innerText="You got "+ cardArray[cardArray.length-1] + ", You win!"
        document.getElementById("new-card-btn").style.visibility="hidden"
        wins+=1
        isAlive=true
        blackjack = true
    }


    else {
        userMessage.innerHTML="Do you want to draw another card"
        isAlive=true
    }
    document.getElementById("play-btn").style.visibility="hidden"
    
}



//this function is to draw a new card
function newCard(){
    if ( isAlive == true && blackjack == false){
        let thirdCard = randomNumber()
        cardArray.push(thirdCard)
        sum += thirdCard
        impMsg.innerHTML="You got : "+ thirdCard
        renderGame()
    }
    }
   

//This function resets the game
function resetGame(){
    document.location.reload()

}

console.log(cardArray)
