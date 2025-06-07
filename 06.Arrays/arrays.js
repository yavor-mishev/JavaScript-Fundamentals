const courses = [
  { id: 1, name: "JavaScript" },
  { id: 2, name: "C++" },
  { id: 4, name: "Python" },
];
const numbers = [1, 2, 3, 4, 5];

// Adding elements to an array
numbers.push(6); // adds 6 to the end of the array
numbers.unshift(0); // adds 0 to the beginning of the array
numbers.splice(4, 0, 3.5); // adds 3.5 at index 4
console.log(numbers);

courses.push({ id: 5, name: "C#" }); // adds a new course to the end of the array
courses.unshift({ id: 0, name: "HTML" }); // adds a new course to the beginning of the array
courses.splice(3, 0, { id: 3, name: "TypeScript" }); // adds a new course at index 3
console.log(courses);

// Finding elements in an array (primitives)
numbers.includes(3); // true
numbers.includes(10); // false
numbers.includes(3, 2); // true, starts searching from index 2

// Finding elements in an array (objects)
// Arrow functions
// Removing elements from an array

// here includes won't work because objects are reference types
courses.includes({ id: 1, name: "JavaScript" }); // false

//find
let found = numbers.find(function (el) {
  return el > 3;
});
console.log(found); // 3.5

found = courses.find(function (course) {
  return course.name === "Python";
});
console.log(found); // { id: 3, name: 'Python' }

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

//Emptying an array
const arr = [1, 2, 3, 4, 5];
while (arr.length) {
  arr.pop(); // removes the last element until the array is empty
}
