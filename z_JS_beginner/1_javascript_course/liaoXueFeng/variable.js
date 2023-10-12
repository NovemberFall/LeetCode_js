'use strict';

// var course = 'Learn JavaScript';
// console.log(course); // 'Learn JavaScript'
// console.log(window.course); // 'Learn JavaScript'


var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
console.log('x = ' + x + ', y = ' + y + ', z = ' + z);





//解构赋值
var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var { name, age, passport } = person;
// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);
