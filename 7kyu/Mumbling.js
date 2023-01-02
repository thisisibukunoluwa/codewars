


// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



  // your code
  function accum(s) {
    // your code
    return [...s]
      .reduce((accValue, currValue, index, array) => {
        return [
          ...accValue,
          `${currValue.charAt(0).toUpperCase()}${currValue
            .toLowerCase()
            .repeat(index)}`,
        ];
      }, [])
      .join("-");
  }