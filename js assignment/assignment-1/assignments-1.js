// 1. Greet the website visitor using JS alert box.
alert("Welcome to Our Website");

// 2. Display an error message on the web page.
document.write("Error! Please Enter a valid password<br>");

// 3. Display a message on the web page using line break.
document.write("This is a message with<br>line break<br>");

// 4. Display messages in sequence using alerts.
alert("First message");
alert("Second message");
alert("Third message");

// 5. Make use of alerts in your HTML & CSS project.

// 6. Practice placement of elements in different sections of the project.

// 7. Declare a variable called username.
var username;

// 8. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "Uzair";

// 9. Display "Hello World" in an alert box.
var message;
message = "Hello Everyone";
alert(message);

// 10. Save student's bio data in JS variables and show the data in alert boxes.
var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
alert("Name: " + name + "\nAge: " + age);

// 11. Declare a variable called email and assign to it a string that represents your Email Address.
var email = "example@example.com";
alert("My email address is " + email);

// 12. Display content in the browser through JS.
document.write("This is displayed through JavaScript<br>");

// 13. Store a string in a variable and show it in alert and browser through JS.
var pattern = "▬▬▬▬▬▬▬▬▬ ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(pattern);
document.write(pattern + "<br>");

// 14. Declare a variable called age & show it in an alert box.
var age = 2024 - 2005;
alert("I am " + age + " years old");

// 15. Declare & initialize a variable to keep track of the number of times a visitor has visited a web page.
var visits = prompt("How many times have you visited this site?");
document.write("You have visited this site " + visits + " times<br>");

// 16. Declare a variable called birthYear & show a message in the browser.
var birthYear = 2005;
document.write("My birth year is " + birthYear + "<br>");

// 17. Store visitor information in variables and show a message in the browser.
var visitorName = "kabir";
var productTitle = "T-shirt";
var quantity = 5;
document.write(
  visitorName +
    " ordered " +
    quantity +
    " " +
    productTitle +
    "(s) on XYZ Clothing store<br>"
);

// 18. Declare 3 variables in one statement.
var var1, var2, var3;

// 19. Declare 5 legal & 5 illegal variable names.

// Legal variable names:
var legalVariable;
var myVar;
var _variableName;
var camelCase;
var $money;

// Illegal variable names:
// var 123illegal;
// var #illegalVar;
// var -notAllowed;
// var var name;
// var !nope;

// 20. Display rules for naming JS variables in the browser.
document.write("<h1>Rules for naming JS variables</h1>");
document.write(
  "Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable<br>"
);
document.write(
  "Variables must begin with a letter, underscore, or dollar sign. For example $name, _name or name<br>"
);
document.write("Variable names are case-sensitive<br>");
document.write("Variable names should not be JS keywords<br>");

// 21. Write a program to add two numbers and show the result.
var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));
var sum = num1 + num2;
document.write("The sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// 22. Repeat task 21 for subtraction, multiplication, division & modulus.
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

// 23. Do the following using JS Mathematical Expressions.
var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 5;
document.write("Initial value: " + variable + "<br>");
variable++;
document.write("Value after increment is: " + variable + "<br>");
variable += 7;
document.write("Value after addition is: " + variable + "<br>");
variable--;
document.write("Value after decrement is: " + variable + "<br>");
var remainder = variable % 3;
document.write("The remainder is: " + remainder + "<br>");

// 24. Calculate the cost of buying 5 movie tickets.
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write(
  "Total cost to buy 5 movie tickets is " + totalCost + " PKR<br>"
);

// 25. Display multiplication table of any number.
var number = parseInt(
  prompt("Enter a number to display its multiplication table:")
);
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(number + " x " + i + " = " + number * i + "<br>");
}