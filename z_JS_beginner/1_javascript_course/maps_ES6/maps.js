const numbers = [0, 1, 2, 3, 4];

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    newNumbers.push(numbers[i] * 10);
}

// console.log(numbers);
// console.log(newNumbers);


numbers.map((num) => { num * 10 })


