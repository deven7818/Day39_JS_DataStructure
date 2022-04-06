/**
 * 1.Programm to Generate 10 Random 3 digit numbers 
 * 2.Store that random numbers in array
 * 3.then find second smallest and second largest number from array without sorting  
 */

/**
 * Generate 10 random 3 digit numbers and stored that in array
 */
var array = Array(10) // array size is 10
    .fill()
    .map(() => Math.floor(Math.random() * 1000)); // Generate 3 digit random numbers 
console.log(array);

/**
 * find 2nd Largest number from array without sorting
 */
var largest = array[0];
var nextLargest = array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        nextLargest = largest;
        largest = array[i];
    }
    else if (array[i] > nextLargest && array[i] != largest)
        nextLargest = array[i];
}
/**
 * find 2nd Smallest number from array without sorting
 */
var smallest = array[0];
var nextSmallest = array[0];
for (var i = 0; i < array.length; i++) {
    if (array[i] < smallest) {
        nextSmallest = smallest
        smallest = array[i];
    } else if (array[i] < nextSmallest && array[i] != smallest)
        nextSmallest = array[i];
}
/**
 * Printing 2nd smallest and 2nd largest number 
 */
console.log("Second Smallest number is :" + nextSmallest);
console.log("Second Largest number is :" + nextLargest);
