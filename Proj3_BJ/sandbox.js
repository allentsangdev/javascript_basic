let person = {
    name: "Allen",
    age: 25,
    country: "Hong Kong",
    logData: function () {
        return this.name + " is" + this.age + " years old " + " and " + " lives in " + this.country
    } 
}

let age = 15

if (age < 6){
    console.log("free")
} else if (age>6 && age <17){
    console.log("child discount")
} else if (age>18 && age <26) {
    console.log("student discount")
} else if (age>27 && age <66) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
}

let largeCountry = ["China", "India", "USA", "Indonesia", "Pakistan"]

function printCountries(){
    console.log("The 5 largest countries in the world")
    for (let  i=0; i<largeCountry.length;i++) {
        console.log("- " + largeCountry[i])
    }
}

printCountries()

let hands = ["R","P","S"]

function randomHand () {
    i = Math.floor((Math.random() * hands.length))
    return console.log(hands[i])
}

randomHand()