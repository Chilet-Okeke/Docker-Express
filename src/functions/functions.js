// Functions need two things
// Declaration and invocation(Calling)

let greeting = ["hello", "I am chilet", "I am 25"];
let add = ["world", "okeke", "years old"]
const newArray = []

// Function declaration
function greet() {
  let i;
  for (i = 0; i < 3; i++) {
    console.log("Counting up from 0:", i);
      console.log(greeting[i], add[i]);
      
  }
}


function greetings() {
    let a;
    for (a = 2; a > -1 ; a--) {
        console.log("Counting down from 2:", a);
        // combine the two arrays via index while maintaining separate arrays
        console.log(greeting[a], add[a]);
        // combine the two arrays via index literally
        newArray.push(`${greeting[a]} ${add[a]}`)
    }
}




greet()
greetings()

// testing for combined array
console.log(newArray);

