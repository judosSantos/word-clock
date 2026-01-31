function prompTime(event) {
  if (event.target.value === "paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("dddd, Do MMMM YYYY, hh:mm a");
    alert(`${parisTime} in Paris/France`);
  }

  if (event.target.value === "tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("dddd, Do MMMM YYYY, hh:mm a");
    alert(`${tokyoTime} in Tokyo/Japan`);
  }
  if (event.target.value === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, Do MMMM YYYY, hh:mm a");
    alert(`${sydneyTime} in Sydney/Australia`);
  }
}

let selectElement = document.querySelector("#country");
selectElement.addEventListener("change", prompTime);

// London Clock
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonClockElement = londonElement.querySelector(".clock");
  londonClockElement.innerHTML = moment()
    .tz("Europe/London")
    .format("hh:mm:ss [<small>]A[</small>]");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("Do MMMM YYYY");
}

updateLondonTime();

// Sao Paulo Clock
function updateSaoPauloTime() {
  let saoPauloElement = document.querySelector("#saoPaulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloClockElement = saoPauloElement.querySelector(".clock");
  saoPauloClockElement.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<small>]A[</small>]");
  saoPauloDateElement.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("Do MMMM YYYY");
}
updateSaoPauloTime();

setInterval(updateLondonTime, 1000);
setInterval(updateSaoPauloTime, 1000);

//ping pong

const video = document.getElementById("backgroundVideo");

// Configurações
const slowMotion = 0.5; // 1 = normal, <1 = mais lento
const fps = 60; // Frames por segundo
let forward = true; // direção inicial

// Inicia loop ping-pong
function pingPongLoop() {
  const step = (1 / fps) * slowMotion;

  if (forward) {
    // toca pra frente
    if (video.currentTime + step >= video.duration - 0.01) {
      forward = false;
      video.currentTime = video.duration - 0.01; // evita travar no final
    } else {
      video.currentTime += step;
    }
  } else {
    // rebobina
    if (video.currentTime - step <= 0.01) {
      forward = true;
      video.currentTime = 0.01; // evita travar no início
    } else {
      video.currentTime -= step;
    }
  }

  requestAnimationFrame(pingPongLoop);
}

// Inicia loop apenas quando o vídeo está pronto
if (video) {
  // Configura o vídeo
  video.muted = true;

  if (video.readyState >= 2) {
    // Vídeo já tem metadados carregados
    video.play().catch((err) => console.error("Erro ao tocar vídeo:", err));
    requestAnimationFrame(pingPongLoop);
  } else {
    // Espera o vídeo carregar seus metadados
    video.addEventListener(
      "loadedmetadata",
      () => {
        console.log("Vídeo pronto, iniciando ping-pong");
        video.play().catch((err) => console.error("Erro ao tocar vídeo:", err));
        requestAnimationFrame(pingPongLoop);
      },
      { once: true },
    );
  }
} else {
  console.error("Elemento com id 'backgroundVideo' não encontrado!");
}
