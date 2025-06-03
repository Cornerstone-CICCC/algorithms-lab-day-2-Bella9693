// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
      let capitalized = word[0].toUpperCase() + word.slice(1);
      result.push(capitalized);
    } else {
      result.push("");
    }
  }
  return result.join(" ");
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
