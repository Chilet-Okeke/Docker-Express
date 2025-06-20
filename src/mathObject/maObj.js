const Days = ["Sun","Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const Months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const news = [1, 2, 3, 4, 5, 6, 7];

const date = new Date();
const siteDate = date.getUTCDate()
const month = siteDate.getMonth();
const weekday = siteDate.getDay();
const dayyy = siteDate.getDate()

console.log(siteDate);
console.log(month);
console.log(weekday);

const dateFunct = function newdate(arr, dayr) {
  let monthIs, todayIs;
    // monthIs = arr[(Math.ceil(Math.random() * 11))];
    // todayIs = dayr[Math.ceil(Math.random()* 6)]
    monthIs = arr[month]
    todayIs = dayr[weekday]
  return `${todayIs}, ${monthIs}`;
};

console.log(`Today is ${dateFunct(Months, Days)}, ${dayyy}, ${siteDate.getFullYear()}`);


// console.log(dateFunct(weekday));
