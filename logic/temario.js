import { volverAtras } from './navigation.js';

function seleccionarTema(tema) {
  localStorage.setItem('tema', tema);
  const modo = localStorage.getItem('modo');

  const temasConSubtemas = ['luces'];
  if (temasConSubtemas.includes(tema)) {
    window.location.href = `subtema.html?modo=${modo}`;
  } else {
    window.location.href = `tema.html?tema=${tema}&modo=${modo}&subtema=general`;
  }
}

window.seleccionarTema = seleccionarTema;

const volverBtn = document.getElementById("volverAtras");
if (volverBtn) {
  volverBtn.addEventListener("click", volverAtras);
}
