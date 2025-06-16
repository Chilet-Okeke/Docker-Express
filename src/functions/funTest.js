// Create a function to calculate the average score of students
// Store score in array and classes in object

let claSet = {
    A : [10, 23, 21, 15, 16, 19, 26, 23, 14, 17],
    B : [12, 14, 28, 9, 18, 23, 22, 15, 11, 17]
}
    
function classAverage(arr) {
    let i, classAverage
    let classTotal = 0
    for (i = 0; i < arr.length; i++) {
        
        classTotal += arr[i]
        classAverage = classTotal/arr.length
    }
    {
        // console.log("Class name: ");
        
        console.log("Class size: ", arr.length);
        // console.log(classTotal);
        console.log("Class average: ", classAverage);
        
    }
}
    
const classA = claSet.A
const classB = claSet.B

classAverage(classA)
classAverage(classB)