
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

export const towerBuilder = (nFloors: number): string[] => {
  // build here
  let arr: string[] = [];
  let start = -1;
  for (let i = 0; i < nFloors; i++) {
    arr.push("*".repeat((start += 2)));
  }
  let finalArray:string[] = [];
  for (let i = 0; i < arr.length; i++) {
    let spacer = " ".repeat((start - arr[i].length) / 2);
    finalArray.push(spacer + arr[i] + spacer);
  }
  return finalArray;
};
