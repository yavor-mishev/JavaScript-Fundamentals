# Arrays

## Adding elements

```javascript
const numbers = [3, 4];

// end
numbers.push(5, 6); // [3, 4, 5, 6]

//beginning
numbers.unshift(1, 2); // [1, 2, 3, 4, 5, 6]

//middle
numbers.splice(2, 0, "a", "b"); // [1, 2, a, b, 3, 4, 5, 6]
```

- making an array a constant does not prevent us from modifying the array element or length
- making an array a constant means we cannot assign it a different value like `numbers = [];`

## Finding elements in an array (primitives)

```javascript
const arr = [1, 2, 3, 1, 4];

arr.indexOf("a"); // -1
arr.indexOf(1); // 0

arr.lastIndexOf(1); // 3

const containsElement = arr.indexOf(3) !== -1; // true => 3 is an element of the array
arr.includes(3); // true

// all these methods have an optional second parameter -> starting index
arr.indexOf(1, 2); // 3
```

## Finding elements in an array (objects)

```javascript
const courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'C++'}
    {id: 3, name: 'Python'}
];

// here includes won't work because objects are reference types
courses.includes({id: 1, name: 'JavaScript'}); // false

const numbers = [1,2,3,4,5];
const found = numbers.find(function(el) { return el > 3; }); // this will stop at 4

found = courses.find(function(course) {return course.name === 'Python';}); // {id: 3, name: 'Python'}

found = courses.find(function (course) {
  return course.name === "C#";
});
console.log(found); // undefined

// findIndex returns the index of the first element that satisfies the condition
// or -1 if no element satisfies the condition
let foundIndex = numbers.findIndex(function (el) {
  return el > 3;
});
console.log(`The index of the first number greater than 3 is: ${foundIndex}`); // 2

foundIndex = courses.findIndex(function (course) {
  return course.name === "Python";
});
console.log(`The course with name "Python" is at index:  ${foundIndex}`); // 3
```

## Arrow functions

```javascript
foundIndex = courses.findIndex(function (course) {
  return course.name === "Python";
});

foundIndex = courses.findIndex((courses) => {
  return course.name === "Pyhton";
});
```

- the `=>` separates the parameters from the body
- if we have just the single parameter then we can omit the parameter brackets
- if our function has no parameters we leave empty brackets `(() => {return course.name === 'Python';})`
- if our function is a single line of code and is returning a value `(() => course.name === 'Python')`

## Removing elements from an array

```javascript
const numbers = [1, 2, 3, 4, 5];

//end
const last = numbers.pop();
console.log(numbers); // [1, 2, 3, 4]
console.log(last); // 5
//middle
//beginning
const first = numbers.shift();
console.log();
```

## Emptying an array

```javascript
const numbers = [1, 2, 3, 4];
const another = numbers;
```

- **solution 1**: assign an empty array

```javascript
numbers = [];
```

The problem with this approach is that the array `another` would still point at the original array of `[1,2,3,4]`. We are only emptying the `numbers` array

- **solution 2**: set the length of either array to 0

```javascript
numbers.length = 0;
another.length = 0;
```

This is probably the best way to do it. Regardless of which array we choose we will set the lenght of the array in memory to 0 so both `numbers` and `another` would then point to an empty array

- **solution 3**: using the splice method

```javascript
numbers.splice(0, numbers.length);
```

The splice method accepts a starting index and the number of elements we want to delete. We get the same result as with solution 2 but with more clutter

- **solution 4**: using a `while` loop and popping elements while the array is not empty

```javascript
while (numbers.length) numbers.pop();
```

This solution is not optimal because if we had an array of 1.000.000 elements we would have to call the `pop()` method a million times

## Combining and slicing arrays

```javascript
const first = [1, 2, 3, 4];
const second = [5, 6, 7, 8];

// concat()
const combined = first.concat(second); // [1, 2, 3, 4, 5, 6, 7, 8]

// slice(), slice(start), slice(start, end)
const result = first.slice(); // [1, 2, 3, 4] - copy
result = first.slice(1); // [2, 3, 4]
result = first.slice(1, 3); // [2, 3]
```

Note that if we are dealing with arrays of objects then the elements of the resulting array `result` will be references to these objects and if we later decide to alter these objects they will change in the initial arrays `first` `second`

## The spread operator

```javascript
combined = [...first, ...second]; // [1, 2, 3, 4, 5, 6, 7, 8]
combined = [...first, "hello", ...second, "world"]; // [1, 2, 3, 4, 'hello', 5, 6, 7, 8, 'world']
const copy = [...combined];
```

## Iterating an array

```javascript
const numbers = [1, 2, 3, 4, 5];

// for ... of
for (let number of numbers) console.log(number);

//forEach()
numbers.forEach(function (number) {
  console.log(number);
});
numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) => console.log(index, number));
```

## Joining arrays

```javascript
numbers.join(); // '12345'
numbers.join(", "); // '1, 2, 3, 4, 5'

const message = "This is my first message";
const parts = message.split(" "); // ["This", "is", "my", "first", "message"]
const combined = parts.join("-"); // "This-is-my-first-message"
```

## Sorting arrays

```javascript
const numbers = [5, 2, 7, 8, 3, 1, 9, 4, 0, 6];
const courses = [
  { id: 0, name: "JavaScript" },
  { id: 1, name: "C++" },
];

// sort() converts every element to a string and then sorts the array
numbers.sort();

// reverse()
numbers.reverse();

// sort() for arrays of objects
courses.sort(function (course1, course2) {
  // course1 < course2 => -1
  // course1 > course2 => 1
  // course1 === course2 => 0

  // thiese two lines ensure that case sensitivity desnt affect the sorting method
  const name1 = course1.name.toUpperCase();
  const name2 = course2.name.toUpperCase();

  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
});
```

❗ remember that the `sort()` method converts everything to a string and then compares and sorts the elements.

```javascript
numbers = [1, 2, 3, 28, 4, 5];
numbers.sort(); // [1, 2, 28, 3, 4, 5];
```

## Testing the elements of an array

- every(): checks if all the elements of an array pass a certain condition

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.every(function(el){
  return el > 0;
};) // true

numbers = [1, 2, -1, 3, 4];
numbers.every(function(el){
  return el > 0;
};) // false
```

- some(): checks if there is at least one element of an array that passes a certain condition

```javascript
let numbers = [1, 2, 3, 4, 5, -1];
numbers.some(function(el){
  return el < 0;
};) // true

numbers = [1, 2, 3, 4, 5];
numbers.every(function(el){
  return el < 0;
};) // false
```

## Filtering an array

```javascript
let numbers = [1, 2, 3, 4, -5, -6, 7];
const filtered = numbers.filter(function (value) {
  return value >= 0;
});
filtered = numbers.filter((n) => n >= 0); // [1, 2, 3, 4, 7];
```

## Mapping an array

```javascript
const numbers = [1, -1, 2, 3];

const items = numbers.filter((n) => n >= 0).map((n) => ({ value: n }));
console.log(items); // [{ value: 1 }, { value: 2 }, { value: 3 }]
```

## Reducing an array

```javascript
const cart = [8.98, 3.2, 16.89];

let sum = 0;
for (let item of cart) sum += item;

sum = cart.reduce((accumilator, currValue) => {
  return accumilator + currValue;
}, 0);
```

The `reduce()` method has two parameters: `callback fn` and an initial value for the `accumilator`. If we dont give the accumilator an initial value then the it will recieve the value of the first element in the array and the `currValue` the ones after that.

---

### Exercise 1
