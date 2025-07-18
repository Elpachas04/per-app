import { mostrarResultadoRepaso } from './helpers.js';

export function bindEvents(modo) {
  if (modo === "repaso") {
    document.querySelectorAll('input[type=radio]').forEach(radio => {
      radio.addEventListener("change", () => {
        const idx = parseInt(radio.name.replace("q", ""));
        const valor = parseInt(radio.value);
        const pregunta = window.preguntas[idx];
        mostrarResultadoRepaso(idx, pregunta.correcta, valor, pregunta.explicacion);
      });
    });
  } else {
    window.preguntas.forEach((_, idx) => {
      window.preguntas[idx].respuesta = null;
    });

    document.querySelectorAll('input[type=radio]').forEach(radio => {
      radio.addEventListener("change", () => {
        const idx = parseInt(radio.name.replace("q", ""));
        const valor = parseInt(radio.value);
        window.preguntas[idx].respuesta = valor;
      });
    });

    const btn = document.getElementById("corregir");
    if (btn) {
      btn.style.display = "block";
      btn.addEventListener("click", () => corregirExamen(window.preguntas));
    }
  }
}

export function corregirExamen(preguntas) {
  preguntas.forEach((p, idx) => {
    const radios = document.querySelectorAll(`input[name="q${idx}"]`);
    radios.forEach((radio, i) => {
      radio.disabled = true;
      const label = radio.parentElement;
      label.classList.remove("correcto", "incorrecto");

      if (i === p.correcta) label.classList.add("correcto");
      if (i === p.respuesta && p.respuesta !== p.correcta) label.classList.add("incorrecto");
    });

    const div = document.getElementById(`exp${idx}`);
    div.innerHTML = `<em>${p.explicacion}</em>`;
    div.classList.add("explicacion");
  });
}
