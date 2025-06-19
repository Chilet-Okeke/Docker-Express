const list = [
  {weekday: "Monday", day: 1},
  { weekday: "Tuesday", day: 2 },
  { weekdays: "Wednesday", day: 3 },
  { weekdays: "Thursday", day: 4 },
];


const reduceList = list.reduce(function (acc, crr) {
    const { day } = crr
    acc = acc + day   
    return acc
}, 0)

console.log(reduceList);
