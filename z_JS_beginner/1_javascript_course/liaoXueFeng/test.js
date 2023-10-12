function getFirstMatching(obj, value) {
    let result;
    Object.getOwnPropertyNames(obj).some(key => {
        if (obj[key] === value) {
            result = key;
            return true; // Stops the loop
        }
    });
    return result;
}
const x = { a: 1, b: 2, c: 3, d: 4, e: 4 };
console.log(getFirstMatching(x, 4)); // d
console.log(x);