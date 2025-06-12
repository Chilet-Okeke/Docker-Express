/* 
Boolean: yes or no, true or false
Null: empty {} []
Undefined: []
object: {}
array/List:[]
functions: ()
String: "My name is"
Integer: 12
ES6:
*/


let array = 
    ["don", "name", "age"];

console.log("console log for array: ", array)
// object = 15;
// console.log(object);

// let anotherObject = ""
// console.log(anotherObject);



const object = () => ({
    Name : {
        forChilet: ["name", "Chilet"],
        forDon: ["name", "don"],
        forUche: ["name", "uche"]
    },
    Age : {
        forChilet: ["name", "Chilet"],
        forDon: ["name", "don"],
        forUche: ["name", "uche"]
    },
    Food : {
        forChilet: ["name", "Chilet"],
        forDon: ["name", "don"],
        forUche: ["name", "uche"]
    },
    Ara : {
        forChilet: {"Chilet" : "25 years old"},
        forDon: ["name", "don"],
        forUche: ["name", "uche"]
    }
});

const object2 = object()
// console.log(object)

    
// console.log(object.Age)
// console.log(object.Food)
// console.log("console log for Chilet: ", object.Name.forChilet)
// console.log(object2)


const array2 = [object2, "new", 15]
console.log(array2)
console.log(array.Test_array1)