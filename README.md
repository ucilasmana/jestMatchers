<div align="center">
  <br/>
     <h1 align="center">Getting Started with Jest Matchers</h1>
  <br/>
   <div align="center">
   Welcome to the repository for the tutorial "<a href="https://medium.com/@ucilasmana/getting-started-with-jest-matchers-58c9cbeae408" target="_blank"><b>Getting Started with Jest Matchers</b></a>".
   <br> This project is a practical, step-by-step guide designed to help you understand how Jest compares different data types under the hood. 
   </div>
</div>

<br>

## 🚀 Live App
You can visit the live app here: https://ucilasmana.github.io/jestMatchers/.

## 📚 What You Can Learn From This Project

From this project, you can learn how to choose the right Jest matcher for your specific testing needs, ranging from checking primitive values, arrays, and objects to safely handling thrown errors.

## ⚙️ Jest Matchers

Here are the Jest Matchers used in this project:
<br>

<b>Common Matchers</b>

- `.toBe(value)`: This matcher uses strict equality (`===`) to check whether the received value matches the expected value.
- `.toEqual(value)`: Performs a deep equality check, which is ideal for comparing objects and arrays. You can think of this matcher as checking whether the received value and the expected value are twins. It can also be used for primitive types, where it works exactly like the `.toBe()` matcher.
  
<b>Truthiness</b>
- `.toBeTruthy()`: Checks if a value is truthy, just like how an `if` statement evaluates a truthy condition.
- `.toBeFalsy()`: Checks if a value is falsy, just like how an `if` statement evaluates a falsy condition.

<b>Numbers</b>
- `.toBeCloseTo(value)`: Compares floating-point numbers for approximate equality, helping us avoid tiny rounding errors.
- `.toBeGreaterThan(value)`: Checks if the received value is greater than the expected number. 
- `.toBeGreaterThanOrEqual(value)`: Checks if the received value is greater than or equal to the expected number.
- `.toBeLessThan(value)`: Checks if the received value is less than the expected number.
- `.toBeLessThanOrEqual(value)`: Checks if the received value is less than or equal to the expected number.

<b>Strings</b>
- `.toMatch(regexp | string)`: Checks if a string matches the expected format or regular expression.

<b>Arrays</b>
- `.toContain(item)`: Checks if a specific item is included inside the array.
- `.toHaveLength(number)`: Checks if an array or a string has a specific length property matching the expected number.
- `expect.arrayContaining(array)`: Checks if the received array contains a specific list of elements, no matter how many extra elements it has or how they are ordered. It is typically used inside another matcher, like `.toEqual()`.
- `.toContainEqual(item)`: Checks if an array contains a specific element with a precise structure (like an object inside an array). You can use this matcher to find one complex element at a time.
  
<b>Objects</b>
- `.toHaveProperty(keyPath, value?)`: Checks if a specific property exists inside an object. We can also pass an optional second argument to verify that the property holds a specific value.
- `.toMatchObject(object)`: Checks if the received object matches a subset of properties from the expected object. The received object can have extra properties, as long as it contains the specific ones we are looking for.

<b>Exceptions</b>
- `.toThrow(error?)`: Checks if a function throws an error when it is executed. We can use this matcher either with or without an argument:
   - **Without an argument:** It will simply check if any error is thrown, regardless of its type or message.
   - **Passing an Error object class (`.toThrow(Error)`):** Ensures the thrown error is an instance of a specific error class.
   - **Passing a string or regex:** Checks that the thrown error message contains or matches the specified text.

   
## 📖 Related Article
Want a deep dive on how to implement these matchers into a project? Read the full tutorial on Medium:
"<a href="https://medium.com/@ucilasmana/getting-started-with-jest-matchers-58c9cbeae408" target="_blank"><b>Getting Started with Jest Matchers</b></a>"