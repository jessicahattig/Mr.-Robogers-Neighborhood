function beepBoop() {
  let inputNumber = parseInt(prompt("Enter a Number:"));
  let numberArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    numberArray.push(i);
  }
  return numberArray;
}