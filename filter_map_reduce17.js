let nums=[42,23,45,64,78,97];
//filter will return the array and take argument as boolean
// console.log(nums.filter(num=>num%2===0));

// nums.filter(num=>num%2===0).forEach(num=>console.log(num));

//map will take input and return an array after operations.
//nums.filter(num=>num%2===0).map(num=>num*2).forEach(num=>console.log(num));

//reduce, we want single value. Suppose after map we want to add all values of array.
//It is reduced to one single value.
let result=nums.filter(num=>num%2===0).map(num=>num*2).reduce((a,b)=>a+b);

console.log(result);