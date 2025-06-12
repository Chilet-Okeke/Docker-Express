
const currentYear = 2025
// let YOB;



function calculateAge(YOB) {
  
  let age = (currentYear - YOB)
//   console.log("Your age is: " + age)
    return "You are " + age + " years old"
}

// YOB = 1995
console.log(calculateAge(1995))

// YOB = 2000
console.log(calculateAge(2000))