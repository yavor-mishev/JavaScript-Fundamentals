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
