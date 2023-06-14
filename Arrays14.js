//For of loop in array
let nums=[];
nums[0]=5;
nums[99]=9;

console.log(nums); //[ 5, <98 empty items>, 9 ] 98 empty items since we can have diff data type data as well.

for(let num of nums){ // It will fetch each num of nums array
    console.log(num);
}

for(let key in nums){ //nums is array object. index is key.
    console.log(key); // It will print index only. i.e. 0 and 99
    console.log(nums[key]); 
}