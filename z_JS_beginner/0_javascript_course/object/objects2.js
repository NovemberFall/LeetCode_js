const person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    },
    toString: function () {
        return `Name: ${this.firstName} Age: ${this.age}`
    }
};

console.log(person.toString())

// person.lastName = "Ahmed";
person["lastName"] = "Ahmed"
console.log(person);

for (const p in person) {
    // console.log(p) // key
    console.log(person[p]) // val
}

console.log(Object.keys(person))
console.log(Object.values(person))

