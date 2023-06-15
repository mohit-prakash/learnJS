//Map looks similar to object but there is difference
//Map is having key and value

let map = new Map();

map.set("Mohit","Java");
map.set("Rohit","Android");
map.set("Akash","JS");

//I want to print only keys, we can use keys()
// console.log(map.keys());

//we can check particular key is available or not
// console.log(map.has("Rohit"));
// console.log(map.has("rohit"));

//to get the value using key
// console.log(map.get("Rohit"));

//It will update the value of Mohit. That's why we call it set not add
map.set("Mohit","ML");

//for of loop
// for(let [k,v] of map){
//     console.log(k," : ",v);
// }

//forEach In array we pass 1st value then index. So, in map it is also same first pass value then key
map.forEach((v,k)=>console.log(k," : ",v));