//Destructuring of array

let arr=[2,3,4,5,6];
//let [a,b,c,d,e] = arr;// a=2,b=3,c=4,d=5 and e=6

//we can skip assigning any value
// let [a,b,,d,e]=arr;
let [a,b,,,e]=arr;
console.log(e);

//swaping
let x=6;
let y=5;

[x,y]=[y,x];
console.log(x,y);

//split() give an array of elements
let str="My name is Mohit Prakash and I am a Java Developer";
let arr1=str.split(' ')//based on space it will split
// let [m,n,o,p,q,r,s,t,u,v,w]=arr1;
// console.log(m,n,w);
//use ...items
let [m,n,,...p]=arr1;//p is an array an get all remaining values
console.log(m,n,p);
console.log(p[0]);