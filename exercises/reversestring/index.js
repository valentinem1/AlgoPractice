// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution with .reverse()
// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// solution with for loop
function reverse(str){
    let reversed = ""
    for(let i = str.length - 1; i >=0; i--){
        reversed += str[i]
    }
    return reversed
}

module.exports = reverse;
