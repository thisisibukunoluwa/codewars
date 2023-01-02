
// DESCRIPTION:
// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16
























// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
   if (bonus < price || bonus === 0 || bonus < 0 ) return 0 
  console.log(bonus,price)
  let beerCanNumber = Math.floor(bonus / price)
  let initLevel = 1 
  let levels = 0 
    for (i = 0; i < beerCanNumber; i += Math.pow(initLevel,2)) {
      initLevel++
      levels++ 
    console.log(beerCanNumber,initLevel,levels,i) 
  }
//   console.log(levels)
  return levels
}

// first level - 1 squared 1 

// second level 2 squared 4 

// third level 3 squared 9 

// // 1500 2  we can buy 750 cans 

// // we now calculate how many levels we delete the squares of consecutive numbers(no of cans on each level ) from it 


// 750 - 1 - 4 - 9 - 16 - 25 - 36 -













