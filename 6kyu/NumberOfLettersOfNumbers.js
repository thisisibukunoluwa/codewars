
// If we write out the digits of "60" as English words we get "sixzero"; the number of letters in "sixzero" is seven. The number of letters in "seven" is five. The number of letters in "five" is four. The number of letters in "four" is four: we have reached a stable equilibrium.

// Note: for integers larger than 9, write out the names of each digit in a single word (instead of the proper name of the number in English). For example, write 12 as "onetwo" (instead of twelve), and 999 as "nineninenine" (instead of nine hundred and ninety-nine).

// For any integer between 0 and 999, return an array showing the path from that integer to a stable equilibrium:

// Examples
// numbersOfLetters(60) --> ["sixzero", "seven", "five", "four"]
// numbersOfLetters(1) --> ["one", "three", "five", "four"]




























function numbersOfLetters(integer) {
  // your code here
  const integerMap = { 
    0 : "zero",
    1 : "one",
    2: "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine"
  }
 const getNewString = (int) => String(int).replace(/[0-9]/gi , key => integerMap[key])
  const newString = getNewString(integer)
  
    if (integer === 4 ) {
        return ['four']
    }
    
    let arr =  [newString].concat([]) 
  const generate = (number) => {
// if the number is less than 9 and the value of the key is equal to the number parameter
//push the value 
        if (number < 9 && integerMap[String(number)].length === number) {
            arr.push(integerMap[String(number)])
            return arr 
        }
     
    let NewString = String(number) > 9 ? getNewString(number) : integerMap[String(number)]
        arr.push(NewString) 
       return  generate(NewString.length)
  }
  
  return generate(newString.length) 
}




// convert to string iterate through it for each char we replace it with the value of the key we make for it then return a new string
// then we get the length of the string and the value of the number, if the length of the string is equal to the value of the number we push the string to the array and return it 
// if the length of the string is not equal to the value of the number 
// we push the string to a specified array , and our new number will be the length of the previous string 
//we now have a differnet condition , we first have to check if the number is greater than 9 


