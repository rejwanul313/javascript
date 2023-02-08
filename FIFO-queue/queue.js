// shift() -- returns the first item of the list and deletes the item
// Push(v) -- adds an element v at the end of the array (at index length) -- returns the new length of the array

const arr = [1,2,3,4];
first_item = arr.shift(); // remove first item
console.log(arr); // [2,3,4] 
console.log(first_item) // 1
arr.push(first_item);
console.log(arr) // [2,3,4,1] 
