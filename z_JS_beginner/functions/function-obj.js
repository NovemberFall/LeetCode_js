function bark() {
    console.log('Woof!');
}

bark.animal = 'dog';
console.log(bark.animal)
// totally fine, since function is an object
