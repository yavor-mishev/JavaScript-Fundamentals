# Operators

## Arithmetic

- used to perform calculations

```javascript
let x = 10;
let y = 3;

console.log(x + y); // 13 addition
console.log(x - y); // 7 subtraction
console.log(x * y); // 30 multiplication
console.log(x / y); // 3 division
console.log(x % y); // 1 remainder of division
console.log(x ** y); // 1000 exponentiation

// increment operator (++)
console.log(++x); // 11. By prefixing the operator we first increment the variable and then log it onto the console

console.log(x++); // 11. By postfixing the operator we first log the variable to the console and then increment it
console.log(x); // 12

// decrement operator (--)
x = 10;

console.log(--x); // 9

console.log(x--); // 9
console.log(x); // 8
```

## Assignment'

```javascript
let x = 10;
let y = 3;

x += y; // shorthand for x = x + y
x -= y; // shorthand for x = x - y
// all the arithmetic  operators have this shorthand assignment operator
```

## Comparison

- all return a boolean (true or false)

```javascript
let x = 1;
console.log(x > 0); // true
console.log(x >= 1); // true
console.log(x < 1); // false
console.log(x <= 1); // true
console.log(x === 1); // true -> checks for variable type and value
console.log(x !== 1); // false
```

## Equality

- the strict equality operator ensures that both variables are of the same kind and have the same values
- the lose equality operator checks the type of the left variable and converts the right variable to the same type then compares them

```javascript
//strict equality operator (type + value)
console.log(1 === 1); // true
console.log("1" === 1); // false

// lose equality operator (value)
console.log("1" == 1); // true
console.log(true == 1); // true
```

## Ternary

```javascript
let points = 110;

let type = points > 100 ? "gold" : "silver";
console.log(type); // gold
```

- the ternary operator can replace an if...else statement that has only two possible outcomes
  `(condition) ? (if true) : (else);`

## Logical
