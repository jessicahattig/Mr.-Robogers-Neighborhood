//UI Logic
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", beepBoop)
  let resetBtn = document.querySelector("button#reset");
  document.getElementById("final-results").innertext = numberArray;


//Business Logic
function beepBoop(event) {
  event.preventDefault();
  
  let numberArray = [];
  for (let i = 0; i<= inputNumber; i++) {
    if (i.toString().includes("3")) {
      numberArray.push("Won't you be my neighbor?")
    } else if(i.toString().includes("2")) {
      numberArray.push("Boop!")
    } else if (i.toString().includes("1")) {
      numberArray.push("Beep!");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
}
});