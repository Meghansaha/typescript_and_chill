///////////////////////////////////////////////////////////////////////////////
/////////////////////////// Javascript Basics /////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// EVERYTHING says that you NEED to learn javascript before typescript//
// I Have VAGUE knowledge of js. Let's refresh w/ some basics//

// Basic JS Declarations
// var 
var person = "Meghan"

// const (read-only and cant change value)
const moods = ["angry", "happy", "sad", "confused"]

// No reassignments, but mutations are allowed
moods.push("anxious")

// Make an index of numbers - My First JS function!!!
function sample(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Sample an index
let mood_index = sample(0,moods.length)

// Pull out the selected mood by index
let selected_mood = moods[mood_index]

// Print to the console
console.log("Possible Moods:", moods)
console.log(person, "is", selected_mood)

// Apparently var is bad tho
// because it's not safe
person = "Jerry"

console.log("`var` is not safe because my name is not", person)

// There are 7 data types ///////////////////////////////////////////
// boolean
let energy_low = true

if(energy_low) {
    console.log("I am tired!")
}

// null
const motivation = null
let motivation_check = motivation == null

if (motivation_check) {
    console.log("I don't want to do anything!")
}

// defined
let words = undefined

if (words == undefined) {
console.log("I don't even know what to say!")
}

// Numbers
let desired_hours = sample(8,24)

console.log("I wish to sleep for", desired_hours, "hours!")

// WTF is a BigInt??
// Apparently adding an n makes one...
let fake_number = BigInt(500000000000000000000000000000000000)
let also_a_fake_number = 3n

console.log("The hell is this:", fake_number + also_a_fake_number)

// Strings
let quote = "I know all about strings!"

console.log("Is the word 'string' in this string?:", quote.includes("string"))

// Symbols
// I have no idea if I would ever use this? Time will tell
const greatest_fear = Symbol("fear")

const myself = {
    name: "Someone",
    age: sample(18,99) 
}

myself[greatest_fear] = "injustice"

console.log("User keys:", Object.keys(myself)); 
console.log("User JSON:", JSON.stringify(myself)); 
console.log("The greatest Fear:", myself[greatest_fear]); 

