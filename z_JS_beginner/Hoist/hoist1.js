var a = 'apple'
function fighting() {
    console.log(a);
    var a = 'angel';
    console.log(fn())
    function fn() {
        return a;
    }
}
fighting();