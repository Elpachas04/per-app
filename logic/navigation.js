export function volverAtras() {
    const tema = localStorage.getItem("tema");
    const modo = localStorage.getItem("modo");
  
    if (window.location.pathname.includes("subtema.html")) {
      window.location.href = "temario.html";
    } else if (window.location.pathname.includes("tema.html")) {
      if (tema === "luces") {
        window.location.href = `subtema.html?modo=${modo}`;
      } else {
        window.location.href = "temario.html";
      }
    } else {
      window.location.href = "index.html";
    }
  }
  