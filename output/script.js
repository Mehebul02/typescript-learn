"use strict";
// function sum(a:number,b:number){
//     return a+b
// }
// console.log(sum(33,44));
// const bookName=['Bangla','Python','Javascript',44]
// console.log(bookName);
// bookName.push('Object Oriente Programming Language',33)
// let person ={
//     name:'Mehebul Alif',
//     age:21,
//     isWebDeveloper:true
// }
// person.name='33'
// normal variable 
let b;
// Array 
let a = [];
b = '33';
a.push(33, true);
// object
let c;
c = {
    name: 'Mehebul Alif',
    age: 33,
    adult: true
};
let myFunc = (a, b, c = 'true') => {
    // console.log(c);
    // console.log(`Hello ${a},${b}`);
    return a + b;
};
myFunc(2, 3, 'false ');
const userDetails = (id, user) => {
    console.log(`User id is ${id},name is ${user.name} and age is ${user.age}`);
};
// calculator
let calculator;
calculator = (a, b, c) => {
    if (c = 'add') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculator(3, 5, 'add'));
