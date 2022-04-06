/**
 * Generate 10 random 3 digit numbers and stored that in array
 */
 var array = Array(10) // array size is 10
 .fill()
 .map(() => Math.floor(Math.random() * 1000)); // Generate 3 digit random numbers 
console.log(array);

/**
 * Find 2nd smallest number in array using sort
 */
const [secondMin, min] = array.sort((a,b) => b - a).slice(-2)
console.log('Second smallest number in array is :' + secondMin);

/**
 * Find 2nd largest number in array using sort
 */
const secondLargestNum = array.sort()[array.length - 2]
console.log("Second Largest number in array is :"+secondLargestNum);

/*
var temp_arr = [...new Set(array)].slice(0); //clone array
var second_largest_value = temp_arr.sort()[temp_arr.length - 2];
var index_of_largest_value = array.indexOf(second_largest_value);

console.log(second_largest_value);
console.log(index_of_largest_value);

*/