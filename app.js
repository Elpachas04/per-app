import { getConfigFromURL } from './config.js';
import { renderResumen, renderPreguntas, renderBotonCorreccion } from './logic/render.js';
import { bindEvents } from './logic/events.js';
import { mezclarArray } from './logic/utils.js';

const { tema, modo, subtema } = getConfigFromURL();

fetch(`data/${tema}.json`)
  .then(res => res.json())
  .then(data => {
    document.querySelector("h1").textContent = `Tema: ${data.tema}`;

    // Selección de preguntas según el tipo de tema
    let preguntasRaw = [];

    if (subtema === "todas") {
      preguntasRaw = [...(data.nocturnas || []), ...(data.diurnas || [])];
    } else if (subtema === "general" && data.preguntas) {
      preguntasRaw = data.preguntas;
    } else {
      preguntasRaw = data[subtema] || [];
    }

    // Limitar a 10 preguntas aleatorias
    window.preguntas = mezclarArray(preguntasRaw).slice(0, 10);

    // Renderizar resumen
    renderResumen(data.resumenes, subtema);

    // Renderizar preguntas
    renderPreguntas(window.preguntas, modo);

    // Interacción
    bindEvents(modo);

    // Botón final si modo examen
    if (modo === "examen") {
      renderBotonCorreccion(window.preguntas);
    }
  })
  .catch(err => {
    console.error("Error cargando JSON", err);
    document.getElementById("preguntas").innerHTML = `<p>Error al cargar los datos del tema.</p>`;
  });
