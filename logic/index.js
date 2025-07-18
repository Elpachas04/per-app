// logic/index.js

document.addEventListener("DOMContentLoaded", () => {
    const btnRepaso = document.getElementById("btn-repaso");
    const btnExamen = document.getElementById("btn-examen");
  
    if (btnRepaso) {
      btnRepaso.addEventListener("click", () => {
        localStorage.setItem("modo", "repaso");
        window.location.href = "temario.html";
      });
    }
  
    if (btnExamen) {
      btnExamen.addEventListener("click", () => {
        localStorage.setItem("modo", "examen");
        window.location.href = "temario.html";
      });
    }
  });
  