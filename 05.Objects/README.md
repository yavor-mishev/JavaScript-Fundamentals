# Objects

## Basics

- collections of key/value pairs

```javascript
// here are some important properties of a circle
let radius = 1;
let x = 1;
let y = 1;

// Object-oriented programming (OOP)
// here are the same props and a method (a function in an object) encapsulated in an object circle.
let cirlcle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }
    draw: function(){
        console.log("draw")
    }
}
circle.draw();
```

## Factory functions

- using factory finctions we can declare our objects once and reuse them to create different instances of our object
- the naming convention is camelNotation

```javascript
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1); // {radius: 1, draw: f}
circle1.draw(); // draw

const circle2 = createCircle(2);
```

## Constructor functions

- the naming convention is PascalNotation

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(1);
```

- the **new** keyword does 3 things:
  - creates an empty object `const circle = {}`
  - **this** points to the new empty object
  - then it will return this new object

❗ there is not a big difference in the two approaches. Creating objects using the **new** keyword is similar to the way we create objects in other languages like Java or C#

## Dynamic nature of objects

- just like variable and arrays, objects can be altered after their declaration. We can add or remove props and methods

```javascript
const circle = {
  radius: 1,
};

circle.color = "red";
circle.draw = function () {
  console.log("draw");
};

console.log(circle); // {radius: 1, color: "red", draw: f}

delete circle.color;
delete circle.draw;

console.log(circle); // {radius: 1}
```

- just because our circle object is a constant doesn't mean that we can not change the object itself. We cannot reassign that variable

```javascript
const circle = {
  radius: 1,
};

circle = {}; // TypeError: Assignment to constant variable
```

## Constructor property

- every object has a **constructor property** which references the function that was used to create the object

```javascript
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

console.log(another.constructor); // returns the Circle function
console.log(circle.constructor); // returns Object()
```

- when we use the object literal, JavaScript uses the Object() constructor function under the hood

```javascript
let x = {};
//let x = new Object();
// the same way we use string, number, boolean literals, JavaScript uses their respective constructor functions

new String();
new Number();
new Boolean();
```

## Functions are objects

- if we try using the dot notation on our Circle function we would see a list of different methods and properties this function has (name, length, etc)

```javascript
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

console.log(Circle.name); // Circle
console.log(Circle.length); // 1 -> returns the number of arguments

console.log(Circle.constructor); //Function() -> the function that has created our object

// this is what actually happens
const Circle1 = new Function(
  "radius",
  `
 this.radius = radius;
 this.draw = function () {
   console.log("draw");
 }`
);
```

## Value types vs Reference types

- primitives are independant. Here the variable _y_ takes the value of _x_ but doesnt point to the same place in memory

```javascript
let x = 10;
let y = x;

x = 20;
console.log(x, y); // 20, 10
```

- now if we were to have objects we can see that both variables _a_ and _b_ point to the same place in memory and whichever property we change it will change for the other object. What is stored in the _a_ and _b_ variables is actually the address in memory of our object

```javascript
let a = { value: 10 };
let b = a;
console.log(a.value, b.value); // 10, 10

a.value = 20;
console.log(a.value, b.value); // 20, 20

b.value = 30;
console.log(a.value, b.value); // 30, 30
```

- here is another example of primitive type behaviour. The number variable in the function is completely independant from the variable outside of the function.

```javascript
let number = 10;
let another = { value: 10 };

function increment(number) {
  number++;
}

function increase(another) {
  another.value++;
}

increment(number);
console.log(number); // 10;

increase(another);
console.log(another.value); // 11
```
