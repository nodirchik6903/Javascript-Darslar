"use strict";

// Map method yangi massiv qaytaradi eski massivni qiymatini o'zgartirib

// const car = ["Merc", "Bmw", "Rolce Royse"];

// const arr = car.map((item) => item.toLowerCase(car));

// console.log(arr);

// Filter method -yangi massiv qaytaradi filter qilib
// const car = ["mercedez benz", "bmw", "audi", "rollce royce"];
// const arr = car.filter((item) => item.length < 5);
// console.log(arr);

// SOME/EVERY method -boolean qiymat qaytaradi
//const car = [1, "Nodirbek", true];
//console.log(arr.some((item) => typeof item === "number")); // qaytardi true
//console.log(arr.some((item) => typeof item === "number")); // qaytardi false

//Reduce method - bitta qandaydur qiymat qaytaradi
//   sum     current
//  0       4
//  4       32
//  36      1
//  37      3
//  40      0
// const arr = [4, 32, 1, 3];
// const newArr = arr.reduce((sum, current) => sum + current, 10);
// console.log(newArr);

const arr = ["bmw", "audi", "rollce royce", "malibu"];
const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);