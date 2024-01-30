/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Subtask-1:
console.log("Odd Numbers from 61 to 100");
for (let i = 61; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// Subtask-2:
console.log("Even Numbers from 78 to 98");
for (let x = 78; x <= 98; x++) {
  if (x % 2 === 0) {
    console.log(x);
  }
}
