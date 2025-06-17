// // create a callback function to add surname

function first() {
  return "Chilet";
}

function second() {
  return "Okeke";
}

function main(call1, call2) {
  console.log(`My name is ${call1()} ${call2()}`);
}

main(first, second);
