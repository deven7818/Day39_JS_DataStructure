/**
 * Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
 */

let arr = [];

for (var i = 0; i <= 100; i++) {
    var twiceNum = i % 10;
    var num = i / 10;
    if (twiceNum == parseInt(num)) {
        arr.push(i);
    }
}
console.log("Repeated Numbers are : " + arr);