var Dog_prototype = {
    speak: function () {
        console.log('bark!');
    }
};

var rex = {
    name: 'Rex',
    __proto__: Dog_prototype
}
// Manually setting the prototype chain -- not universal
rex.speak();



// We can add or remove properties at runtime
rex['favoriteToy'] = 'squeaky ball'; // could write this as rex.favoriteToy
console.log(rex);