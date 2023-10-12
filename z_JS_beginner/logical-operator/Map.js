console.log(1 || 0)
console.log("" || 0)
console.log(NaN || 0)
console.log(undefined || 0)
console.log('/******************************/')

const words = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
const map = new Map();

map.set(words[1], 1);
console.log(map.get(words[2])); // undefined
console.log(map.get(words[2]) || 0); // 0
console.log(map.get(words[1])) // 1

