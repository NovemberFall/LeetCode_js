function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
};

var x, y;
x = mycar.make; // x gets the value "Honda"
console.log(x)

myFunc(mycar);
y = mycar.make; // y gets the value "Toyota"
// (the make property was changed by the function)
console.log(y)
