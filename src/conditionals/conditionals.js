// Working with conditionals
// If/Else statements
// else if statements
// ! - changes the value statement from true to false
// Example - if (num) is true then run the code
//  if (!num) is false then run the code

// !=, !==, ==, ===, >=, <=, <, >

// const num = 56;
// const num2 = 56;

// if (num2 > num) {
//   console.log("num2 is greater than num");
// } else if (num2 === num) {
//   console.log("num2 is equal to num");
// } else {
//   console.log("num is greater than num2");
// }

function numTest(numA, numB) {
  if (numA >= numB) {
    const numSet = [numA, numB];
    console.log("The number set is:", numSet, "This statement is true");
  } else if ((numA === numB)) {
    const numSet = [numA, numB];
    console.log("The number set is:", numSet, "This statement is equal");
  } else {
    const numSet = [numA, numB];
    return console.log(
      "The number set is: ",
      numSet,
      "This statement is false"
    );
  }
}

numTest(89, 35);
numTest(17, 23);


// const funct = (numN, numT) => {
//     if (numN > numT) {
//         console.log(numN, "is greater than", numT)
//     }
//     else {
//         return {
//             console.log(numN, "is not greater than", numT);
//         }
//     }
// }


// console.log(funct(5,3));
