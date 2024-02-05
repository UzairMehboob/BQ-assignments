// 1. Program to greet the user based on the city entered.
var cityName = prompt("Enter the city name:");
if (cityName.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights");
}

// 2. Program to greet the user based on their gender.
var gender = prompt("Enter your gender (male/female):");
if (gender.toLowerCase() === "male") {
  alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  alert("Good Morning Ma'am.");
}

// 3. Program to check remaining fuel in car and display a message if it's less than 0.25 litres.
var fuel = +prompt("Enter remaining fuel in car (in litres):");
if (fuel < 0.25) {
  alert("Please refill the fuel in your car");
}

// 4. Running and recording the outputs of given conditions.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 5. Guess game:
var secretNumber = 7;
var guess = +prompt("Guess the secret number (ranging from 1 to 10):");
if (guess === secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
  alert("Close enough to the correct answer.");
}

// 6. Program to check if a given number is divisible by 3.
var number = +prompt("Enter a number:");
if (number % 3 === 0) {
  alert("The number is divisible by 3.");
}

// 7. Program to check if a given number is even or odd.
var inputNumber = +prompt("Enter a number:");
if (inputNumber % 2 === 0) {
  alert("The number is even.");
} else {
  alert("The number is odd.");
}

// 8. Program to display message based on temperature input.
var temperature = +prompt("Enter the temperature:");
if (temperature > 40) {
  alert("It is too hot outside.");
} else if (temperature > 30) {
  alert("The Weather today is Normal.");
} else if (temperature > 20) {
  alert("Today’s Weather is cool.");
} else if (temperature > 10) {
  alert("OMG! Today’s weather is so Cool.");
}

// 9. Program to create a calculator using if statements.
var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
}
alert("The result is: " + result);
