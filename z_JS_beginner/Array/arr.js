let fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2



// Loop over an Array
fruits.forEach(
    function (item, index, array) {
        console.log(item, index)
    }
)
// Apple 0
// Banana 1



// Add an item to the end of an Array
let newLength = fruits.push('Orange')
console.log(newLength, fruits)
// 3 ["Apple", "Banana", "Orange"]



//Remove an item from the end of an Array
let last = fruits.pop() // remove Orange (from the end)
console.log(last, fruits)
// Orange  ["Apple", "Banana"]



//Remove an item from the beginning of an Array
let first = fruits.shift() // remove Apple from the front
console.log(fruits)
// ["Banana"]



//Add an item to the beginning of an Array
fruits.unshift('Strawberry') // add to the front
console.log(fruits)
// ["Strawberry", "Banana"]



//Find the index of an item in the Array
fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]
let pos = fruits.indexOf('Banana')
console.log(pos)
// 1



//Remove an item by index position
let removedItem = fruits.splice(pos, 1) // this is how to remove an item
console.log(fruits)
// ["Strawberry", "Mango"]



// Copy an Array  # shallowCopy
let shallowCopy = fruits.slice() // this is how to make a copy
console.log(shallowCopy)
// ["Strawberry", "Mango"]




