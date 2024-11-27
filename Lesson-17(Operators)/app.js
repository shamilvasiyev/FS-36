// let number = "450.25salam";
// number = Number(number);
// number = +number;
// number = -number;
// number = parseFloat(number);
// number = parseInt(number);

// console.log(typeof number);
// console.log(number);

// let count = 0;
// console.log(++count);
// console.log(count);

// falsy : null, undefined, NaN, 0, "", false

// truthy

// let count = 1;
// count = count + 10;
// count %= 10;
// console.log(count);

// let number1 = 30;
// let number2 = "30";
// let result = number1 !== number2;

// let text1 = "ipsum1";
// let text2 = "ipsum2";

// console.log(text1 > text2);

// console.log(false || null || undefined || "Hello" || 0 || "salam");
// console.log(5 && "Hello" || null && "World");

// console.log(null ?? 15);

// Conditional statement

let number = 15;

if (number % 2 === 0) {
  console.log("eded cutdur");
} else {
  console.log("Eded tekdir");
}

// number % 2 === 0 ? console.log("eded cutdur") : console.log("Eded tekdir");

// if (!(number % 3) && !(number % 5)) {
//   console.log("FizzBuzz");
// } else if (!(number % 5)) {
//   console.log("Buzz");
// } else if (!(number % 3)) {
//   console.log("Fizz");
// } else {
//   console.log("Eded ne 5-e ne 3-e bolunmur");
// }

!(number % 3) && !(number % 5)
  ? console.log("FizzBuzz")
  : !(number % 5)
  ? console.log("Buzz")
  : !(number % 3)
  ? console.log("Fizz")
  : console.log("Eded ne 5-e ne 3-e bolunmur");
