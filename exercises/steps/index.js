// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // iterate through the row
    for(let row = 0; row < n; row++){
        // declare an empty string to add '#' to it
        let step = ''
        // iterate through column
        for(let column = 0; column < n; column++){
            // check if column is = or < then row
            // if yes print add '#' to step else add a space
            // loops end when column is more then row
            column <= row ? step += '#' : step += ' '
        }
        console.log(step)
    }
}

// recursion solution
// function steps(n, row = 0, step = '') {
//     // first check if n === row if yes return the function
//     // if not move on to the next if statement
//     if(n === row){
//         return
//     }

//     // check if n === step.length if yes console log string step
//     // and call the function again to increment the row
//     // by incrementing the row by one we are jumping to the next row
//     // if not true move on to the next if statement
//     if(n === step.length){
//         console.log(step)
//         return steps(n, row + 1)
//     }

//     // check if step.lenth is = or < then row, if yes add '#' to step
//     // if not add a space
//     step.length <= row ? step += '#' : step += ' '

//     // we then call the function again to go through the same process
//     // until we meet n === row
//     steps(n, row, step)
// }

module.exports = steps;
