// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let chars = {}

    for(let char of str){
        chars[char] = chars[char] + 1 || 1
    }

   return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b)
}


// using the for...in loop solution
// function maxChar(str){
//     let chars = {}
//     let max = 0
//     let maxChar = ''

//     for(let char of str){
//       chars[char] = chars[char] + 1 || 1
//     }

//     for(let char in chars){
//         if(chars[char] > max){
//             max = chars[char]
//             maxChar = char
//         }
//     }
//     return maxChar
// }

module.exports = maxChar;
