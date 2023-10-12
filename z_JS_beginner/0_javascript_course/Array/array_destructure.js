// Arrays Destructing
var names = ["Alex", "Jamila", "Joe", "Mia", "Jake", "Tim"];

const [alex, jamila, joe, ...rest] = names;
console.log(alex)
console.log(jamila)
console.log(joe)
console.log(rest)

