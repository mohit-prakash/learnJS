let nums=[42,56,78,55,23,45];
//It will give data one by one and in the prameter we can pass anonymous method and do operations.
// nums.forEach((num)=>{
//     console.log(num*2);
// })

//we can pass 3 parameter in arrow function num, index and array
nums.forEach((num,i,nums)=>{
    console.log(num,i,nums);
})