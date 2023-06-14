//methods of arrays
let arr=[7,4,3,2];
//console.log(arr.push(9)); // push method returns length of array.
//console.log(arr.pop());//remove last inserted element and also return that element


//shift() shift element to left and remove 1st element and return that element
//It is same as pop() but popped from 1st.
//console.log(arr.shift());;

//unshift(..) shift element right and push element at 1st index and returns array length.
//It is same as push(..) but pushed at 1st. It is lengthy process since all elements shift.
//so, better use push(..)
//console.log(arr.unshift(6));

//splice(startIndex, no. of element you want to remove, ...elements you want to add).
//It is overloaded method with 1st param only, 1st and 2nd param only or all param
//It returns array of removed elements.
// console.log(arr.splice(2)); 
// console.log(arr.splice(2,1));
console.log(arr.splice(3,1,7,8,9,10,11));

console.log(arr);