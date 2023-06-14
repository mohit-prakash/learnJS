//Arrow function
// let greet = function(){
//     console.log("Hello world");
//     return 1;
// }

let greet = ()=>{
    console.log("Hello World");
    return 2;
}
console.log(greet());

//If we have only one line no need to use brackets and no need to use return as well.
let sum=(num1,num2)=> num1+num2;
console.log(sum(4,5));