// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  
  // PART 1
  // Figure out how products there are, and store that number in memory
  let productsQ = data.products.length

  // Figure out how promotions there are, and store that number in memory
  let promotionsQ = data.promotions.length

  // Write the number of products to the JavaScript console
  console.log(`There are ${productsQ} products`)

  // Write the number of promotions to the JavaScript console
  console.log(`There are ${promotionsQ} promotions`)

  // PART 2
  // Store the first product in memory
  let prod1 = data.products[0]

  // Write the first product to the JavaScript console, on three separate lines
  console.log(prod1.name)
  console.log(prod1.image)
  console.log(prod1.name)
  console.log(`${prod1.price} each`)

  // Repeat for the 2nd and 3rd products
  let prod2 = data.products[1]
  console.log(prod2)
  let prod3 = data.products[2]
  console.log(prod3)
  // Store the second product in memory

  // Write the product to the JavaScript console, on three separate lines
  
  // Store the third product in memory

  // Write the product to the JavaScript console, on three separate lines

  // PART 3
  // Get a random integer between 1 and 10
  let random = getRandomInt(10)

  // Subtract one from that random integer because Arrays are zero-based
  let subtract = random - 1
  console.log(random)
  console.log(subtract)

  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
  let promo = data.promotions[random]
  console.log(promo)

  // Figure out which emoji should be displayed, store it in memory (you will need
  // let emoji = [`🤑`,`🚛`, '🏆' ] 
  let emojiNew
  if (promo.type == `discount`) {
    emojiNew = `🤑`
  } else if (promo.type == `shipping`) {
    emojiNew = `🚛`
  }else if (promo.type == `contest`) {
    emojiNew = '🏆'
  }

  // Create a sentence that displays the emoji along with the description 
  // of the promotion
  console.log(`${emojiNew}, ${promo.description}`)

  // Write the sentence to the JavaScript console

  // 🔥 YOUR CODE ENDS HERE 🔥
})
