let arr = [1,2,3];
arr[-1] = 0;
console.log(arr);
console.log(arr.length)

//The output here for the length is 3 and the arr = [1,2,3, -1:0]
//JS does not support negative indexing
