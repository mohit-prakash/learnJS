//set doesn't contain duplicate value
//we can't retrieve value by index
//in JS it will be ordered set

// let str=new Set("bookkeeper"); //Internally it will be stored as characters
// console.log(str); //output: Set(6) { 'b', 'o', 'k', 'e', 'p', 'r' }

let data = new Set();

data.add(3);
data.add(5);
data.add(7);
data.add(3);
data.add("Mohit");
data.add('Ram');

//console.log(data); //output: Set(5) { 3, 5, 7, 'Mohit', 'Ram' }

let sets = new Set();
sets.add("bookkeeper");
//console.log(sets);

//we can use forEach to retrieve each data
// data.forEach(value=>console.log(value));

//another method we have has(value) an it will return boolean value if value is there return true else false
// console.log(data.has(3));
// console.log(data.has("Mohit"));
// console.log(data.has("mohit"));

//forEach arrow method can take 3 param as well but 1st and 2nd value are same and 3rd param is set
data.forEach((value,value1,data)=>console.log(value,value1,data));