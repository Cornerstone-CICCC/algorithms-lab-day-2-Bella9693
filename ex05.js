// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  let count = 0;
  let vowels = "aeiou";
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z" && !vowels.includes(ch)) {
      count++;
    }
  }
  return count;
}

console.log(countConsonants("hello world")); // Expected output: 7
