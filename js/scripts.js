//Business Logic
function beepBoop() {
  let inputNumber = parseInt(prompt("Enter a Number:")); // will remote prompt after BI passes and UI is incorperated. 
  let numberArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    if (i === 1) {
      numberArray.push("Beep")
    } else if (i === 2) {
      numberArray.push("Boop")
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}
