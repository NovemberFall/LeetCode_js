// Functions
const getBrand = (brand) => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
})

const add = (a, b) => a + b;
const calculate = (a, b, sign) => {
    switch (sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
    }
}
function add(a, b) {
    return
}

const brand = getBrand("Nike");
console.log(JSON.stringify(brand, null, 1))

