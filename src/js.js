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
