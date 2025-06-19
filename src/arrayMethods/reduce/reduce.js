// Reduce works best with object index within the array and not singular arrays

const arr = [
  { name: "chilet", age: 25, position: "4th" },
  { name: "ifeoma", age: 26, position: "3rd" },
  { name: "gbomkpa", age: 23, position: "5th" },
  { name: "chisom", age: 30, position: "1st" },
  { name: "chigoziri", age: 28, position: "2nd" },
];

const findAge = arr.find(function (findingAge) {
  return findingAge.age <= 30;
});

// console.log(findAge);

const reduction = arr.reduce((acc, crr) => {
  const { age } = crr;
  acc = acc + age;

  return acc;
}, 0);

// console.log(reduction);

const numbers = [1, 2, 345, 67, 86, 84];

function adder(numbers) {
  let i;
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// console.log(adder(numbers));

const numReduction = numbers.reduce(function (acc, crr) {
  const { numbers } = crr;
  acc = acc + numbers;
  return acc;
}, 0);

// console.log(numReduction);

const numbers2 = [
  { id1: 342, id2: 5345, id3: 464, id4: 686, id5: 88 },
  { id1: 34, id2: 534, id3: 46, id4: 68, id5: 8 },
  { id1: 3, id2: 53, id3: 4, id4: 6, id5: 0 },
];

const blessing = numbers2.reduce(function (acc, crr) {
  const { id5 } = crr;
  acc = acc + id5;
  return acc;
}, 0);

console.log(blessing);
