//Business Logic
function beepBoop(inputNumber) {
  let numberArray = [];
  for (let i = 0; i<= inputNumber; i++) {
    if (i.toString().includes("2")) {
      numberArray.push("Boop")
    } else if (i.toString().includes("1")) {
      numberArray.push("Beep");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}