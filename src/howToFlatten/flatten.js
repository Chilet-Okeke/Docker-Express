/**
 * @param {number} depth - how deep to flatten
 * @param {Array} arr - the nested array
 * @return {Array} - flattened array
 */

var flat = function (depth, arr) {
    let result = [];

    if (depth === 0) {
        return arr;
    }

    // CHUNKING
    // Imagine the array is very large; this is to avoid freezing the browser

    arr.length = 1000000; // pretend the array is this big

    for (let i = 0; i < arr.length; i += 100) {
        const batch = [];

        const maxIterations = i / 10000;

        for (let j = i; j < arr.length && j < i + 100; j++) {
            const chunkedBatch = arr.slice(i, i + 100); // take a "slice" or piece
            batch.push(chunkedBatch);
        }

        // await new Promise((resolve) =>
        //     setTimeout(resolve, Math.max(4000, Math.pow(3, i / 100)))
        // );
    }
}    
