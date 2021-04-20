// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: "Guess the number" game. 
// - Store a random integer between 1 and 10 in memory; produce a 
//   human-readable output to the JavaScript Console in Chrome showing 
//   the number. 
// - Then, show the number the user entered ("input"). 
// - If the user did not enter a number between 1-10, display an error
//   message. 
// - If the user guessed the number, display "YOU WIN!"
// - If the user did not guess the number, display "SORRY!"

// input is a variable which contains the user's input
let input = prompt(`Enter a number between 1 and 10`)

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a random integer between 1-10 in memory
let random = getRandomInt(10)

// Write the random integer to the JavaScript console in Chrome
console.log(`The random number is ${random}`)

// Write the number the user entered to the Javascript console
console.log(`You entered ${input}`)

// If the user did not enter a number between 1-10, display an error
if (input < 1 || input > 10) {
  console.log(`You're pretty bad at following directions...`)
} else if (input == random) {
  // If the user guessed the number, display "YOU WIN!"
  console.log(`YOU WIN!`)
} else {
  // If the user did not guess the number, display "SORRY!"
  console.log(`SORRY!`)
}