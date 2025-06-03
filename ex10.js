// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(str) {
  let parts = str.split("_");
  for (let i = 1; i < parts.length; i++) {
    parts[i] = parts[i][0].toLowerCase() + parts[i].slice(1);
  }
  return parts.join("");
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
