function* makeRangeIterator(start = 0, end = 100, step = 1) {
    let iterationCount = 0;
    for (let i = start; i < end; i += step) {
        iterationCount++;
        yield i;
    }
}

var gen_obj = makeRangeIterator();
console.log(gen_obj.next())
console.log(gen_obj.next())
console.log(gen_obj.next())
console.log(gen_obj.next())
console.log(gen_obj.next())
console.log(gen_obj.next())

/**
{ value: 0, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
 */