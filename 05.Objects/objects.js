//Factory function
// A factory function is a function that returns an object.
// It is a way to create objects without using the `new` keyword.
// Factory functions are useful for creating multiple instances of an object with the same properties and methods.
// They can also be used to create objects with private properties and methods.
// Factory functions are a common pattern in JavaScript for creating objects.
// Example of a factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor function
// A constructor function is a function that is used to create an object.
// It is a way to create objects using the `new` keyword.
// Constructor functions are useful for creating multiple instances of an object with the same properties and methods.
// They can also be used to create objects with private properties and methods.
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const anotherCircle = new Circle(1);

let x = 10;
let y = x;

x = 20;
console.log(x, y); // 20, 10

let a = { value: 10 };
let b = a;
console.log(a.value, b.value); // 10, 10

a.value = 20;
console.log(a.value, b.value); // 20, 20

b.value = 30;
console.log(a.value, b.value); // 30, 30

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

//Exercise 1
const addressE1 = {
  street: "Balgarska Morava",
  city: "Sofia",
  zipCode: 1303,
};

function showAddress(address) {
  for (let key in address) {
    console.log(`${key} : ${address[key]}`);
  }
}

showAddress(addressE1);

//Exercise 2
const myAddress = createAddress("Balgarska Morava", "Sofia", 1303);
const myAddress1 = new Address("Balgarska Morava", "Sofia", 1303);
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

//Exercise 3
const address1E3 = new Address("Balgarska Morava", "Sofia", 1303);
const address2E3 = new Address("Balgarska Morava", "Sofia", 1303);
const address3E3 = address1E3;

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

//Exercise 4
function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1E3, address2E3)); // true
console.log(areSame(address1E3, address3E3)); // true

//Exercise 5
const blogpost = {
  title: "My first blog post",
  body: "This is the body of my first blog post.",
  author: "John Doe",
  views: 100,
  comments: [
    {
      author: "Jane Doe",
      body: "Great post!",
    },
    {
      author: "Yavor Mishev",
      body: "Love your content!",
    },
  ],
  isLive: true,
};

console.log(blogpost);
