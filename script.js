// Prompts user to input Froyo flavors separated by commas
let getFlavors = prompt("Enter your flavors separated by commas here: ");

// Converts input into an array and trims spaces
let userFlavors = getFlavors.split(",").map(flavor => flavor.trim().toLowerCase());

// Object to store flavor counts
let flavors = {};

// Function to count and store flavors
function storeFlavors(orderedFlavors) {
    for (let flavor of orderedFlavors) {
        // If flavor exists, increment count; otherwise, initialize to 1
        flavors[flavor] = (flavors[flavor] || 0) + 1;
    }
}

// Store flavors in the object
storeFlavors(userFlavors);

// Display the order as a list
console.log("Your Froyo Order:");
for (let flavor in flavors) {
    console.log(`${flavor}: ${flavors[flavor]}`);
}

// Display the order as a table in the console
console.table(flavors);

// Display output on the webpage
document.body.innerHTML += "<h2>Your Froyo Order:</h2>";
document.body.innerHTML += "<ul>";
for (let flavor in flavors) {
    document.body.innerHTML += `<li>${flavor}: ${flavors[flavor]}</li>`;
}
document.body.innerHTML += "</ul>";

