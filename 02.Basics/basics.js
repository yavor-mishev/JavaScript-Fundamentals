console.log("Hello World!");

let person = {
  name: "John",
  age: 30,
};

person.name = "Yavor";
person["name"] = "Nicole";
console.log(person.name); // Yavor

let selectedColors = ["red", "bule"]; // array literal
let firstColor = selectedColors[0]; // stores the first element of the array in the variable red
console.log(firstColor); // red

selectedColors[2] = "green";
selectedColors[3] = 10;

typeof selectedColors; // object
console.log(selectedColors.length); // 4

function helloWorld() {
  console.log("Hello World!");
}

helloWorld();

function greet(name) {
  console.log("Hello " + name + "!");
  console.log(`Hello ${name}!`); // template litera
}

greet("Yavor");
greet("Nicole");

function square(number) {
  return number ** 2;
}

console.log(square(2)); // 4
console.log(square(3)); // 9
