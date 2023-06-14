//local, global variable and default value
console.log("--------------Local & Global Variable----------------");
function greet(u){
    console.log("local variable: "+u);
    console.log("Global Variable: "+user);
}
user="Mohit"; // global variable defined before function call
greet("Mojo");
greet(8);

console.log("------------------------------");
console.log("---------------Default Value---------------");
function add(n1,n2,n3=1 /*Setting default value to n3*/){
    console.log(n1 +" : "+n2+" : "+n3);
    return n1+n2+n3;
}
console.log(add(2,3,4));
console.log(add(2,5));
