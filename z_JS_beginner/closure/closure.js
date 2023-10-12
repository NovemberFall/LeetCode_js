function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');
// newFunction()











// function outerFunction(outerVariable) {
//     fetch('url').then(() => {
//         console.log(outerVariable)
//     })
// }

// const newFunction = outerFunction('outside')
// newFunction('inner')