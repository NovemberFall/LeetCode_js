const arr = [5, 1, 3, 2, 6];

// Double - [10, 2, 6, 4, 12]
function double(x) {
    return x * 2;
}
// Triple - [15, 3, 9, 6, 18]
function triple(x) {
    return x * 3;
}
// Binary - ["101", "1", "11", "10", "110"]
function binary(x) {
    return x.toString(2);
}
/////////////////////////
const output = arr.map(double)
console.log(output)

const output1 = arr.map(triple)
console.log(output1)

const output2 = arr.map(binary)
console.log(output2)

const out3 = arr.map(e => {
    return e * e;
})
console.log(out3)
