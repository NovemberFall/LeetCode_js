var a = 'apple';
function print() {
    console.log(a);
    var a = 'strawberry';
    console.log(fn());
    function fn() {
        return a;
    }
}

print();