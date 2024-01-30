/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Subtask-1:
console.log("Sum of Odd Numbers from 91 to 129");
let sum1 = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    sum1 += i;
  }
}
console.log(sum1);

// Subtask-2:
console.log("Sum of Even Numbers from 51 to 85");
let sum2 = 0;
for (let x = 51; x <= 85; x++) {
  if (x % 2 === 0) {
    sum2 += x;
  }
}
console.log(sum2);
