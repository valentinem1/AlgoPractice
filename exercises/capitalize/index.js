// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // helper array
    let stringArr = []

    // for each character of the string I take the first one and capitalize it
    // and then add the rest of the string to it
    // and push into the empty array
    for(let word of str.split(/\s/)){
        stringArr.push(word[0].toUpperCase() + word.slice(1))
    }
    // I then join the words together in the array with a space
    return stringArr.join(' ')
}


function capitalize(str) {
    // upper case the first letter of the string
    let newStr = str[0].toUpperCase()
  
    // iterating through the string starting at index 1 
    // checking if the letter on the left of letter we're iterating through is a space
    // if yes upper case it and add it to the new string
    // if not add the letter to the new string
    for(let i = 1; i < str.length; i++){
     if(str[i - 1] === ' '){
       newStr += str[i].toUpperCase()
     }else{
       newStr += str[i]
     }
    }
    return newStr
}

module.exports = capitalize;
