// A note of something I learned. running tsc on a ts file will output
// a js file with the ts equivalent code - Interesting!
// 

// Basic, most commonly used primitives to start:
// String
// First typescript function!
// I like that this enforces typing explicitly!
function my_thoughts(adjective: string) {
let thoughts = `I absolutely think TypeScript is ${adjective}!`
console.log(thoughts)
}

my_thoughts("Cool")

// numbers
const the_answer = 9 + 10

console.log(`9 + 10 is ${the_answer}, not 21!`)

// booleans
let energy_level: number = Math.random()
const energy_check: boolean = energy_level < 0.5 
let energy_percent: number = Math.round(energy_level * 100)

if (energy_check) {
    console.log(`Energy Level:${energy_percent}% - I am TIRED!`)
} else if(energy_level === .5){
    console.log(`Energy Level:${energy_percent}% - I am ok.`)
 } else {
    console.log(`Energy Level:${energy_percent}% - I am NOT tired!`)
}

