//function expression
//js treat function as object
let add = function(num1,num2){
    return num1+num2;
}
let s=add(4,5);
console.log(s);

let sum=add;
console.log(sum(7,8));
console.log(sum);