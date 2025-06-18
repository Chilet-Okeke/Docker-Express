// map --> returns a new array
//  does no change the index size of the array

const arr = [
  { name: "chilet", age: 25, position: "4th" },
  { name: "ifeoma", age: 26, position: "3rd" },
  { name: "gbomkpa", age: 23, position: "5th" },
  { name: "chisom", age: 30, position: "1st" },
  { name: "chigoziri", age: 28, position: "2nd" },
];

const ages = arr.map(function (mapping) {
  // console.log(mapping);
  return mapping.name.toUpperCase();
});

console.log(ages);

// const newObject = arr.map(function (newAdd) {
//   return {
//     newName: newAdd.name,
//     RetirementAge: newAdd.age + 40,
//     nextPosition: newAdd.position,
//   };
// });

// console.log(newObject);

const another = arr.map(function (anArr) {
    return {
        NewName: anArr.name,
        previousAge: anArr.age - 5,
        NextAge: anArr.age + 5
    }
}
)

console.log(another);
