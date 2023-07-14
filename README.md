# JS

JavaScript is a programming language initially designed to interact with elements of web pages.  
In web browsers, JavaScript consists of three main parts:

-   ECMAScript provides the core functionality.
-   The Document Object Model (DOM) provides interfaces for interacting with elements on web pages
-   The Browser Object Model (BOM) provides the browser API for interacting with the web browser.

## JavaScript Syntax

-   Whitespace  
    Whitespace refers to characters that provide the space between other characters.
    -   Carriage return
    -   Space
    -   New Line
    -   Tab
-   Statements  
    A statement is a code the declares a variable or **instructs the JS engine to do a task**.
    Statements terminate with semicolon (;)
-   Blocks  
    A block is a sequence of zero or more simple statements.
    A block is delimited by a pair or curly brackets ({})
-   Identifiers  
    An identifier is a name you choose for variables, parameters, functions, classes, etc.
    An identifier name starts with (a-z, A-Z, _, \$) and followed by (a-z, A-Z, 0-9, _, \$)
-   Comments  
    Comments allow you to add notes or hints to JavaScript code
    -   Single-line comments (//)
    -   Block comments (/\* \*/)
-   Expressions  
    An expression is a piece of code that **evaluates to a value**.  
    ex. 2 + 1
-   Keywords & Reserved words  
    JavaScript defines a list of reserved keywords that have specific uses. Therefore, you cannot use the reserved keywords as identifiers or property names by rules.

Expressions => returns a value

```js
// Expressions examples
123;
1 + 1;
("hello");
true;
[1, 2, 3];
// ternary operator
isAlive ? 1 : 0;
// IIFE
(function () {})();
```

Statements => complete task instruction

```js
// Statements examples
function test() {}
if(isAlive === 1) {}
for(){}
let variable = (isAlive + 2) * 4;
```

#### A Point about react

In react you can use **expressions** inside the `{}`.  
You _cannot_ use **statements** inside the `{}`;

```jsx
function App() {
    return (
        <div>
            {/* 
                Inside here we can use expressions
                and this is why we can use ternary operator here
                but we cannot put in an if statement
            */}
            <p>{1 + 1}</p>
        </div>
    );
}
```

## Variables

A variable is a label that references a value.

**Choose the right keyword for defining a variable**

-   `var` (not recommended)
-   `let`
-   `const`

**Variable definition has two steps**:

1. Declaration  
   ex. `let message;`

2. Initialization

    ```js
    let message;
    message = "Hello";

    // Declare and  initialize at the same time
    let variabledName = value;
    ```

By default, when a variable is declared but not initialized, it is assigned the value of undefined.

## Data Types in JS:

-   Primitives / Value types
    -   Number
        -   Integer
        -   Floating-point
        -   NaN
        -   Ocatal
        -   Hexadecimal
        -   Binary
    -   String (JavaScript string are immutable)
    -   Boolean
    -   undefined (it's a type and aslo a value)
    -   null (it's type is object and that's a bug in js)
    -   symbol
    -   bigint
-   Reference types
    -   Object
        -   built-in objects (Array, Function, Map, Set, etc.)
        -   user defined objects

JavaScript is a dynamically typed language. It means that a variable doesn’t associate with a type. In other words, a variable can hold a value of different types.

### Numbers:

-   Integer  
    `let counter = 100;`
-   Floating-point  
    `let price = 9.99;`
-   Octal  
    `let num = 0o71;`
-   Hexadecimal  
    `let num = 0x1a;`
-   Binary  
    `let binNum = 0b111;`

The numeric separator allows you to create a visual separation between groups of digits by using underscores (\_) as separators.  
`const budget = 1_000_000_000;`

### Booleans:

JavaScript boolean type has two literal values `true` and `false`.  
You can use the `Boolean()` function to cast a non-boolean values to a boolean value.  
Some statements automatically and implicitly cast a non-boolean value to a boolean value using `Boolean()` function.

For example, the `if` statement executes a block if a condition is `true`.  
If you use a non-boolean value, it'll use the `Boolean()` function to implicilty cast the value to a boolean value.

```js
let error = "An error occurred";

if (error) {
    console.log(error);
}
```

In this example, since the error variable holds a non-empty string, the if statement evaluates its value to true. Therefore, it executes the console.log(error) to output the error to the console.

### Strings:

JavaScript strings are primitive values. Also, strings are immutable. It means that if you modify a string, you will always get a new string. The original string doesn’t change.

-   JavaScript strings are primitive values and immutable.
-   Literal strings are delimited by single quotes ('), double quotes ("), or backticks (`).
-   The length property returns the length of the string.
-   Converting values to string  
    Note that the `toString()` method doesn’t work for `undefined` and `null`.
    -   `String(n)`
    -   `'' + n`
    -   `n.toString()`
-   Use the comparison operators `>, >=, <, <=, == to compare string  
    The comparison operators compare strings based on the numeric values of the characters. (ASCII)

### Symbols:

JavaScript added a primitive type in ES6: the symbol. Different from other primitive types, **the symbol type does not have a literal form**.  
 The Symbol function creates a new unique value every time you call it.

```js
let s1 = Symbol();
console.log(Symbol() == Symbol()); // false
```

### JS Objects

JavaScript is designed on a simple **object-based** paradigm.

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

A JavaScript object is a collection of named values.

In JavaScript, an object is a standalone entity, with properties and type.

A property name of an object can be any string. You can use quotes around the property name if it is not a valid identifier.

```js
let person = {
    firstName: "John",
    lastName: "Doe",
};
```

#### **Object operations**:

-   Creating an object
-   Accessing a property
-   Modifying the value of a property
-   Adding a property
-   Deleting a property
-   Checking existence of a property
-   toString() and valueOf() methods

#### Creating an object:

There are different ways to create new objects  
JavaScript provides you with many ways to create an object.

-   using object literal notation (object initializer)  
    Object initializers are also called object literals `let person = {}`
-   using Object constructor `const person = new Object()`
-   Define an object constructor, and then create objects of the constructed type.
-   Create an object using `Object.create()`

#### Accessing a property:

There are two ways to access a property of an Object

-   Dot Notation

    `person.name`

-   Bracket Notation (array-like)

    `person["name"]`

#### Modifying the value of a property

To change the value of a property, you use the assignment operator (=).

```js
let person = {
    firstName: "John",
    lastName: "Doe",
};

person.firstName = "Jane";
```

#### Adding a property

Unlike objects in other programming languages such as Java and C#, you can add a property to an object after object creation.

```js
let person = {
    firstName: "John",
    lastName: "Doe",
};

person.age = 53;
```

#### Deleting a property

To delete a property of an object, you use the `delete` operator.

```js
let person = {
    firstName: "John",
    lastName: "Doe",
};

delete person.firstName;
```

#### Checking existence of a property

1.  Using `in` operator
2.  Using `hasOwnProperty` method
3.  Using `Objects.keys` method
4.  Using `Object.getOwnPropertyNames` method

1- To check if a property exists in an object, you use the `in` operator.  
The `in` operator returns true if the property name exists in the object.

2- This method checks if an object has a property with the specified name and returns a boolean value. It does not look up the prototype chain.

```js
let employee = {
    firstName: "Peter",
    lastName: "Doe",
    employeeId: 1,
};

console.log("ssn" in employee); // false
console.log("employeeId" in employee); // true

console.log(employee.hasOwnProperty("firstName")); // true
console.log(employee.hasOwnProperty("gender")); // false

console.log(Object.keys(employee).includes("firstName")); // true
console.log(Object.keys(employee).includes("gender")); // false

console.log(Object.getOwnPropertyNames(employee).includes("firstName")); // true
console.log(Object.getOwnPropertyNames(employee).includes("gender")); // false
```

#### toString() and valueOf() methods

In JavaScript, `toString()` and `valueOf()` are methods that are available on all objects, including arrays, functions, and custom objects. These methods are used to convert an object into a string or a primitive value, respectively.

##### toString()

The `toString()` method returns a string representation of the object.

By default, the `toString()` method returns the `[object Object]` string for generic objects.

However, many built-in objects override this method to provide a more meaningful string representation. For example, the `toString()` method on an `array` returns a comma-separated string of the array's elements.

```js
const numbers = [1, 2, 3];
const numbersString = numbers.toString();

console.log(typeof numbersString); // "string"
console.log(numbersString); // "1,2,3"
```

##### valueOf()

The `valueOf()` method returns the primitive value of the object.

By default, the `valueOf()` method returns the object itself.

However, many built-in objects override this method to provide a more meaningful primitive value.  
For example, the `valueOf()` method on a date object returns the number of milliseconds since the Unix epoch.

```js
const now = new Date();
const timestamp = now.valueOf();

console.log(typeof timestamp); // "number"
console.log(timestamp); // 1626269902910
```

Note that in many cases, JavaScript will automatically call `toString()` or `valueOf()` on an object when a string or a primitive value is expected.

For example, when concatenating a string with an object, the `toString()` method of the object is called.

When using an object in a mathematical operation, the `valueOf()` method of the object is called.

## Primitive wrapper types:

JavaScript provides three primitive wrapper types: Boolean, Number, and String types.

The primitive wrapper types make it easier to use primitive values including booleans, numbers, and strings.

```js
let language = "JavaScript";
let s = language.substring(4);
console.log(s); // Script
```

In this example, The variable `language` holds a primitive string value. It **doesn’t have any method** like `substring()`. However, the above code works perfectly.

When you call a method on a variable that holds a number, a string, or a boolean, JavaScript performs the following steps behind the scenes:

-   Create an object of a corresponding type.
-   Call a specific method on the instance.
-   Delete the instance immediately.

So the above code is technically equivalent to the following code:

```js
let language = "JavaScript";
// behind the scenes of the language.substring(4);
let temp = new String(language);
let str = temp.substring(4);
temp = null;
```

So why not use `String`, `Number` and `Boolean` as reference types instead of primitive types?

When you create an object of a reference type using the new operator, the object will stay in the memory until it goes out of scope.

The following variable `language` will stay on the heap until it goes out of the scope:

```js
let language = new String("JavaScript");
console.log(language);
```

However, an automatically created primitive wrapper object exists for one line of code only. See the following example:

```js
let langName = "JavaScript";
langName.language = "ECMAScript";
console.log(langName.language); // undefined
```

In this example, we attempted to access the `language` property of the `langName` variable and received a value of `undefined` instead of `'ECMAScript'`.  
The reason is that the following code creates a String object and assigns a value to the language property.  
However, the String object with the language property only exists during the execution of this line of code.  
It’s not recommended to explicitly create primitive wrapper objects like the following:

```js
let n = new Number(10);
let s = new String("JS");
let b = new Boolean(false);
```

it's worth noting that using reference types can come with a performance cost, as each reference requires additional memory and processing time compared to primitive types.

## Memory Management in JS:

here are many programming languages out there, each having its own characteristics. An essential characteristic of any programming language is how memory efficient it is. The speed of a language depends on how well it handles memory and optimizes at runtime. While memory management differs from programming language, they share common concepts such as **Stack**, **Heap**, etc.

### Memory life cycle in JS:

The memory life cycle defines a JavaScript variable or object’s journey from initialization to removal. JavaScript and all the other programming languages have a similar memory life cycle.

`Initialization -> Accessing -> Removal`

**Initialization** is the creation of the variable.  
In JavaScript, we do this using the let, const, or var keywords. During this stage, the JavaScript Engine reserves memory for the variables and stores the values inside the allocated memory space.

```js
let name = "codedamn";
```

**Accessing** is using the variable. Many times, we’ll also be modifying the values of these variables or objects during this stage.

```js
if (name === "codedamn") {
    // Changing the value
    name = "Codedamn!";
}
```

**Removal** is the deallocation of the reserved memory taken up by the variables. After deallocation, we won’t be able to access the variable from our JavaScript code. For example, we cannot access the variables created inside a function.

```js
function sum() {
    let x = 10;
    let y = 20;
    let sum = x + y;
}

console.log(x); // This will throw and error!
```

### Static and Dynamic data:

**Static** or **fixed-size** data is the data whose size is fixed at compile time.

Because static data has a size that does not change, the JavaScript engine allocates a fixed amount of memory space to the static data and store it on the stack.

static data includes:

-   Primitive values (`null`, `undefined`, `boolean`, `number`, `string`, `symbol` and `BigInt`)
-   Reference values the refer to object

**Dynamic** data is the data whose size is unknown at compile time or may vary at run time.

dynamic data includes objects such as arrays, functions, etc.

### Stack and Heap:

We talked about allocation and deallocation, but the question is that where do these allocations and deallocation happen?

In JavaScript, **stack** and **heap** memory are two different ways of storing and managing data in memory.

When you declare variables, the JavaScript engine allocates the memory for them on two memory locations: stack and heap.

The difference between them is what variables get stored in which type of storage.

#### Stack

The stack is a special region of memory that is used for storing data that is directly related to the execution of a program. This includes function call frames, local variables, and other data related to the execution of a program. The stack is managed by the JavaScript engine and is automatically allocated and deallocated as functions are called and completed.

JavaScript uses the stack data structure to store static or fixed-size data. This includes all numbers, strings, booleans, and other primitive data types. These data types have a fixed size known at compile time. Variables such as objects, arrays, etc., are not stored in the stack as their size varies during run time.

For example, the following declares two variables and initializes their values to a literal string and a number:

```js
let name = "John";
let age = 25;
```

Primitive values are immutable in JavaScript. This means that once a primitive value is created, it cannot be changed.

So when you assign a primitive value from one variable to another, the JavaScript engine creates a copy of that value and assigns it to the variable. For example:

```js
let age = 25;
let newAge = age;
```

#### Heap

The heap is a region of memory that is used for storing complex objects such as arrays and objects. The heap is managed by the JavaScript engine and requires manual memory management. This means that developers need to allocate and deallocate memory for objects on the heap manually using functions such as new and delete.

JavaScript uses a heap for storing variables whose size is unknown at compile time or may vary at the run time, such as objects, arrays, functions, etc.

```js
let person = {
    name: "John",
    age: 25,
};
```

### Garbage Collection:

In languages like C, C++, etc., it’s our job to allocate memory and safely deallocate it after use. Therefore, if the memory is not freed up after use, the program will run with an unused allocated memory block. We term this condition a **memory leak**. Therefore, to prevent such conditions, modern programming languages, like JavaScript, come with a Garbage collector.

A Garbage collector is a part of the JavaScript Engine whose job is to free up unused memory from the heap using a garbage collection process. It ensures proper memory management while the application is running. Therefore, the programmer doesn’t have to worry about manual memory management, the garbage collector does it.

It seems pretty straightforward, right? Well, No. There are a lot of challenges to achieving this. There isn’t any algorithm that guarantees that it frees up all the unused memory at the current moment. But, there are algorithms such as the mark and sweep, that perform pretty well and come close to removing most of the unwanted pieces of memory from the heap.

### Mark and Sweep algorithm

It’s one of the most common garbage collection algorithms out there. Basically, it marks the objects not reachable by the root object, i.e., the window object as trash or garbage. Later, the garbage collector removes these marked objects from the heap. Have a look at the example below.

_One tradeoff though is the global variables declared using var. When declaring a variable with var, the JavaScript Engine attaches them to the window object. Now, since these variables are always reachable by window objects, there are never removed by the garbage collector._

## Operators in JS:

-   Arithmetic
    -   addition (+)
    -   subtraction (-)
    -   multiplication (\*)
    -   division (/)
    -   reminder of division(mod) (%)
    -   exponentiation (\*\*)
    -   increment(prefix & postfix) (++)
    -   decrement(prefix & postfix) (--)
    -   unary plus (+)
    -   unary minus (-)
-   Assignment (=)
-   Comparison
    -   Relational
        -   greater than (>)
        -   greater than or equal to (>=)
        -   less than (<)
        -   less than or equal to (<=)
    -   Equality
        -   Strict (Same Type and Value)
            -   strict equality (===)
            -   strict not equality (!==)
        -   Loose (Same Value (Type coercion if necessary to make the comparison possible))
            -   loose equality (==)
            -   loose not equality (!=)
    -   Ternary (condition ? expression : expression)
-   Logical
    -   NOT (!)
    -   AND (&&)
    -   OR (||)
    -   Nullish coalesing (??)
-   Logical Assignment
    -   ||=
    -   &&=
    -   ??=
-   Spread (...)
-   Comma (,)
-   Bitwise
    -   AND (&)
    -   OR (|)

We use _operators_ to create _expression_ and with this expressions we can implement _algorithms_.

`operators -> expression -> algorithms`

JavaScript uses a comma (,) to represent the comma operator. A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.

```js
let result = (10, 10 + 20);
console.log(result); // 30
```

In an addition operation, If either value is `string`, the addition operator implicitly converts the numeric value into a string and concatenates two strings.

In an subtraction or multiplication or divide operation, If a value is a string, a boolean, null, or undefined, the JavaScript engine will convert the value to a number using the `Number()` function.

When you apply the unary plus operator to a non-numeric value, it performs a number conversion using the `Number()` function with the rules in the following table:

| Value   | Result                                                                                |
| ------- | ------------------------------------------------------------------------------------- |
| boolean | false to 0, true to 1                                                                 |
| string  | conver the string value based on a set of specific rules                              |
| object  | call `valueOf()` and/or `toString()` method to get the value to convert into a number |

```js
let s = "10";
console.log(+s); // 10
```

In arithmetic and comparison operations, If one of the operators' values is an object, the JavaScript engine will call the `valueOf()` method of the object to get the value for calculation.  
For example:

```js
let energy = {
    valueOf() {
        return 100;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy); // 90

currentEnergy = energy + 100;
console.log(currentEnergy); // 200

currentEnergy = energy / 2;
console.log(currentEnergy); // 50

currentEnergy = energy * 1.5;
console.log(currentEnergy); // 150
```

If the object doesn’t have the `valueOf()` method but has the `toString()` method, the JavaScript engine will call the `toString()` method to get the value for calculation.  
For example:

```js
let energy = {
    toString() {
        return 50;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy); // 40

currentEnergy = energy + 100;
console.log(currentEnergy); // 150

currentEnergy = energy / 2;
console.log(currentEnergy); // 25

currentEnergy = energy * 1.5;
console.log(currentEnergy); // 75
```

## Conditional Statements:

-   if...else
-   switch...case

switch statement uses strict comparison (===).

## Loops:

-   while
-   do-while
-   for
-   for-in (for iterating an object)
-   for-of (for iterating an array)

The `while` statement evaluates the expression before each iteration of the loop.  
Because the while loop evaluates the expression before each iteration, it is known as a **pretest** loop.

Because the do...while loop evaluates expression after each iteration, it’s often referred to as a **post-test** loop.

```js
for (initializer; condition; iterator) {
    // statements
}
```

## Functions

### Ways to define a function:

-   Function Declaration

    we can call it before it is defined

-   Function Expression
    -   Named Function Expression
    -   Anonymouse Function Expression

```js
// Function Declaration
function walk() {
    console.log("walk");
}
```

```js
// Named Function Expression
const run = function something() {
    console.log("run");
};

// Anonymous Function Expression
const move = function () {
    console.log("move");
};
```

### Types of functions

-   Regular functions
-   Arrow functions

ES6 introduced arrow function expressions that provide a shorthand for declaring anonymous functions.

```js
let show = function () {
    console.log("Anonymous function");
};

// can be shortened using the following arrow function:
let show = () => console.log("Anonymous function");
```

### Functions actions

-   Declaring a function

```js
function functionName(parameters) {
    // function body
    // ...
}
```

-   Calling a function

```js
functionName(arguments);
```

Every function in JavaScript implicitly returns undefined unless you explicitly specify a return value.

### Functions are First-Class citizens

Functions are first-class citizens in JavaScript. In other words, you can treat functions like values of other types.  
This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.

-   Storing functions in vairables
-   Passing a function to another function
-   Returning functions from functions

```js
function add(a, b) {
    return a + b;
}

let sum = add;

function average(a, b, fn) {
    return fn(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result);
```

### Passing arguments mechanism

-   Pass-by-Value
-   Pass-by-Reference

In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments.

### arguments object

Inside a function, you can access an object called `arguments` that represents the named arguments of the function.

The `arguments` object behaves like an array (array-like) though it is not an instance of the Array type.

For example, you can use the square bracket `[]` to access the arguments: `arguments[0]` returns the first argument, `arguments[1]` returns the second one, and so on.

Also, you can use the `length` property of the arguments object to determine the number of arguments.

```js
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1, 2)); // 3
console.log(add(1, 2, 3, 4, 5)); // 15
```

### Create object using constructor function:

And `this` is a reference to the object that is executing this piece of code.

```js
/// Constructor Function

// First letter should be uppercase (Pascal Notation)
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("Draws");
    };
    /*
        We don't have to explicitly add
        the statement here in this function,
        this will happen under the hood.
     */
    // return this;
}

const circle = new Circle(1);

// When we use new operatro 3 things happen
// 1. new create an empty object
// const x = {};
// 2. set this to point to that empty object

// 3. return that object from Contructor function

console.log(circle);
```

---

Every Object in JS has a property called **constructor**.  
And that references the function used to construct or create that object.

```js
another.constructor;
// ƒ Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log("draw");
//     };
// }
circle.constructor;
// ƒ Object() { [native code] }
```

If we create an object using the object literal syntax internaly the js engine uses this constructor function.  
It's like default constructor in C++.

```js
ƒ Object() { [native code] }
```

---

When we use this syntax (object literal), JavaScript will translate that to something like this.

```js
let x = {};
// THIS IS GENERATED WITH JS Engine
// let x = new Object();
```

---

JS has built-ing constructor functions.

-   `new String()`
-   `new Boolean()`
-   `new Number()`

So overally there is two way for object creation:

-   using default constructor `Object()`
    -   `const person = new Object();`
    -   `Object.create()`
-   using User Default constructor like
    -   Function constructor
    -   class

## In JS functions are objects.

```js
Circle.constructor;
// ƒ Function() { [native code] }
```

### Create a function with Function constructor

```js
const Circle1 = new Function(
    "radius",
    `this.radius = radius;
    this.draw = function () {
        console.log("Draws");
    }`
);
```

---

All of them are equal.

```js
// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("draw");
    };
}

