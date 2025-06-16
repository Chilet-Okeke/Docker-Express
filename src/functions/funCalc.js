let chiletSpend = [15, 23, 50, 45];
let ifeomaSpend = [34, 50, 45, 80, 65];
let gbomkpaSpend = [75, 30, 100, 40];

function sumTotal(arr) {
    let total = 0
    let i;
    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    if (total > 250) {
        console.log("You've exceeded your 250 budget with a total spend of", total);
        return total
        
    } console.log("Your purchase is within the 250 budget with a total spend of", total);
    
    {
        return total
    }
}

const chilet = sumTotal(chiletSpend);
const ifeoma = sumTotal(ifeomaSpend)
const gbomkpa = sumTotal(gbomkpaSpend)
const random = sumTotal([23,345,664,664,900,9000])

const table = {
    chiletSpend: chilet,
    ifeomaSpend: ifeoma,
    gbomkpaSpend: gbomkpa,
    randomSpend: random
}

// console.log({
//     chiletTotal: chilet,
//     ifeomaTotal: ifeoma,
//     gbomkpaTotal: gbomkpa
// });


console.log(table);
