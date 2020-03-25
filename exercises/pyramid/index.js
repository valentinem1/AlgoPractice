// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // find the mid point of the array
    let midpoint = Math.floor((2 * n - 1) / 2)
    // iterating through row
    for(let row = 0; row < n; row++){
        // create an empty string to add '#' or ' ' to it
        let level = ''
        // check if the midpoint - row is < or = to column
        // and check if the midpoint + row is > = to column
        // if yes add '#' to level string
        // else add ' ' to level string
        for(let column = 0; column < 2 * n - 1; column++){
            midpoint - row <= column && midpoint + row >= column ? level += '#' : level += ' '
        }
        console.log(level)
    }
}

// recursive solution
// function pyramid(n, row=0, level='') {
//     // find the mid point of the array
//     let midpoint = Math.floor((2 * n - 1) / 2)
//     // check if n === row if yes return the function
//     // if not move on to the next if statement
//     if(n === row){
//         return
//     }
//     // check if level.length === the number of column in this case (2 * n - 1)
//     // if yes console.log the string level
//     // if not call the pyramid function again to increment the row
//     if(level.length === (2 * n - 1)){
//         console.log(level)
//         return pyramid(n, row + 1)
//     }
//     // check if midpoint - row is < or = to the string level length 
//     // and if midpoint + row is > or = to the string level lenth
//     // if yes add '#' to the level string
//     if(midpoint - row <= level.length && midpoint + row >= level.length){
//         level += '#'
//     // if not add ' ' to the level string
//     }else{
//         level += ' '
//     }
//     // finally call the function again to go through the same process until we meet n === row
//     pyramid(n, row, level)
// }

module.exports = pyramid;
