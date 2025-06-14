// Functions need two things
// Declaration and invocation(Calling)

let greeting = ["hello world", "I am chilet", "I am 25"];

// Function declaration
function greet() {
  let i;
  for (i = 0; i < 6; i++) {
    console.log("Counting up from 0:", i);
    console.log(greeting[i]);
  }
}


function greetings() {
    let a;
    for (a = 5; a > -1 ; a--) {
        console.log("Counting down from 5:", a);
        console.log(greeting[a]);
        
        
    }
}

greet()
greetings()
// Funtion invocation


