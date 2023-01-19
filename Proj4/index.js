let fruit = ["🍎","🍎","🍊","🍎","🍊","🍎","🍎","🍊","🍊","🍎","🍊","🍊"]
let fruitShelf = document.getElementById("fruit-shelf")
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")


for(let i=0; i<fruit.length;i++) {
    fruitShelf.textContent += fruit[i] 
}

function sortFruit(){
    for(let i=0; i<fruit.length;i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += fruit[i]
        } else {
            orangeShelf.textContent += fruit[i]
        }
    }
}
