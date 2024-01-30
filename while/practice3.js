/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Subtask-1:
console.log("Sum of Odd Numbers from 81 to 131");
let i = 81;
let sum1 = 0;
while (i <= 131) {
  if (i % 2 === 1) {
    sum1 += i;
  }
  i++;
}
console.log(sum1);

// Subtask-2:
console.log("Sum of Even Numbers from 206 to 311");
let sum2 = 0;
let x = 206;
while (x <= 311) {
  if (x % 2 === 0) {
    sum2 += x;
  }
  x++;
}
console.log(sum2);
