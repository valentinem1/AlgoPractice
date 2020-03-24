// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let charsA = helperCharMap(stringA)
    let charsB = helperCharMap(stringB)

    // checking if the keys are matching to see if we have the same letters
    if(Object.keys(charsA).length !== Object.keys(charsB).length){
        return false
    }
    // checking if the values(number of time letter is used) are matching if not it is not an anagram
    for(let char in charsA){
        if(charsA[char] !== charsB[char]){
            return false
        }
    }
    // finally if both if statements are false it means we have an anagram
    return true
}

function helperCharMap(str) {
    let charMap = {}
    // turn string into an object with key being the letter and value being the number of time the letter is used
    // ex: "hello!" => {
    //     h: 1,
    //     e: 1,
    //     l: 2,
    //     o: 1
    // }
    // with regex I'm getting rid of spacing and punctuation marks
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}


// function anagrams(stringA, stringB) {
//     let str1 = cleanStr(stringA)
//     let str2 = cleanStr(stringB)

//     // checking if sorted string matches other sorted string
//     // if equal it's an anagram
//     return str1 === str2

// // getting rid of spacing and punctuationg with regex, lowercasing the string, 
// // splitting to turn into an array, sort the array, and joining it back to a string
// function cleanStr(str) {
//     return str.replace(/[^\w]/g, '').toLocaleLowerCase().split('').sort().join('')
// }

module.exports = anagrams;
