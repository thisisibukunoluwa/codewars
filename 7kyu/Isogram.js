// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


function isIsogram(str) {
  let newStr = str.toLowerCase();
  let charCount = [...newStr].reduce((accValue, currValue) => {
    return (
      accValue[currValue] ? accValue[currValue]++ : (accValue[currValue] = 1),
      accValue
    );
  }, {});
  console.log(charCount);
  for (val of Object.values(charCount)) {
    if (val > 1) {
      return false;
    }
  }
  return true;
}