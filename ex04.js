// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(str) {
  let counts = {};

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (counts[ch]) {
      counts[ch] = counts[ch] + 1;
    } else {
      counts[ch] = 1;
    }
  }

  let maxChar = "";
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (counts[ch] > maxCount) {
      maxCount = counts[ch];
      maxChar = ch;
    }
  }
  return maxChar;
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"
