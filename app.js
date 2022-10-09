//Assingment No. 1
var array1 = [2, 5, 7, 2, 9, 1];
array1.map(function (val) { return console.log(val); });
//Assignment No. 2
var array2 = [3, -2, 5, 7, -4, -6, 8];
array2.filter(function (val) { return val < 0; }).map(function (val) { return console.log(val); });
//Assignment No. 3
var array3 = [2, 3, 4, 5, 6, 7];
var total = array3.reduce(function (a, b) {
    return a + b;
}, 0);
console.log(total);
//Assignment No. 4
var array4 = [4, 6, 8, 5, 3, 9];
var maximum = Math.max.apply(Math, array4);
var minimum = Math.min.apply(Math, array4);
console.log(maximum, minimum);
// ASSIGNMNET NO 6
var array6 = [4, 5, 6, 7, 8, 9, 2];
var even = array6.filter(function (val) { return val % 2 === 0; });
var odd = array6.filter(function (val) { return val % 2 !== 0; });
console.log('Even numbers are ' + even.length, 'odd numbers are ' + odd.length);
//Assignment 7
var negative = array2.filter(function (val) { return val < 0; });
console.log(negative.length);
//Assignment 8
array1.push.apply(array1, array2);
console.log(array1);
// 9. Write a ts program to insert an element in an array
var elementsOfArray = ['zuhaib', 'ahmad', 'ali', 'naveed'];
elementsOfArray.push('yasir');
console.log(elementsOfArray);
// 10. Write a ts program to delete an element from an array at specified position.
var student = ['one', 'two', 'three'];
var studentARemoved = student.shift();
console.log(studentARemoved);
console.log(student);
// 16. Write a ts program to find reverse of an array.
var arr = [90, 86, 56,];
var arrayReverse = arr.reverse();
console.log('arrayReverse', arrayReverse);
