// A note of something I learned. running tsc on a ts file will output
// a js file with the ts equivalent code - Interesting!
// 

// Basic, most commonly used primitives to start///////////////////////////
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

// more types ////////////////////////////////////////////////////////
// Arrays
// Out in the "real world", we start from zero ( ˶°ㅁ°) !!
// this array is explicitly typed, although Ts can type inferentially - explicitness is good for documentation IMO though
const zero_to_twenty: number[] = Array.from({length : 21}, (_, i) => i) // Think of => as the anon function in R (\(x))
console.log(zero_to_twenty)

// We could start from 1 if we wanted
const one_to_twenty = Array.from({length: 20}, (_, i) => i + 1)
console.log(one_to_twenty)

// We could count by 2 if we wanted, too
const zero_to_twenty_by_two = Array.from({length: 11}, (_, i) => i * 2)
console.log(zero_to_twenty_by_two)

// any
// uhhh... I feel like this defeats the purpose of typing... but I'm just learning IDK
// any allows you to put whatever you want (type-wise) into an object it seems..
// According to Mozilla: The any type is useful when you don’t want to write out a long type just to convince TypeScript that a particular line of code is okay.
// You can always use noImplicitAny
let the_obj: any = 9000
the_obj = "9000!!"

console.log("It's over", the_obj)

// The beauty of typescript though is the inferential typing
// This is done by default, but I'll wait to see if I run into cases where explicit typing is needed
let total_n = 555
let type_result_1 = typeof total_n === "number"

console.log(type_result_1)