export function mostrarResultadoRepaso(idx, correcta, seleccionada, explicacion) {
    const radios = document.querySelectorAll(`input[name="q${idx}"]`);
    radios.forEach((radio, i) => {
      radio.disabled = true;
      const label = radio.parentElement;
      label.classList.remove("correcto", "incorrecto");
  
      if (i === correcta) label.classList.add("correcto");
      if (i === seleccionada && seleccionada !== correcta) label.classList.add("incorrecto");
    });
  
    const div = document.getElementById(`exp${idx}`);
    div.innerHTML = `<em>${explicacion}</em>`;
    div.classList.add("explicacion");
  }
  