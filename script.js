// -----------------------------
// Part 1: JavaScript Basics
// -----------------------------
// Variable declarations and conditionals
let userName = "Sadik";
let userAge = 20;

if (userAge >= 18) {
    console.log(userName + " is an adult.");
    document.getElementById("output").textContent = userName + " is an adult.";
} else {
    console.log(userName + " is a minor.");
    document.getElementById("output").textContent = userName + " is a minor.";
}

// -----------------------------
// Part 2: JavaScript Functions
// -----------------------------
// Function 1: Calculate total
function calculateTotal(a, b) {
    return a + b;
}
// Function 2: Format a greeting
function formatGreeting(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}
console.log(formatGreeting(userName));

// -----------------------------
// Part 3: JavaScript Loops
// -----------------------------
// Loop 1: For loop to print numbers 1-5
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}
// Loop 2: Array iteration with forEach
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log("Fruit:", fruit);
});

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------
// 1. Toggle message on button click
const toggleBtn = document.getElementById("toggleBtn");
let showMessage = true;
toggleBtn.addEventListener("click", function() {
    showMessage = !showMessage;
    document.getElementById("output").textContent = showMessage ? formatGreeting(userName) : "Message hidden.";
});
// 2. Dynamically create a list
const dynamicList = document.getElementById("dynamicList");
fruits.forEach(function(fruit) {
    const li = document.createElement("li");
    li.textContent = fruit;
    dynamicList.appendChild(li);
});
// 3. Change list item color on click
const listItems = dynamicList.getElementsByTagName("li");
for (let item of listItems) {
    item.addEventListener("click", function() {
        item.style.color = "#e67e22";
    });
}
