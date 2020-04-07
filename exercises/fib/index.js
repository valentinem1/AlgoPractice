// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// for loop solution
function fib(n) {
    let arr = [0, 1]
    for(let i = 0; i <= n; i++){
    arr.push(arr[i] + arr[i + 1])
    }
    return arr[n]
}
console.log(fib(6))

// recursive solution
// if isn't smaller then 2 call fib(n - 1) + fib(n - 2)
// at the end it will be < 2 and we can add all the fib(n) together to get the result of n 
// fib(6) will produce 8 fib(n),  fib(4) will produce 3 fib(n)
// function fib(n) {
//     return n < 2 ? n : fib(n - 1) + fib(n - 2)
// }





module.exports = fib;
