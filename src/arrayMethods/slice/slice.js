

const array = ["name", "age", "gender", "status", 3, 5, 7]


// length - shows the total character length
console.log(array[array.length - 4])
 
// Array concat - adds/joins two different array content into one array
const names = ["chisom", "chigoziri", "ifeoma", "chilet", "chigbomkpa"]
const namesCon = names.concat(array)
const namesConRev = names.concat(array).reverse()
console.log("All names: ", namesCon);
console.log("All names in reverse: ", namesConRev);

// unshift - adds a single item to the front (index 0) of the array list


const ages = [23, 34, 44, 21, 17]
console.log(names.slice(0, 3));
console.log(names);


console.log("Names after slice: ", names.splice(0,3));
console.log("Names after splice: ", names);

console.log(Array.isArray(names));


const orbj = {

}

// Recheck
console.log(typeof (orbj) === 'object' );
