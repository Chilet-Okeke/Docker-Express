let chiletSpend = [15, 23, 50, 45];
let ifeomaSpend = [34, 50, 45, 80, 65];
let gbomkpaSpend = [75, 30, 100, 40];

function sumTotal(arr) {
    let total = 0
    let i;
    for (i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    {
        return total
    }
}

const chilet = sumTotal(chiletSpend);
const ifeoma = sumTotal(ifeomaSpend)
const gbomkpa = sumTotal(gbomkpaSpend)

console.log({
    chiletTotal: chilet,
    ifeomaTotal: ifeoma,
    gbomkpaTotal: gbomkpa
});


