// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str) {
  //Code here
  return str
    .split(/\s/)
    .map((word) =>
      !/\W|_/g.test(word)
        ? word.slice(1, word.length).concat(word[0] + "ay")
        : word
    )
    .join(" ");
}
