Circle.call({}, 1);
Circle.apply({}, [1]);
const another = new Circle(1);
```

If we don't use new keyword `this` will reference to `window` object. and it's equal to...

```js
Circle.call(window, 1);
Circle.apply(window, [1]);
const another = Circle(1);
```

`Object` is a Constructor function but as we know functions are also objects so this constructor function has some property and methods.

-   Object.keys()
-   Object.entries()
-   Object.assign()
-   etc.

## Clone an Object

There is a three way to clone an object.

1. for-in
2. Object.assign()
3. Using spread operator

```js
const circle = {
    radius: 1,
    draw() {
        console.log("draw");
    },
};

const another = {};

// 1.
for (let key in circle) another[key] = circle[key];

// 2.
const another = Object.assign({}, circle);

// 3.
const another = { ...circle };
```

## Arrays

In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index.

A JavaScript array has the following characteristics

-   An Array can hold values fo mixed types
-   The size of an array is dynamic and auto-growing

### Array operations:

-   Creating an Array
-   Adding Elements (+)
-   Removing Elements (❌ -)
-   Finding Elements (📌 ?)
-   Emptying an Array (🧹 [])
-   Combining and Slicing (🔗 ✂️)
-   Iterating an Array (♻️)
-   Sorting Arrays ([1, 2, 3] 🧮)
-   Testing Elements (To be, or not to be 🧪)
-   Filtering Elements
-   Mapping an Array
-   Reducing an Array

### Creating an Array:

-   using `Array` constructor

```js
let scores = new Array();
```

You can create an array with or without `new` keyword because when `Array` is called as a `function` rather than as a `constructor`, it _creates_ and _initialises_ a new Array object. Thus the function call `Array(...)` is equivalent to the object creation expression `new Array(...)` with the same arguments.

-   using array literal notation

```js
let colors = ["Red", "Green", "Blue"];
```

#### Adding Elements:

-   End
    -   using `push()` method
-   Beginning
    -   using `unshift()` method
-   Middle
    -   using `splice()` method

```js
const numbers = [3, 4];

