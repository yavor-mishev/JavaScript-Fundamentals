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

// solution 1 => numbers = [];
// solution 2 => another.length = 0;
// solution 3 => numbers.splice(0, numbers.length);
// solution 4
while (numbers) numbers.pop();
```

- solution 1: assign an empty array

```javascript
numbers = [];
```

The problem with this approach is that the array `another` would still point at the original array of `[1,2,3,4]`. We are only emptying the `numbers` array

- solution 2: set the length of either array to 0

```javascript
numbers.length = 0;
another.length = 0;
```

This is probably the best way to do it. Regardless of which array we choose we will set the lenght of the array in memory to 0 so both `numbers` and `another` would then point to an empty array

- solution 3: using the splice method

```javascript
numbers.splice(0, numbers.length);
```

The splice method accepts a starting index and the number of elements we want to delete. We get the same result as with solution 2 but with more clutter

- solution 4: using a `while` loop and popping elements while the array is not empty

```javascript
while (numbers.length) numbers.pop();
```

This solution is not optimal because if we had an array of 1.000.000 elements we would have to call the `pop()` methid a million times
