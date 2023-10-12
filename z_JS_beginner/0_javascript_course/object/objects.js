
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};

console.log(person)
console.log(person.firstName)
console.log(person.address)
console.log(Object.keys(person))
console.log("==========================")
console.log(Object.values(person))
console.log("==========================")
console.log(JSON.stringify(person))


