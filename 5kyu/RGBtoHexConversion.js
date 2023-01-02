

// DESCRIPTION:
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3


function rgb(r, g, b) {
  // complete this function

  return [r, g, b].reduce((accValue, currValue) => {
    //         console.log(accValue)
    if (currValue > 255) {
      return accValue + "FF";
    }
    if (currValue === 0 || currValue < 0) {
      return accValue + "00";
    }
    if (currValue < 16) {
      return accValue + currValue.toString(16).toUpperCase().padStart(2, "0");
    }
    return accValue + currValue.toString(16).toUpperCase();
  }, "");
}