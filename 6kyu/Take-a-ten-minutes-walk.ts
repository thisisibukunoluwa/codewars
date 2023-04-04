// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//version 1
// export function isValidWalk(walk: string[]) {
//   if (walk.length > 10 || walk.length < 10) return false 
                      
//    let start:number[] = [0,0]
//    for (let i = 0; i < walk.length; i++) {
//       if (walk[i] === 'n') {
//           start = [start[0],start[1] + 1]
//       }
//      else if (walk[i] === 's') {
//        start = [start[0],start[1] - 1]
//      } 
//      else if (walk[i] === 'w') {
//         start = [start[0] - 1,start[1]]
//      }
//      else if (walk [i] === 'e') {
//        start = [start[0] + 1,start[1]]
//      }
//    }
//     return start[0] === 0 && start [1] === 0 ? true : false
// }
export function isValidWalk(walk: string[]) {
    if (walk.length > 10 || walk.length < 10) return false 
    
  interface coords {
    [key:string]:number
  }
  
  let coordinates: coords = {
      x:0,
      y:0,
  }
  for (let i = 0; i < walk.length; i++) {
      switch(walk[i]) {
          case 'n': coordinates.y++
       break;
          case 's': coordinates.y--
       break;
          case 'w': coordinates.x--
       break;
          case 'e': coordinates.x++
       break;
    }
  }
  return coordinates.x === 0 && coordinates.y === 0 ? true : false
}