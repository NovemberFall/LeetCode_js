// Function Statement
function a() {
    console.log("a called")
}






// Function Expression
var b = function () {
    console.log("b called")
}
b();







// Anonymous Function
// function() {

// }









// First Class Function
const sayHello = function () {
    return function () {
        console.log("Hello!");
    }
}
const myFunc = sayHello();
myFunc();
 // Hello!