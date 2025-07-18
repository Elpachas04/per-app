// Botón "🔙 Volver" que respeta el flujo lógico de navegación
export function insertarBotonVolver({ selector = null, centered = false } = {}) {
    const boton = document.createElement("button");
    boton.id = "volverAtras";
    boton.innerHTML = "⬅ Volver";

    if (centered) boton.classList.add("centrado");

    boton.addEventListener("click", () => {
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
            window.history.back();
        }
    });

    const contenedor = selector ? document.querySelector(selector) : document.body;
    if (contenedor) contenedor.appendChild(boton);
}


// Botón flotante "⬇ Ir al final"
export function insertarBotonScrollFinal() {
    if (window.location.pathname.includes("index.html")) return;

    const boton = document.createElement("button");
    boton.textContent = "⬇ Ir al final";
    boton.id = "irFinal";
    boton.style.position = "fixed";
    boton.style.top = "1rem";
    boton.style.right = "1rem";
    boton.style.zIndex = "1000";
    boton.style.padding = "0.6rem 1rem";
    boton.style.backgroundColor = "#007bff";
    boton.style.color = "#fff";
    boton.style.border = "none";
    boton.style.borderRadius = "6px";
    boton.style.cursor = "pointer";
    boton.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";

    boton.addEventListener("click", () => {
        const destino = document.getElementById("acciones") || document.getElementById("volverAtras");
        if (destino) {
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });

    const contenedor = document.querySelector(".temario-card") || document.body;
    contenedor.appendChild(boton);
}
