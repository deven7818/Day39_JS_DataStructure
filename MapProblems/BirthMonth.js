//generate a birth month of 50 individuals between the year 92 & 93.Find individuals having birthdays in the same month.

let birthMonth = new Map([
    [1,0],
    [2,0],
    [3,0],
    [4,0],
    [5,0],
    [6,0],
    [7,0],
    [8,0],
    [9,0],
    [10,0],
    [11,0],
    [12,0]
]);

for(let i=1; i<=50; i++){
    let randomMonth = Math.floor(Math.random() * 12) +1;
    let count = birthMonth.get(randomMonth);
    birthMonth.set(randomMonth, ++count);
}
console.log(birthMonth);