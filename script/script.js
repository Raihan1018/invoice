document.getElementById("print-button").addEventListener("click", function () {
  window.print();
});

const date = new Date();
const year = date.getFullYear();
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const day = date.getDate().toString().padStart(2, "0");
console.log(day, month, year);

document.getElementById("today-date").textContent = `${day}/${month}/${year}`;
