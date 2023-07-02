//UI Logic
window.addEventListener("load", function () {
  const form = document.querySelector("form");
  const resetBtn = document.querySelector("button#reset");
  const numberInput = document.getElementById("number");
  const resultElement = document.getElementById("final-result");
  let numberArray = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const inputNumber = numberInput.value;
    numberArray = beepBoop(inputNumber);
    resultElement.innerText = numberArray;
  });
  
  resetBtn.addEventListener("click", function () {
    numberInput.value = "";
    numberArray = [];
    resultElement.innerText = "";
  });
});


//Business Logic
function beepBoop(inputNumber) {
  event.preventDefault();
  let numberArray = [];
  for (let i = 0; i<= inputNumber; i++) {
    if (i.toString().includes("3")) {
      numberArray.push(" Won't you be my neighbor?")
    } else if(i.toString().includes("2")) {
      numberArray.push(" Boop!")
    } else if (i.toString().includes("1")) {
      numberArray.push(" Beep!");
    } else {
      numberArray.push(i);
    }
  }
  return numberArray;
};
