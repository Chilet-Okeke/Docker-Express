// Find travels down from the first index to the last
// What it does is to go from index 0 to last index and return
//  the first item that matches the conditions set

const arr = [
  { name: "chilet", age: 25, position: "4th" },
  { name: "ifeoma", age: 26, position: "3rd" },
  { name: "gbomkpa", age: 23, position: "5th" },
  { name: "chisom", age: 30, position: "1st" },
  { name: "chigoziri", age: 28, position: "2nd" },
];

const findAge = arr.find(function (findingAge) {
    return findingAge.age <= 30
})

// 25 is the output because it is the first item that matches the conditions

console.log(findAge);

const youngest = arr.find(function (youngestAge) {
    return youngestAge.age < 30
})

console.log(youngest);
// 25 is the output because it is the first item that matches the conditions


const namer = arr.find(function (foundName) {
    return foundName.name === 'chisom'
})

console.log("Found name:", namer.name);
// name is recommended when locating unique items because there will be
// low conflicts in search conditions which may provide incorrect results