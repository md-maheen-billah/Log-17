/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let counter = 0;
for (let i = 1; i <= 100; i++) {
  // Check if the number is a square number
  if (Math.sqrt(i) % 1 === 0) {
    counter++;
    console.log(i);
    if (counter === 1) {
      break;
    }
  }
}