// End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, "a", "b");

// [1, 2, 'a', 'b', 3, 4, 5, 6]
```

#### Removing Elements:

-   End
    -   using `pop()` method
-   Beginning
    -   using `shift()` method
-   Middle
    -   using `splice()` method

```js
const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(last, numbers);

// Beginning
const first = numbers.shift();
console.log(first, numbers);

// Middle
const numbers2 = [1, 2, 3, 4];
// Removing 3 and 4 from array
const middle = numbers2.splice(2, 2);
console.log(middle, numbers2);
```

#### Finding Elements:

-   Finding primitives
    -   indexOf
    -   lastIndexOf
    -   includes
-   Finding reference types
    -   find

```js
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));
console.log(numbers.lastIndexOf(1));
console.log(numbers.includes(1));
```

```js
const courses = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
];

const course = courses.find(function (course) {
    return course.name === "a";
});

const courseIndex = courses.findIndex(function (course) {
    return course.name === "a";
});

console.log(course, courseIndex);
```

#### Emptying an Array:

-   `numbers = [];`
-   `numbers.length = 0;`
-   `numbers.splice(0, numbers.length);`
-   `while (numbers.length > 0) numbers.pop();`
    -   NOT Recommended

Solution 1:

This solution works if you DO NOT have any other references to the original array

```js
let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
numbers = [];

