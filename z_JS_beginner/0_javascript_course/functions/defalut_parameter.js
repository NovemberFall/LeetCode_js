// Functions Default Paramter
const getBrand = (brand = "Hello") => ({
    brand: brand,
    website: `www.${brand.toLowerCase()}.com`
})

const brand = getBrand();
console.log(JSON.stringify(brand, null, 1))
