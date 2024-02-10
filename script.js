const alertBtn = document.getElementById("alert");
alertBtn.addEventListener("click", () => {
    alert("Hello, World")
});

const overlayBtn = document.getElementById("toggle");
const container = document.getElementById("container");
overlayBtn.addEventListener("click", () => {
  container.classList.toggle("color");
});