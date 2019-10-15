/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

var arr= [];
var q1,q2,q3,q4,q6;

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
for(let i=0; i<4;i++)
  arr.push("image"+(i+1)+".png");
console.log(arr)
  /**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */
q2 = arr[0];
console.log(q2)
/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */
q3 = arr.length;
console.log(q3)
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */
q4 = arr[arr.length-1];
console.log(q4)
/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach function or a map function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

var arr2=[];
for(let i=0 ; i<4 ;i++)
  arr2.push(i+1)
arr2.push(arr2.length+1);
console.log(arr2)
/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

let avg=0 , count=0;
for(i=0; i<arr2.length ;i++){
           avg += arr2[i];
           count++;
} 
q6= avg/count
console.log(q6)