// Promises
console.log("synchronous 1")

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data back from the server");
    }, 3000)

    setTimeout(() => {
        reject("failed to get data from the server");
    }, 5000)
})

promise.then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

console.log("synchronous 2")

