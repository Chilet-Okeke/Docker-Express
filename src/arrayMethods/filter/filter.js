// Filter an array

const arr = [
  { name: "chilet", age: 25, position: "4th" },
  { name: "ifeoma", age: 26, position: "3rd" },
  { name: "gbomkpa", age: 23, position: "5th" },
  { name: "chisom", age: 30, position: "1st" },
  { name: "chigoziri", age: 28, position: "2nd" },
];

const filterAge = arr.filter(function (filteredArr) {
    return filteredArr.age <= 25;
});

console.log(filterAge);

const filterPosition = arr.filter(function (filterPos) {
    return filterPos.position === '3rd'
}
)

console.log(filterPosition);


const Elders = arr.filter(function (filterElder) {
    return filterElder.age > 25
}
)

console.log(Elders);
