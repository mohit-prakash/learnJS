// console.log("Hello World");
// var a=4,b=6;
// s=a+b;
// console.log(`Sum of ${a} and ${b} is ${s}`);

// let num=5,i=1;
// while(i<=10){
//     console.log(`${num} * ${i} = ${num*i}`);
//     i++;
// }

// let num=6;
// let user="Mohit";
// console.log(typeof user+" "+ typeof num);

// let a="78";
// let b="89 mps";
// console.log(typeof a);
// console.log(typeof b);
// a=Number(a);
// console.log(typeof a);
//     // b=Number(b);
// console.log(typeof b);
// console.log(a+b);
// b=parseInt(b);
// console.log(a+b);

//type conversion and coercion
let x;
console.log(x, typeof x);
x=2;
console.log(x, typeof x);
x=2+"";
console.log(x, typeof x);
// x=x-1;
// console.log(x, typeof x); //Javascript based on operator it will convert string, number and boolean
// x=!x;
// console.log(x, typeof x); //any number gives true for boolean except 0(zero) and null and undefined. These all are falsy values.
// console.log(Boolean(9));
// console.log(Boolean(-9));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean("Mohit"));

x=x+2; //now it will concatenate and make it as string
console.log(x,typeof x);

//but if we do add operation, use unary operator
x=+x+2;
console.log(x,typeof x);

let n1=true;
let n2=true;
let n=n1+n2; //both n1 and n2 takes value as 1 //0-false and 1-true //based on operator it will convert
console.log(n,typeof n);

let num=4;
// let sq= Math.pow(num,2);
sq=4**2
cu=4**3

console.log(sq," : ",cu);

//relational operator
let m=5;
let p=7;

console.log(m>=p);

let m1="Pen";
let p1="Book";
let q1="Pencil";
console.log(m1>p1); //start with 1st character P is greater than B
console.log(m1>q1);// false.

let x1="2";
let y1=3;
console.log(x1<=y1);//It will convert string to number

y1=2;
console.log(x1==y1);//true, only compare value will convert into proper format
console.log(x1===y1);//false, strict comparison It will not convert and compare both value and datatype.
//always use ===