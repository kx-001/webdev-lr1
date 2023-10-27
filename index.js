// Task 3.1:
console.log("Hello, world!");

// Task 3.2:
var name = "Linn";
console.log(name);

// Task 3.3:
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Linn");

// Task 3.4:

const PI = 3.14159;
console.log(PI);

// Task 3.5:
var sum = 0;
sum += 1;
sum += 2;
sum += 3;
console.log(sum);

// Task 3.6:

var grade = 90;
if (grade >= 90) {
  console.log("You received an A!");
} else {
  console.log("You need to study harder!");
}

// Task 3.7:

function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(10));

// Task 3.8:
function findMax(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

console.log(findMax(10, 20));

// Task 3.9:.
function reverseString(string) {
  var reversedString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

console.log(reverseString("Hello, world!"));
