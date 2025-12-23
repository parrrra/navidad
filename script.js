const botonInicio = document.getElementById("botonInicio");
const botonFinal = document.getElementById("botonFinal");
const contenido = document.getElementById("contenido");
const final = document.getElementById("final");

const musica = document.getElementById("musica");
const sonidoBoton = document.getElementById("sonidoBoton");

botonInicio.addEventListener("click", () => {
  sonidoBoton.play();
  musica.play();
  botonInicio.style.display = "none";
  contenido.style.display = "block";
});

botonFinal.addEventListener("click", () => {
  sonidoBoton.play();
  contenido.style.display = "none";
  final.style.display = "block";
});
