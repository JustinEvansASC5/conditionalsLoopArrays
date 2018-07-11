console.log("Challenge #1")
let roster = [,"Pikachu", 'Mewtwo', "Onix", "Eevee",]
let other_pokemon = process.argv[2]
let other_pokemon2 = process.argv[3]
console.log(roster)

console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log("Challenge #2")
roster.push(process.argv[2])

console.log(roster)

console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")

console.log("Challenge #3")
roster.slice(4, 1)
console.log()
console.log(roster)

console.log("Challenge #4")

let catchCHance = .25
let catchAttempt = Math.random()

if(catchAttempt < catchCHance){
    console.log("Caught!")

}

else if (catchCHance < catchAttempt){
    console.log("Failed")
}

console.log("CHallenge #5")
if(roster.length < 6){
    roster.push("empty")
    console.log(roster)
}

console.log("Challenge #6")
const elements = [,"Plant", "Fire", "Water", ]
const enemyAttackTYpe = elements[Math.floor(Math.random()*elements.length)]