// [] [1, 2, 3, 4]
console.log(numbers, another);
```

All Solutions:

```js
const numbers = [1, 2, 3, 4];
const another = numbers;

// Solution 1
// numbers array should be created with let keyword
// numbers = [];

// numbers and all referencing arrays will be empty

// Solution 2
// numbers.length = 0;

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4 NOT Recommended
// while (numbers.length > 0) numbers.pop();

console.log(numbers, another);
```

#### Combining and Slicing:

-   concat
-   slice
-   spread operator

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

// Solution 1
const combined = first.concat(second);
// Solution 2
const combined = [...first, ...second];

// Solution 1
const sliced = combined.slice(2, 4);
// Solution 2
const sliced = [...combined];

console.log(combined, sliced);
```

#### Iterating an Array:

-   while
-   do-while
-   for
-   for-in
-   for-of
-   forEach

#### Sorting Arrays:

```js
const numbers = [2, 3, 1];

// This method converts each element in array
// to a string and then sorts the elements in the array
// So this method works fine with strings and numbers
numbers.sort();
numbers.reverse();
console.log(numbers);

// for working with objects we should use this method
const courses = [
    {
        id: 1,
        name: "Node",
    },
    {
        id: 2,
        name: "JavaScript",
    },
];

courses.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    // Remove case sensitivity
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);
```

