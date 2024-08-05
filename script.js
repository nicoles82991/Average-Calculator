//theres a bug with increasing a bunch and its not adding to the array correctly

const inputOne = document.getElementById("inputnum1");
const inputTwo = document.getElementById("inputnum2");
const chosenNums = document.getElementById("numberschosen");
const result = document.getElementById("result");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const numcontainer = document.getElementById("numcontainer");

let inum = 3;
let avgArry = [null, null];

function addNewInput() {
  if (inum <= 100) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("number");
    newDiv.id = `divnum${inum}`;
    newDiv.innerHTML = `
      <label for="inputnum${inum}" id="labelnum${inum}">Number #${inum}:</label>
      <input type="number" id="inputnum${inum}" class="numberinput" />
    `;
    numcontainer.appendChild(newDiv);

    avgArry.push(null);

    const newInput = document.getElementById(`inputnum${inum}`);
    newInput.addEventListener("input", function () {
      avgArry[inum - 1] = parseFloat(newInput.value) || null;
      updateChosenNumbers();
      findAverage();
    });

    inum++;
  }
}

increase.addEventListener("click", addNewInput);

decrease.addEventListener("click", function () {
  if (inum > 3) {
    inum--;
    let currentinumdiv = document.getElementById(`divnum${[inum]}`);
    if (currentinumdiv) {
      currentinumdiv.remove();
      avgArry.pop();
    }
    updateChosenNumbers();
    findAverage();
  }
});

inputOne.addEventListener("input", function () {
  avgArry[0] = parseFloat(inputOne.value) || null;
  updateChosenNumbers();
  findAverage();
});

inputTwo.addEventListener("input", function () {
  avgArry[1] = parseFloat(inputTwo.value) || null;
  updateChosenNumbers();
  findAverage();
});

function updateChosenNumbers() {
  let numchose = avgArry
    .filter((num) => num !== null && num !== undefined)
    .join(", ");
  chosenNums.textContent = numchose;
}

function findAverage() {
  const validNums = avgArry.filter((num) => num !== null && num !== undefined);
  const sum = validNums.reduce((acc, currVal) => acc + currVal, 0);
  const avg = validNums.length > 0 ? (sum / validNums.length).toFixed(2) : 0;

  result.textContent = avg;
}

updateChosenNumbers();
findAverage();

/*
let total = 0;
function average() {
  for (let i = 0; i < avgArry.length; i++) {
    total += avgArry[i];
  }
  console.log(total / avgArry.length);
}

increase.addEventListener("click", function () {
  if (inum <= 100) {
    numcontainer.innerHTML += `
<div class="number" id="divnum${[inum]}">
<label for="inputnum${[inum]}" id="labelnum${[inum]}">Number #${[inum]}:</label>
<input type="number" id="inputnum${[inum]}" class="numberinput" />
</div>`;
  }
  inum++;
});

*/

// function updateArrayandCalculate() {
//   let avgArry = [];
//   if (inputValues.inputOne !== null) {
//     avgArry.push(parseFloat(inputValues.inputOne));
//   }
//   if (inputValues.inputTwo !== null) {
//     avgArry.push(parseFloat(inputValues.inputTwo));
//   }
//   updateChosenNumbers();
//   findAverage();
// }

// inputOne.addEventListener("input", function () {
//   inputValues.inputOne = inputOne.value;
//   updateArrayandCalculate();
// });

//const newInput = document.getElementById(`inputnum${inum}`);

// for (let i = 0; i < avgArry.length; i++) {
//   numchose += avgArry[i] + ", ";
// }
// chosenNums.textContent = numchose;

// let sum = avgArry.reduce((max, currVal) => max + currVal);
// let avg = sum / avgArry.length;
