'use strict'

// function abs(x) {
//     if (typeof x !== 'number') {
//         throw 'Not a number';
//     }
//     if (x >= 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }
// abs('x');


//////////////////

/* 
function foo(x) {
    console.log('x = ' + x);
    for (var i = 0; i < arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]);
    }
}
foo(10, 20, 30);
 */

////////////




function foo1(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo1(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo1(1);
// 结果:
// a = 1
// b = undefined
// Array []