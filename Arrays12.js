//arrays having different type
// let data=[3,5,7];
// data[3]=9; // we can use index to push data as well
// console.log(data);

//we can store function also since it is an object
let data=[3,5,'Ram',{name: 'Mohit'},function(){console.log("Hello world");}]
console.log(data);
console.log(data[3].name);
data[4]();