
// DESCRIPTION:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag(str) {
  let newStr = str.trim();
  if (!newStr.length > 0) {
    return false;
  }
  let finalString =
    "#" +
    newStr
      .split(/\s+/)
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1, word.length);
      })
      .join("");
  if (finalString.length > 140 || finalString.length === 0) {
    return false;
  }
  return finalString;
}
