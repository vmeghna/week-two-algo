"use strict";
// 1.Write a JavaScript function to check if a given number is even or odd.
function oddOrEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(oddOrEven(10)); //check even//
console.log(oddOrEven(3)); //check odd/

// 2.Write a JavaScript program to calculate the factorial of a number.
function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 2; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
}
console.log(factorial(4)); //4*3*2*1//
// 3.Write a JavaScript program to find the sum of all numbers in each array, excluding any numbers that are less than 0.
function sumNumber(arrays) {
  let sum = 0;
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (arrays[i][j] >= 0) {
        sum += arrays[i][j];
      }
    }
  }
  return sum;
}
const arrays = [
  [1, 2, 3],
  [4, -5],
  [2, 1],
]; //-5 is omitted//
console.log(sumNumber(arrays));
// 4.Write a JavaScript program to check if a given number, is a perfect square.
function squareRoot(number) {
  if (number < 0) {
    return false;
  }
  let sqrt = Math.floor(Math.sqrt(number));
  return sqrt * sqrt === number;
}
console.log(squareRoot(25));

// 5. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string: 'The quick brown fox'
// Expected Output: 5
function vowelsCount(str) {
  const vowels = "AEIOUaeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelsCount("The quick brown fox")); //checks a,e,i,o,u (caps too)//
// 6.Write a JavaScript function to add rows to a table.
// Sample HTML file:
// <!DOCTYPE html>
// <html><head><meta charset=utf-8 />
// <title>Insert row in a table - w3resource</title>
// </head><body>
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>
// </table><br>
// <input type="button" onclick="insert_Row()" value="Insert row">
// </body></html>
function insert_Row() {
  var table = document.getElementById("sampleTable");
  var newRow = table.insertRow(0);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  cell1.innerHTML = "new row of  cell 1";
  cell2.innerHTML = "new row of cell 2";
}
// {
//   var table = document.getElementById("sampleTable").insertRow(0);
//   var cell1 = table.insertCell(0);
//   var cell2 = table.insertCell(1);
//   cell1.innerHTML = "New Cell1";
//   cell2.innerHTML = "New Cell2";
// }

// 7. Write a JavaScript function to print an integer with thousands separated by commas.
// Test Data :
function thousandsSeperators(number) {
  return number.toLocaleString(); //it is a method to format num with 1000 seperated by commas//
}
console.log(thousandsSeperators(1000));
("1,000");
console.log(thousandsSeperators(10000.23));
("10,000.23");
console.log(thousandsSeperators(100000));
("100,000");

// 8. Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

function three_digit_armstrong_number() {
  //sum of cube of number=original number//
  for (var i = 1; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      for (var k = 0; k < 10; ++k) {
        var pow = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
        var plus = i * 100 + j * 10 + k;
        if (pow == plus) {
          console.log(pow);
        }
      }
    }
  }
}
three_digit_armstrong_number();

// 9. Write a JavaScript program to check if two given integers have opposite signs.
// Test Data:
// (100, -100) -> "Signs are opposite"
// (100, 100) -> "Signs are not opposite"
// ('100, 100) -> "Parameters value must be number!"
function check(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "they are numbers";
  }
  if ((num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0)) {
    return "opposite signs";
  } else {
    return "not a opposite signs";
  }
}
console.log(check(100, -100)); //t//
console.log(check(100, 100)); //f//
console.log(check(100, "100")); //no//
// 10. In an array every element appears twice except for one. Write a JavaScript program to find the non-repeated element in an array using bit manipulation.
// Test Data:
// ([1]) -> 1
// ([1, 2, 3]) -> 0 [All elements are non- repeated]
// [1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7] -> 7
function nonRepeated(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result ^= arr[i];
  }
  return result;
}
console.log(nonRepeated([1]));
console.log(nonRepeated([1, 2, 3]));
console.log(nonRepeated([1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7]));
