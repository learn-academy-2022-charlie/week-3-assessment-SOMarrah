// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//the pattern starts 1. it looks at the previous index and adds to it. (1 + 1 =2), (1 + 2 =3), (2 + 3 =4), etc
//
describe("fibSeq", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    const fibLength1 = 6
    // Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength2 = 10
    // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    expect(fibSeq(1)).toEqual("Please enter a number greater than 2.")
    expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//Got RED
// FAIL  ./code-challenges.test.js
//   fibSeq
//     ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//
//   ● fibSeq › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
//
//     ReferenceError: fibSeq is not defined
// b) Create the function that makes the test pass.

//create a function named fibSeq
//the function takes a number greater than 2 as an input
//the expected output is an array of numbers
//start with a conditional to make sure number is greater than 2-> return please enter a number greater than 2 to user
//declare a new variable as an array to store the new data
//use a for loop to create the length of the array based on the input of the user. maybe the .push() method. I want to push the current value in the index + the previous value in the index?
//the fib sequence is the current number + previous number -- current index value + previous index value
//start the array at 1 , 1 because it is known. push index 0 + index 1, move indexes by 1.

// const fibSeq = (number) => {
//   let fibArr = [1 , 1]
//   let fibNum = 0
//   if(number < 2){
//     return "Please enter a number greater than 2."
//   }else{
//     //start at i = 2 because i already have the first 2 index planned. couldnt figure out how to get 1, 1 for the start of the array with nothing in it
//     for(i = 2; i < number+1; i++){
//       //this pushes the value at index fibnum + index fibnum+1 to the end of the array.
//       // fibArr.push(fibArr[fibNum]+fibArr[fibNum+1])
//       //this increases the value inside fibnum
//       // fibNum += 1
//       //on the next iteration it moves to index 1 and 2 added together.
//       i > 2 ? fibArr.push(fibArr[i-2] + fibArr[i-3]): fibArr
//     }
//   }
//   return fibArr
// }
//refactor below -->




//to refactor this I wouldn't know where to start. my gut tells me some sort of forEach method would work. maybe use a ternary operator like i did below to get rid of the if statement

const fibSeq = (number) => {
  let fibArr = [1 , 1]
    for(i = 2; i < number+1; i++){
      i > 2 ? fibArr.push(fibArr[i-2] + fibArr[i-3]): fibArr
    }
    return fibArr
  }

//Got Green!
// PASS  ./code-challenges.test.js
//   fibSeq
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("smOdd", () => {

  it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    // Expected output: [-9, 7, 9, 199]

    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // Expected output: [-823, 7, 23]
    expect(smOdd(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(smOdd(fullArr2)).toEqual([-823, 7, 23])
  })
})

//Got RED
// FAIL  ./code-challenges.test.js
//   fibSeq
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//   smOdd
//     ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//
//   ● smOdd › takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//
//     ReferenceError: smOdd is not defined

// b) Create the function that makes the test pass.
//create a function named smOdd (small odds)
//it takes in an array for an input
//it outputs a smaller version of the array with only odd numbers sorted from least to greatest.
//built in method to .filter with a type of and modulo that doesnt equal 0 to return the required data of only odd numbers, and .sort() to then sort them

//i started with writing in-line because it did not seem that complex to start. i used yarn jest to constantly check the values I was returning:
// Array [
//    -   -9,
//    +   9,
//    +   "7",
//    +   true,
//        7,
//    -   9,
//        199,
//      ]
//My first result showed me that it was returning strings, and booleans so I knew I had to add a typeof checker to only get numbers.
// Array [
//     -   -9,
//     -   7,
//         9,
//     +   7,
//         199,
//     +   -9,
//       ]
//then i knew I had too reverse the sorting feature from smallest to biggest
const smOdd = (array) => array.sort((b, a) => b - a).filter(value => typeof value === "number" && value%2 !== 0)

//Got Green - this was kind of fast so I tried refactoring below! What if NaN was included in the array?
// PASS  ./code-challenges.test.js
//   fibSeq
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//   smOdd
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest.
//
// Test Suites: 1 passed, 1 total
//for refactoring maybe I could add something that turns the string numbers into actual numbers? just a thought. A little research showed me parsint() - wonder if it would work on inside the filter.

// const smOdd = (array) => array.sort((b, a) => b - a).map(value => parseInt(value, 10))
// [
//    -9,   0, NaN, NaN,   4,
//     7,   7,   8,   9, NaN,
//   199, NaN
// ]
//this was the best result I could get I know I can then run filter on smOdd but I wanted to get them all in one line if possible.
//I used parseInt(value, 10) - 10 because radix changes because map has 3 values it passes through (index) which can change the actual radix of the parseInt? I'm not too familiar with it but it was something like how to computer reads numbers
//well refactored I got there! it is longer but i think more flexible? it converts any strings of numbers into numbers, and gets rid of all NaN by using a filter for any Booleans
// const smOdd = (array) => {
//   let sorted = array.sort((b, a) => b - a).map(value => parseInt(value, 10))
//   sorted = sorted.filter(value => typeof value === "number" && value%2 !== 0)
//   return sorted.filter(Boolean)
// }
//to refactor the last attempt i think it might be possible to combine map, and filter into one line

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.



describe("funkyArr", () => {

  it("takes in an array and returns an array of the accumulating sum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    // Excpected output: [2, 6, 51, 60]

    const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

    const numbersToAdd3 = []
    // Expected output: []
    expect(funkyArr(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(funkyArr(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(funkyArr(numbersToAdd3)).toEqual([])
  })
})
//got RED
// AIL  ./code-challenges.test.js
//   fibSeq
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
//   smOdd
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)
//   funkyArr
//     ✕ takes in an array and returns an array of the accumulating sum
//
//   ● funkyArr › takes in an array and returns an array of the accumulating sum
//
//     ReferenceError: funkyArr is not defined
// b) Create the function that makes the test pass.

//create a function called funkyArr
//it takes an array of numbers as an input
//it "accumulates" the number starting at 0 index and adds it together in the next index ->
//expected output is an array of the same length with changed values
//this feels similar to what I did in the fibonacci challenge maybe a for loop?
//i think forEach might work here since the full array is already laid out or a .map? value + value[i-1]?
//for each uses array, so array at index -1 would be the previous value? at index 0 it will break
//maybe a ternary operator? lets try

// const funkyArr = (array) => {
//   return array.map((value, index, array) => value + array[index-1])
// }
// const funkyArr = (array) => {
//   return array.map((value, index, array) =>  index !== 0 ? value + array[index]: value)
// }
//this was interesting because it takes the unaltered array values and adds them. but each number needs to be altered then added - so a for loop might be best unless my formula is wrong. I could also be not completely understanding what is happening under the hood of the .map or the .forEach and unsure how to call the "new" value to add it to the current value.


//i like being able to go back to for loops because it makes things a lot easier to understand
let funkyArr = (array) => {
  let newArr = []
    for(i = 0; i < array.length; i++){
      //it was a lot of fun trying out ternary
      i !== 0 ? newArr.push(array[i]+ newArr[i-1]): newArr.push(array[i])
    }
      return newArr
  }
  //got GREEN!
//   PASS  ./code-challenges.test.js
//   fibSeq
//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
//   smOdd
//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (2 ms)
//   funkyArr
//     ✓ takes in an array and returns an array of the accumulating sum (1 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
