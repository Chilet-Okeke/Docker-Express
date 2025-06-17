// forEach --> does not return new array

const arr = [
  { name: "chilet", age: 25, position: "4th" },
  { name: "ifeoma", age: 26, position: "3rd" },
  { name: "gbomkpa", age: 23, position: "5th" },
];

// callback function

function siblings(allSiblings) {
    console.log(allSiblings.name);
}
arr.forEach(siblings)


// Anonymous method
arr.forEach(function (sibs) {
    console.log(sibs.age);
})

// Using Arrow functions

const sibling = (allSibling) => {
    console.log(allSibling.position);   
}
arr.forEach(sibling)

arr.forEach((another) => {
    console.log(another.name);
}
)