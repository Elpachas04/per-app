import { volverAtras } from './navigation.js';

function seleccionarSubtema(subtema) {
  localStorage.setItem('subtema', subtema);
  const tema = localStorage.getItem('tema');
  const modo = localStorage.getItem('modo');

  window.location.href = `tema.html?tema=${tema}&modo=${modo}&subtema=${subtema}`;
}

window.seleccionarSubtema = seleccionarSubtema;

const volverBtn = document.getElementById("volverAtras");
if (volverBtn) {
  volverBtn.addEventListener("click", volverAtras);
}
