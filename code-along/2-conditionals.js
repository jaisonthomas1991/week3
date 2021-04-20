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

// Store random integer in memory
let randomNumber = getRandomInt(10)

// Show the random integer in the console
console.log(`The random number is ${randomNumber}`)

// Show the user's number
console.log(`You entered ${input}`)

// If the user did not enter a number between 1-10, display an error
if (input <1 || input >10) {
  console.log(`You're really bad at following instructions...`)
} else if (input ==randomNumber) {
  console.log(`YOU WIN!`)
} else {
  console.log(`SORRY...`)
}
// If the user guessed the number, display "YOU WIN!"

// If the user did not guess the number, display "SORRY!"

