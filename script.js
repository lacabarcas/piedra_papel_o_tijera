const opcionesJugador = document.querySelectorAll('.jugador img');
const resultadoTexto = document.getElementById('resultado-texto');
const imagenEleccionComputadora = document.getElementById('eleccion-computadora');

opcionesJugador.forEach(opcion => {
  opcion.addEventListener('click', jugar);
});

function obtenerEleccionComputadora() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function determinarGanador(opcionJugador, eleccionComputadora) {
  if (opcionJugador === eleccionComputadora) {
    return '¡Es un empate!';
  } else if (
    (opcionJugador === 'piedra' && eleccionComputadora === 'tijera') ||
    (opcionJugador === 'papel' && eleccionComputadora === 'piedra') ||
    (opcionJugador === 'tijera' && eleccionComputadora === 'papel')
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Computadora gana!';
  }
}

function jugar(evento) {
  const opcionJugador = evento.target.getAttribute('data-opcion');
  const eleccionComputadora = obtenerEleccionComputadora();
  
  const imagenEleccionComputadoraSrc = `${eleccionComputadora}.jpeg`;
  imagenEleccionComputadora.src = imagenEleccionComputadoraSrc;
  imagenEleccionComputadora.alt = `Elección de la Computadora: ${eleccionComputadora}`;
  
  const resultado = determinarGanador(opcionJugador, eleccionComputadora);
  resultadoTexto.textContent = resultado;
}
