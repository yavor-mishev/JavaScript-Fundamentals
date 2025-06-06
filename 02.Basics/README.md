## Variables in JavaScript

Variables are used to store data values in JavaScript. You can declare a variable using the `let`, `const`, or `var` keywords. For example:

```javascript
let name;
const age = 25;
var isActive = true;
```

- `let` allows you to declare variables that can be reassigned.
- `const` is used for variables whose values should not change.
- `var` is the older way to declare variables and is less commonly used today.

If you declare a variable without assigning a value, its initial value is `undefined`:

```javascript
let score;
console.log(score); // Output: undefined
```

You can assign a value to a variable at any time after its declaration:

```javascript
score = 10;
```

## Naming Conventions

When naming variables in JavaScript, follow these conventions:

- Use **camelCase** for variable names (e.g., `firstName`, `totalAmount`).
- Variable names can include letters, digits, underscores (`_`), and dollar signs (`$`), but cannot start with a digit.
- Variable names are **case-sensitive** (`myVar` and `myvar` are different).
- Avoid using reserved keywords as variable names.

**Examples:**

```javascript
let userName;
let $price;
let _count;
let totalScore;
```

## Primitives/Value types and Reference types

### Primitives

1. String
2. Number
3. Boolean
4. undefined
5. null

```javascript
let name = "Yavor"; // String literal
let age = 24; // Number literal
let isApproved = true; // Boolean literal
let userName = undefined; // we can explicitly set the variable to undefined
let firstName = null; // we use null to clear the value of a variable
```

### Reference types

1. Objects
2. Arrays
3. Functions

## Static vs Dynamic languages

- JavaScript is a dynamically typed language
- with static languages the type of a variable cannot be changed. If we have a variable that stores a string we cannot change that variable to point to a number later in our code
- with static languages we explicitly say what the type of our variable is
- with the `typeof` operator we chan check a variables type

## Objects

```javascript
let person = {
  name: "Yavor",
  age: 24,
}; // object literal

// accessing an object property
person.name = "John"; // dot notation
person["age"] = 30; // bracket notation by passing the prop name
```

## Arrays

```javascript
let selectedColors = ["red", "bule"]; // array literal
let red = selectedColors[0]; // the first element of an array is always ot index 0
```

- just like variables arrays are also dynamic in JavaScript (the lenght and the types of the elements are dynamic and can change)

```javascript
selectedColors[2] = "green";
console.log(selectedColors); // ['red', 'blue', 'green']

selectedColors[3] = 10;
console.log(selectedColors); // ['red', 'blue', 'green', 10]
```

- an array is technically an object so just like our person object arrays also have useful key/value pairs (properties) that we can access

```javascript
selectedColors.length; // returns the length of the array
```

## Functions

- a function is a set of statements that performes a task or calculates a value

```javascript
function helloWorld() {
  console.log("Hello World!");
}

helloWorld(); // Hello World!

// this function performs a task -> printing to the console
function greet(name) {
  console.log("Hello " + name + "!");
  console.log(`Hello ${name}!`); // template litera
}

greet("Yavor"); // Hello Yavor x2
greet("Nicole"); // Hello Nicole x2
```

### Types of functions

```javascript
// this function calculates a value -> the square of a number
function square(number) {
  return number ** 2;
}
```
