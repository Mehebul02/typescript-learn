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
let b:string | number;

// Array 
let a:(number |string|boolean)[]=[]
b='33'
a.push(33,true)

// object
let c:{
    name:string,
    age:number,
    adult:boolean,
};
c={
    name:'Mehebul Alif',
    age:33,
    adult:true
}

let myFunc = (a:number, b:number, c:string='true')=>{
    // console.log(c);
    // console.log(`Hello ${a},${b}`);
    return a + b;
}
myFunc(2,3,'false ')