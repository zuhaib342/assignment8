//Assingment No. 1
const array1: number[] = [2, 5, 7, 2, 9, 1];
array1.map((val) => console.log(val));

//Assignment No. 2
const array2: number[] = [3, -2, 5, 7, -4, -6, 8];
array2.filter((val) => val < 0).map((val) => console.log(val));

//Assignment No. 3
const array3: number[] = [2, 3, 4, 5, 6, 7];
const total = array3.reduce((a, b) => {
  return a + b;
}, 0);
console.log(total);

//Assignment No. 4
const array4: number[] = [4, 6, 8, 5, 3, 9];
const maximum = Math.max(...array4);
const minimum = Math.min(...array4);
console.log(maximum, minimum);
// ASSIGNMNET NO 6
const array6: number[] = [4, 5, 6, 7, 8, 9, 2];
const even = array6.filter((val) => val % 2 === 0);
const odd = array6.filter((val) => val % 2 !== 0);
console.log('Even numbers are ' + even.length, 'odd numbers are ' + odd.length);

//Assignment 7
const negative = array2.filter((val) => val < 0);
console.log(negative.length);

//Assignment 8
array1.push(...array2)
console.log(array1)



// 9. Write a ts program to insert an element in an array

var elementsOfArray : string [ ] = [ 'zuhaib', 'ahmad', 'ali','naveed'   ]
elementsOfArray.push('yasir')

console.log(elementsOfArray );




// 10. Write a ts program to delete an element from an array at specified position.

const student: string[] = ['one', 'two', 'three'];

const studentARemoved = student.shift();

console.log(studentARemoved); 


 console.log(student);
// 16. Write a ts program to find reverse of an array.

var arr :number []= [ 90,86, 56,];
 
var arrayReverse = arr.reverse();

console.log('arrayReverse', arrayReverse);







 










 










 
































    




