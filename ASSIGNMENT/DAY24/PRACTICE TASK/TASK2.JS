// Types of Error in JavaScripts

// 1. Syntax Error

// Occurs when the code violates JavaScript syntax rules.

// Detected before code execution (during parsing).

// Example:

console.log("Hello World"  // Missing closing parenthesis

// 2. Reference Error

// Happens when a variable or function is used before it is declared.

// Example:

console.log(x); // x is not defined

// 3. Type Error

// Occurs when a value is used in an inappropriate type context.

// Example:

let num = 5;
num(); // num is not a function

// 4. Range Error

// Happens when a value is outside the allowed range.

// Example:

let arr = new Array(-1); // invalid array length
