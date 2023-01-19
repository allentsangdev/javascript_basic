let player = {
    name: "Allen",
    chip: "689"
}

let firstCard = 0
let secondCard = 0
let cards = []
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chip

function getRandomCard() {
    let randomNum = Math.floor((Math.random() * 13)) + 1 
    if (randomNum === 1) {
        return 11
    } else if (randomNum >10 ) {
        return 10
    } else {
        return randomNum
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
        //isAlive = true
    } else if (sum ===21) {
        message = "Blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "Lose!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    firstCard = getRandomCard()
    secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
    }
}