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
