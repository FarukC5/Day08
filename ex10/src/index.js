// Only change below this line
function mathTest(x, y) {
  // Only change above this line
  if (x < 0 || y < 0) {
    // Only change below this line
    return undefined;
    // Only change above this line
  } else {
    return Math.round(Math.pow(Math.sqrt(x) + Math.sqrt(y), 2));
    // Only change below this line
  }
}
mathTest();
console.log(mathTest(2, 2));
console.log(mathTest(-2, 2));
console.log(mathTest(2, -2));
console.log(mathTest(2, 8));
console.log(mathTest(3, 3));
console.log(mathTest(0, 0));
// Only change above this line
module.exports = mathTest;
