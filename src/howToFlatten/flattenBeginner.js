function flatten(arr, depth) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item) && depth > 0) {
            // Recursively flatten
            result.push(...flatten(item, depth - 1));
        } else {
            result.push(item);
        }
    }

    return result;
}