#### Testing the elements:

-   every
-   some

```js
const numbers = [1, -1, 2, 3];

// every() checks to see every element given in array
// matches the givin criteria.

// some() checks to see we have at least one element
// that matches the given criteria.

const allPositive = numbers.every((value) => value >= 0);
const atLeatOnePositive = numbers.some((value) => value <= 0);

console.log(allPositive, atLeatOnePositive);
```

#### Filtering elements:

```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => value >= 0);
// [1, 2, 3];
console.log(filtered);
```

#### Mapping an Array:

`filter` and `map` don't modify the original array.  
These methods are chainable.

```js
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter((value) => value >= 0);
// const items = filtered.map((value) => ({ value }));

// INSTEAD WE CAN USE CHAINING
const items = numbers
    .filter((value) => value >= 0)
    .map((number) => ({
        value: number,
    }));

console.log(items);
```

#### Reducing an Array:

Reduce is like a blender.
It blends everything into a single value.

Any time you have an array of values and you want to get a single value as a result of iterating that array, think of the **reduce** method.

```js
const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let number of numbers) sum += number;

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// If remove initial value the value of the accumulator
// will be set to the first element of the array

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5
const sum1 = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum, sum1);
```

### Rest operator:

If you want to have a function with varying number of parameters, you can use the rest operator.

