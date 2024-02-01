let number = "33abc";

console.log(typeof(number));
console.log(typeof number);

let num = Number(number);
console.log(typeof num);
console.log(num + 2 );

// "33" => 33
// "33abjdhsj" => NaN Not a Number 
// null => 0
// true = 1 false =0

let isLoggedIn = 345.23;
console.log(typeof isLoggedIn);
let bool = Boolean(isLoggedIn);
console.log(typeof bool);
console.log(bool);

// number except 0 = true , 0 = false
// "" => false
// "anystring" => true

let num1 = 33;

let str = String(num1);
console.log(str);
console.log(typeof str);