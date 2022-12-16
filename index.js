//explanation of your solution here**
//This function first uses the split() method to split the word string into an array of individual characters. 
//It then uses the reverse() method to reverse the order of the elements in the array,
// and finally the join() method to join the array back into a single string.

function reverse(word){
  return word.split("").reverse().join("");
}

//The function below takes in a single string argument called word and returns a boolean value 
//indicating whether or not the input word is a palindrome.

function isPalindrome(word) {
  const reversedWord = reverse(word);

  return word === reversedWord;
}

// The code below, function with different strings as arguments and logs the results to the console.
 //The expected results are passed to console.log.

Finally, the code exports the isPalindrome function as the value of module.exports, which allows it to be imported and used in other modules.
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
