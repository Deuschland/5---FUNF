const kostentraeger = [
  1203, 6600, 1, 2, 3, 333, 334, 335, 336, 337,
  338, 339, 340, 341, 342, 343, 344, 345, 346, 347,
  348, 349, 350, 351, 352, 353, 354, 355, 356, 357
];

const tarif = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90,
  100, 110, 120, 130, 140, 150, 160, 170, 180, 190,
  200, 210, 220, 230, 240, 250, 260, 270, 280, 290
];

const valuesE = ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10"];
const valuesF = ["F1", "F2", "F3"];

// Комбінації: E|F → індекс
const combinations = {};
let index = 0;
valuesE.forEach(e => {
  valuesF.forEach(f => {
    combinations[`${e}|${f}`] = index++;
  });
});

function populateSelect(id, values) {
  const select = document.getElementById(id);
  values.forEach(val => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    select.appendChild(option);
  });
}

populateSelect("selectE", valuesE);
populateSelect("selectF", valuesF);

function findResult() {
  const e = document.getElementById("selectE").value;
  const f = document.getElementById("selectF").value;
  const key = `${e}|${f}`;
  const i = combinations[key];

  const result = i !== undefined && kostentraeger[i] !== undefined && tarif[i] !== undefined
    ? `Kostenträgernummer: <span>${kostentraeger[i]}</span><br>Tarif: <span>${tarif[i]}</span>`
    : "Комбінація не знайдена";

  document.getElementById("output").innerHTML = result;
}

// PWA: реєстрація service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}
