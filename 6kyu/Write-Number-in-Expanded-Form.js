
// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!


function expandedForm(num) {
  // Your code here
  return [...String(num)]
    .reduce((accValue, currValue, index, array) => {
      return (
        accValue +
        `${
          currValue === "0"
            ? ""
            : `${index === 0 ? "" : " + "}${currValue}${"0".repeat(
                array.length - 1 - index
              )}`
        }`
      );
    }, "")
    .trim();
}

// We still need to refactor it 