**Rest operator** is different to spread operator.

```js
function sum(discount, ...prices) {
    const total = prices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
    );
    return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));
```

### Getter and Setter:

```js
const person = {
    firstName: "Dariush",
    lastName: "Hadipour",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

person.fullName = "John Doe";

// getter => access properties of an object
// setter => change (mutate) them

console.log(person);
```

---

When we need to add error handling, typically at the beginning of a function or method, this is what we call **defensive** programming.

### basic of error handling in js:

```js
const person = {
    firstName: "Dariush",
    lastName: "Hadipour",
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if (typeof value !== "string")
            throw new Error("Value is not a string.");

        const parts = value.split(" ");
        if (parts.length !== 2) throw new Error("Enter a first and last name.");

        this.firstName = parts[0];
        this.lastName = parts[1];
    },
};

try {
    person.fullName = null;
} catch (error) {
    console.log(error);
}

console.log(person);
```

## The "this" keyword:

What is this?

_this_ references the **object** that is executing the current function.

If that function is part of an object, we call that function a method. So if that function is a method in an object, _this_ references that object itself.

Otherwise if that function is a regular function which means it's not part of an object _this_ references to global object,
which is windows object in browser and global in Node.

```js
// method => object
// function => global (window, global)

const video = {
    title: "a",
    tags: ["a", "b", "c"],
    play() {
        console.log(this);
        // {title: 'a', play: ƒ}
    },
};
video.play();

function playVideo() {
    console.log(this);
    // window object
}
playVideo();

// Constructor function
function Video(title) {
    this.title = title;
    console.log(this);
    // we get new object
    // because this points to new empty object
}
const v = new Video("a");
```

