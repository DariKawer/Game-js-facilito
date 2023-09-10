let vidau = 150;
let vidac = 200;
let espada = 40;
let arco = 50;
let escudou = 50;
let escudoc = 45;

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
});

const listo = document.querySelector('.listo');
const namelog = document.querySelector('.namelog');
const namea = document.querySelector('.nameu');
const nameb = document.querySelector('.namec');

listo.addEventListener('click', () => {
  const nameinput = document.getElementById("name").value;
  const lab = document.querySelector("label");
  
  if(nameinput !== null && nameinput.trim() !== "") {
    const name1 = nameinput.split(" ")[0];

    namelog.style.display = 'none';
    namea.textContent = nameinput;
    nameb.textContent = name1 + " Dark";
  } else {
    lab.textContent = "Ingresa un nombre válido!";
  }
});

const buttons = document.querySelectorAll(".op");
buttons.forEach(button => button.addEventListener('click', turno));
const mensaje1 = document.querySelector(".mensaje1");
const mensaje2 = document.querySelector(".mensaje2");
const outputp = document.querySelector(".frase");
const vidaa = document.querySelector(".vidau1");
const vidab = document.querySelector(".vidau2");


function turno(event) {
  const opcionUsuario = event.target;

  if (vidau > 0 && vidac > 0) {
    switch (opcionUsuario.textContent) {
      case "Atacar con espada":
        vidac -= espada;
        outputp.textContent = "Has atacado con la espada.";
        vidab.textContent = "Vida: " + vidac;
        break;

      case "Atacar con arco":
        vidac -= arco;
        outputp.textContent = "Has atacado con el arco.";
        vidab.textContent = "Vida: " + vidac;
        break;

      case "Usar escudo":
        vidau += escudou;
        outputp.textContent = "Has usado el escudo.";
        vidaa.textContent = "Vida: " + vidau;
        break;

      default:
        outputp.textContent = "Opción no válida";
        break;
    }

    if (vidac <= 0) {
      outputp.textContent = "--------------";
      mensaje2.style.zIndex = '1';
      vidab.textContent = "Vida: 0";
      return;
    }

    const opComputadora = Math.floor(Math.random() * 3) + 1;

    setTimeout(() => {
    switch (opComputadora) {
      case 1:
        vidau -= espada;
        outputp.textContent = "La computadora atacó con la espada.";
        vidaa.textContent = "Vida: " + vidau;
        break;

      case 2:
        vidau -= arco;
        outputp.textContent = "La computadora atacó con el arco.";
        vidaa.textContent = "Vida: " + vidau;
        break;

      case 3:
        vidac += escudoc;
        outputp.textContent = "La computadora usó el escudo.";
        vidab.textContent = "Vida: " + vidac;
        break;

      default:
        outputp.textContent = "La computadora eligió una opción no válida";
        break;
    }

    if (vidau <= 0) {
      outputp.textContent = "--------------";
      mensaje1.style.zIndex = '1';
      vidaa.textContent = "Vida: 0";
      return;
    }
    }, 1000);
  }
}

const reiniciarButton = document.querySelector(".reiniciar");
reiniciarButton.addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
  vidau = 150;
  vidac = 200;
  outputp.textContent = "¡Juego reiniciado!";
  vidaa.textContent = "Vida: " + vidau;
  vidab.textContent = "Vida: " + vidac;
  mensaje1.style.zIndex = '-1';
  mensaje2.style.zIndex = '-1';
}