// Object to store flavor counts
let flavors = {
    strawberry: 0,
    vanilla: 0,
    chocolate: 0,
    orange: 0,
    cherry: 0,
    mango: 0,
};

// Prompts user to input Froyo flavors separated by commas
let getFlavors = prompt("Enter your flavors separated by commas here: ");

// Converts input into an array and trims spaces
let userFlavors = getFlavors.split(",").map(flavor => flavor.trim().toLowerCase());


// Function to count and store flavors
function storeFlavors(orderedFlavors) {
    for (let flavor of orderedFlavors) {
        // If flavor exists, increment count; otherwise, initialize to 1
        flavors[flavor] = (flavors[flavor] || 0) + 1;
    } return flavors;
}

// Invoke storeFlavors function
storeFlavors(userFlavors);

// Displays order in the console:
console.log("Here's your order: ");
console.table(flavors);