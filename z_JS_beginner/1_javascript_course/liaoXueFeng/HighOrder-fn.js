'use strict';

function add(x, y, f) {
    return f(x) + f(y);
}

var x = add(-5, 6, Math.abs); // 11
console.log(x);


console.log("*************************************");
console.log("*************************************");


// map/reduce
function pow(x) {
    return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var results = arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
console.log(results);


//reduce
var arr = [1, 3, 5, 7, 9];
var res = arr.reduce(function (x, y) {
    return x + y;
}); // 25
console.log(res);

console.log("*************************************");

//要把[1, 3, 5, 7, 9]变换成整数13579，reduce()也能派上用场：
var arr = [1, 3, 5, 7, 9];
var res1 = arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579
console.log(res1);