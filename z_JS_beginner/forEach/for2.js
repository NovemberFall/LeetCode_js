const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])
    console.log(copyItems[i])
}

// after
items.forEach(function (item) {
    copyItems.push(item)
    console.log(item)
})
