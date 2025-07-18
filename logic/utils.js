export async function cargarPreguntas() {
    const tema = localStorage.getItem('tema');
    const subtema = localStorage.getItem('subtema');
    const modo = localStorage.getItem('modo');
  
    const response = await fetch(`${tema}.json`);
    const data = await response.json();
  
    let preguntas = [];
  
    if (subtema === 'todas') {
      preguntas = [...(data.nocturnas || []), ...(data.diurnas || [])];
    } else {
      preguntas = data[subtema] || [];
    }
  
    window.preguntas = preguntas;
  
    const contenedor = document.getElementById("preguntas");
  
    preguntas.forEach((p, idx) => {
      const div = document.createElement("div");
      div.className = "question";
  
      const htmlOpciones = p.opciones.map((op, i) => `
        <label>
          <input type="radio" name="q${idx}" value="${i}" />
          ${op}
        </label>
      `).join("");
  
      div.innerHTML = `
        <strong>${idx + 1}. ${p.texto}</strong>
        ${htmlOpciones}
        <div id="exp${idx}" class="explicacion"></div>
      `;
  
      contenedor.appendChild(div);
    });
  
    const resumen = data.resumen?.[subtema];
    if (resumen) {
      const resumenDiv = document.getElementById("resumen");
      resumenDiv.innerHTML = `<pre>${resumen}</pre>`;
      resumenDiv.style.display = "none";
      document.getElementById("toggleResumen").addEventListener("click", () => {
        resumenDiv.style.display = resumenDiv.style.display === "none" ? "block" : "none";
      });
    }
  
    return preguntas;
  }
  
  export function mezclarArray(array) {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
  