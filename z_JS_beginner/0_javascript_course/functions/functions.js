// functions
function addNumbers(num1, num2) {
    var addition = num1 + num2;
    return addition;
}

var res1 = addNumbers(10, 10);
var res2 = addNumbers(7, 3);

console.log(res1)
console.log(res2)

var person = {
    name: "Jake"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Mia".toUpperCase())
console.log("Mia".toLocaleLowerCase())
console.log("Mia".indexOf("i"))
