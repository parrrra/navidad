const botonInicio = document.getElementById("botonInicio");
const botonFinal = document.getElementById("botonFinal");
const contenido = document.getElementById("contenido");
const final = document.getElementById("final");
const modem = document.getElementById("modem");

const musica = document.getElementById("musica");
const sonidoBoton = document.getElementById("sonidoBoton");
const activarSonidoBoton = document.getElementById("activarSonido");
const boomSound = document.getElementById("boomSound");

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

const loading = document.getElementById("loading");

window.addEventListener("load", () => {
  modem.volume = 0.6;
  modem.play();
  // Intentamos reproducir (funciona en la mayoría de navegadores)
  modem.play().catch(() => {
    console.log("El navegador bloqueó el autoplay del módem 😢");
  });

  setTimeout(() => {
    loading.style.display = "none";
    modem.pause();
    modem.currentTime = 0;
  }, 15000);
});

activarSonidoBoton.addEventListener("click", () => {
  setTimeout(() => {
    loading.style.display = "none";
    modem.pause();
    modem.currentTime = 0;
  }, 15000);

  for (let i = 0; i < 5; i++) {
    explosion(
      e.clientX + Math.random() * 100 - 50,
      e.clientY + Math.random() * 100 - 50
    );
  }

  modem.volume = 0.6;
  modem.play();
  // Intentamos reproducir (funciona en la mayoría de navegadores)
  modem.play().catch(() => {
    console.log("El navegador bloqueó el autoplay del módem 😢");
  });
});

const textos = [
  "Cargando tejas...",
  "Buscando mantas...",
  "Encendiendo estufa de butano...",
  "Espantando arañas...",
  "Aplicando humedad...",
];

setInterval(() => {
  document.querySelector("#loading p").innerText =
    textos[Math.floor(Math.random() * textos.length)];
}, 800);

function explosion(x, y) {
  const boom = document.createElement("div");
  boom.classList.add("explosion");

  boomSound.currentTime = 0;
  boomSound.play();

  boom.style.left = `${x}px`;
  boom.style.top = `${y}px`;

  boom.style.background = `radial-gradient(circle,
        ${colorRandom()},
        ${colorRandom()},
        transparent
    )`;

  document.body.appendChild(boom);

  setTimeout(() => {
    boom.remove();
  }, 600);

  crearJesus(3);
}

function colorRandom() {
  const colores = ["red", "yellow", "lime", "cyan", "magenta", "orange"];
  return colores[Math.floor(Math.random() * colores.length)];
}

botonInicio.addEventListener("click", (e) => {
  for (let i = 0; i < 5; i++) {
    explosion(
      e.clientX + Math.random() * 100 - 50,
      e.clientY + Math.random() * 100 - 50
    );
  }

  sonidoBoton.play();
  musica.play();
  botonInicio.style.display = "none";
  contenido.style.display = "block";
});

botonFinal.addEventListener("click", (e) => {
  for (let i = 0; i < 5; i++) {
    explosion(
      e.clientX + Math.random() * 100 - 50,
      e.clientY + Math.random() * 100 - 50
    );
  }

  sonidoBoton.play();
  contenido.style.display = "none";
  final.style.display = "block";
});

document.body.classList.add("shake");
setTimeout(() => document.body.classList.remove("shake"), 5000);

const NUM_JESUS = 5;
const jesusImg = "assets/jesus.gif";

function crearJesus(jesusi) {
  for (let i = 0; i < jesusi; i++) {
    const img = document.createElement("img");
    img.src = jesusImg;
    img.classList.add("jesus");

    const size = 80 + Math.random() * 80;
    img.style.width = `${size}px`;

    const zona = Math.floor(Math.random() * 3);

    // ZONAS SEGURAS (bordes)
    switch (zona) {
      case 0: // abajo
        img.style.bottom = `${Math.random() * 10}%`;
        img.style.left = `${Math.random() * 100}%`;
        break;
      case 1: // izquierda
        img.style.left = `${Math.random() * 5}%`;
        img.style.top = `${Math.random() * 100}%`;
        break;
      case 2: // derecha
        img.style.right = `${Math.random() * 5}%`;
        img.style.top = `${Math.random() * 100}%`;
        break;
    }

    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(img);
  }
}

crearJesus(NUM_JESUS);