### Callback function (regular function) and _this_:

```js
const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach(function (tag) {
            // because here we are inside a callback function
            // and it is just a REGULAR FUNCTION
            // it's not a METHOD in the video object
            // so the this keyword point to the GLOBAL (window) object
            console.log(this, tag);
        });

        // In this particular case, we can solve it
        // with the second parameter of forEach
        // which gets this and passes it to the callback function
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    },
};
video.showTags();
```

### Changing the value of "_this_":

-   Define self
-   using `call()` method
-   using `apply()` method
-   using `bind()` method
-   using arrow function

Define self:

```js
const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        const self = this;
        this.tags.forEach(function (tag) {
            console.log(self.title, tag);
        });
    },
};
video.showTags();
```

Other methods:

```js
function playVideo(a, b) {
    console.log(this);
}

playVideo.call({ name: "Dariush" }, 1, 2);
// { name: "Dariush" }

playVideo.apply({ name: "Kianoosh" }, [1, 2]);
// { name: "Kianoosh" }

const fu = playVideo.bind({ name: "Behnam" });
fu();
// { name: "Behnam" }

playVideo();
// window object
```

So we cloud set this with the help of bind:

```js
showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    },
```

But there is newer and better solution, starting from ECMA script 6, we have arrow function.

The good thing about the arrow functions is that they inherit the _this_ value.

```js
const video = {
    title: "a",
    tags: ["a", "b", "c"],
    showTags() {
        this.tags.forEach((tag) => {
            // arrow function inherit this from
            // the containing function (showTags)
            console.log(this.title, tag);
        });
    },
};
video.showTags();
```
