import { corregirExamen } from './events.js';

// Títulos bonitos por subtema
const TITULOS_RESUMEN = {
    nocturnas: "🌙 LUCES NOCTURNAS",
    diurnas: "☀️ LUCES DIURNAS",
    todas: "🌙 LUCES NOCTURNAS + ☀️ LUCES DIURNAS",
    general: "📘 RESUMEN DEL TEMA"

};

export function renderResumen(resumenData, subtema) {
    const resumenDiv = document.getElementById("resumen");
    let html = "";

    if (subtema === "todas") {
        html += `<h3>${TITULOS_RESUMEN.nocturnas}</h3><ul>`;
        html += resumenData.nocturnas.map(p => `<li>${p}</li>`).join("");
        html += `</ul><h3>${TITULOS_RESUMEN.diurnas}</h3><ul>`;
        html += resumenData.diurnas.map(p => `<li>${p}</li>`).join("");
        html += `</ul>`;
    } else if (resumenData[subtema]) {
        html += `<h3>${TITULOS_RESUMEN[subtema] || "Resumen"}</h3>`;
        html += `<ul>${resumenData[subtema].map(p => `<li>${p}</li>`).join("")}</ul>`;
    } else {
        html += `<ul><li>No hay resumen disponible para este tema.</li></ul>`;
    }

    resumenDiv.innerHTML = html;
    resumenDiv.style.display = "none";

    const btn = document.getElementById("toggleResumen");
    btn.addEventListener("click", () => {
        const isHidden = resumenDiv.style.display === "none";
        resumenDiv.style.display = isHidden ? "block" : "none";
        btn.textContent = isHidden ? "📕 Ocultar resumen del tema" : "📘 Ver resumen del tema";
    });
}

export function renderPreguntas(preguntas, modo) {
    const contenedor = document.getElementById("preguntas");
    contenedor.innerHTML = "";
    preguntas.forEach((p, idx) => {
        const div = document.createElement("div");
        div.className = "question";
        div.id = `q${idx}`;

        div.innerHTML = `
      <strong>${idx + 1}. ${p.texto}</strong><br/>
      ${p.opciones.map((op, i) => `
        <label>
          <input type="radio" name="q${idx}" value="${i}" data-idx="${idx}"/> ${op}
        </label>
      `).join("")}
      <div class="explicacion" id="exp${idx}"></div>
    `;

        contenedor.appendChild(div);
    });
}

export function renderBotonCorreccion(preguntas) {
    const acciones = document.getElementById("acciones");
    const btn = document.createElement("button");
    btn.textContent = "Corregir examen";
    btn.onclick = () => corregirExamen(preguntas);
    acciones.appendChild(btn);
}
