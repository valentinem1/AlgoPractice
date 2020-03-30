// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// RegEx solution
function vowels(str) {
    // checking if str match any letters in the array [aeiou] 
    // g = global match i = case insensitive
    // then check if it's null it means no match so = 0
    // if not null we return the length of str match
    let matching = str.match(/[aeiou]/gi)
    return matching ? matching.length : 0
}

// for loop iteration solution
// function vowels(str){
//     // declare empty array where we gonna push any matching letters
//     let newArr = []
//     // declare an array with the vowels letter to use as a checking
//     const checker = ['a', 'e', 'i', 'o', 'u']

//     // iterate through the string and check if check includes the letter
//     // if yes push the letter in the array
//     for(let char of str.toLowerCase()){
//         if(checker.includes(char)){
//         newArr.push(char)
//         }
//     }
//     // return the length of the array to get the number of vowels letters
//     return newArr.length
// }

module.exports = vowels;
