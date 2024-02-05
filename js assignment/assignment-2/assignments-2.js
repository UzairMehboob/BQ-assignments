// 1. Program to display result after arithmetic operations on a number.
var number = 5;
document.write("Initial number: " + number + "<br>");
document.write("Result after --number: " + --number + "<br>");
document.write(
  "Result after --number - --number: " + (--number - --number) + "<br>"
);
document.write(
  "Result after --number - --number + ++number: " +
    (--number - --number + ++number) +
    "<br>"
);
document.write(
  "Result after --number - --number + ++number + number--: " +
    (--number - --number + ++number + number--) +
    "<br>"
);

// 2. Explanation of the output in variables a, b & result.
var a = 2,
  b = 1;
var result = --a - --b + ++b + b--;
// --a;   'a' will be 1
// --a - --b;  'b' will be 0 and subtracts 'a' 1 from 'b'  0 , result is 1
// --a - --b + ++b;  b will be 2 and b is added to the previous, result is 3
// --a - --b + ++b + b--; b will be 1 and be is subtracted from previos, result is 2

document.write("a: " + a + "<br>");
document.write("b: " + b + "<br>");
document.write("result: " + result + "<br>");

// 3. Program to greet the user by taking input.
var userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");

// Prompting the user for a number and setting default to 5 if no input provided
var input = prompt(
  "Enter a number for its multiplication table (default is 5):"
);
var num;
if (input === null || input === "") {
  num = 5;
} else {
  num = +input;
}

// Displaying the multiplication table of the entered number
document.write("<h2>Multiplication Table of " + num + "</h2>");
for (var i = 1; i <= 10; i++) {
  document.write(num + " x " + i + " = " + num * i + "<br>");
}

// 5. Program to take input for subjects, calculate total marks and percentage.
var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = +prompt("Enter obtained marks for " + subject1 + ":");

var obtainedMarks2 = +prompt("Enter obtained marks for " + subject2 + ":");

var obtainedMarks3 = +prompt("Enter obtained marks for " + subject3 + ":");

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<h2>Result</h2>");
document.write("<table>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td>" +
    subject1 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject2 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td>" +
    subject3 +
    "</td><td>" +
    totalMarks +
    "</td><td>" +
    obtainedMarks3 +
    "</td></tr>"
);
document.write("</table>");
document.write("Total Obtained Marks: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
