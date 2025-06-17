// // create a callback function to add surname

// function first(call1) {
//   return "Chilet";
// }

// function second(call2) {
//   return `Okeke`;
// }

// function main(call1, call2) {
//   console.log(`My name is ${call1()} ${call2()}`);
// }

// main(first, second);


function first(call1) {
  return `Hello ${call1}`;
}

function second() {
  return `Okeke`;
}

function main(call1, call2) {
  console.log(`${first(call1)}, My name is ${call2()}`);
}

main('Chilet', second);


