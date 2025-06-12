

const brothers = ['chigoziri', 'chilet']
const sisters = ['gbomkpa', 'ifeoma', 'chisom']

// Please note that when specifying the index,
// only the last index input will be shown in console log eg [0,1,2,3,4] will only display [4]
console.log("All items in the list: ", sisters)
console.log("The selected index 2: ", sisters[2])

// const lastBorn = sisters[0]
// console.log("Lastborn: ", lastBorn);

const allSiblings = brothers.concat(sisters)
console.log("Forward: ", allSiblings);
console.log("Reverse: ", allSiblings.reverse());
console.log("Slice: ", allSiblings.slice(0, 3));
// console.log("Splice: ", allSiblings.splice(0, 3));
console.log("After splice: ", allSiblings);
console.log("Unshift: ", allSiblings.unshift('vicky'), allSiblings);
console.log("Shift:", allSiblings.shift(), allSiblings);
console.log("Pop: ", allSiblings.pop(), allSiblings);
console.log("Push: ", allSiblings.push('chigoziri'), allSiblings);







//  Add    |  Remove
/* .unshift vs .shift ---> (add vs remove item at index 0)
   .push    vs .pop ---> (add vs remove item at last index)
   .reverse 
   .concat
*/
