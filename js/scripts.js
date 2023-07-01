//Business Logic
// function beepBoop() {
//   let inputNumber = parseInt(prompt("Enter a Number:")); // will remove prompt after BI passes and UI is incorperated. 
//   let numberArray = [];
//   for (let i = 0; i <= inputNumber; i++) {
//     if (i === 1) {
//       numberArray.push("Beep")
//     } else if (i === 2) {
//       numberArray.push("Boop")
//     } else if (i === 3) {
//       numberArray.push("Won't you be my neighbor?")
//     } else {
//       numberArray.push(i); 
//     }
//   }
//   return numberArray;
// }

// function beepBoop(inputNumber) {
//   let numberArray = []
//   for (let i = 0; i<= inputNumber; i++) {
//     if (i.toString().includes("1")) {
//       numberArray.push("Beep");
//     } else if (i.toString().includes("2")) {
//       numberArray.push("Boop")
//     } else if (i.toString().includes("3")) {
//       numberArray.push("Won't you be my neighbor?")
//     } else {
//       numberArray.push(i);
//     }
//   }
//   return numberArray;
// }

function beepBoop(inputNumber) {
  let numberArray = [];
  for (let i = 0; i<= inputNumber; i++) {
    if (i.toString().includes("2")) {
      numberArray.push("Boop")
    } else if (i.toString().includes("1")) {
      numberArray.push("Beep")
    } else {
    numberArray.push(i);
    }
  }
  return numberArray;
}