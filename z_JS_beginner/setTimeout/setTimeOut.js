// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }






// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
// }







// for (var i = 0; i < 3; i++) {
//     setTimeout(function () {
//         console.log(i);
//         console.log("setTimeout")
//     }, 0);
//     console.log(i);
//     console.log("outside")
// }







// setTimeout(function () {
//     console.log(1)
// }, 0)

// console.log(2)










// for (var i = 0; i <= 5; i++) {
//     setTimeout(function () {
//         console.log(i)
//     }, i * 1000);

//     console.log("JavaScript");
// }











// function x() {
//     for (var i = 0; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000);
//         console.log("JavaScript");
//     }
// }
// x();















// function x() {
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, i * 1000);
//         console.log("JavaScript");
//     }
// }
// x();















function x() {
    for (var i = 0; i <= 5; i++) {
        function close(t) {
            setTimeout(function () {
                console.log(t)
            }, t * 1000);
        }
        close(i);
    }
    console.log("JavaScript");
}
x();