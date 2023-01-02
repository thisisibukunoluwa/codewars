


// DESCRIPTION:
// The written representation of a number (with 4 or more digits) can be split into three parts in various different ways. For example, the written number 1234 can be split as [1 | 2 | 34] or [1 | 23 | 4] or [12 | 3 | 4].

// Given a written number, find the highest possible product from splitting it into three parts and multiplying those parts together. For example:

// product of [1 | 2 | 34] = 1 * 2 * 34 = 68
// product of [1 | 23 | 4] = 1 * 23 * 4 = 92
// product of [12 | 3 | 4] = 12 * 3 * 4 = 144
// So maximumProductOfParts(1234) = 144

// For a longer string there will be many possible different ways to split it into parts. For example, 8675309 could be split as:

// [8 | 6 | 75309]
// [867 | 530 | 9]
// [8 | 67 | 5309]
// [86 | 75 | 309]
// or any other option that splits the string into three parts each containing at least one digit.



















function maximumProductOfParts(number) {
  // your code here
  let numsArray = [];
  let str = number.toString();
  for (let i = 1; i < str.length - 1; i++) {
    for (let k = i + 1; k < str.length; k++) {
      // split string into 3 parts
      const first = str.slice(0, i);
      const second = str.slice(i, k);
      const third = str.slice(k, str.length);
      numsArray.push(
        [first, second, third].reduce((acc, curr) => acc * parseInt(curr), 1)
      );
    }
  }
  return Math.max(...numsArray);
}