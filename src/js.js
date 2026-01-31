function updateTime() {
  // London Clock
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonClockElement = londonElement.querySelector(".clock");
    londonClockElement.innerHTML = moment()
      .tz("Europe/London")
      .format("hh:mm:ss [<small>]A[</small>]");
    londonDateElement.innerHTML = moment()
      .tz("Europe/London")
      .format("Do MMMM YYYY");
  }
  // Sao Paulo Clock
  let saoPauloElement = document.querySelector("#saoPaulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloClockElement = saoPauloElement.querySelector(".clock");
    saoPauloClockElement.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format("hh:mm:ss [<small>]A[</small>]");
    saoPauloDateElement.innerHTML = moment()
      .tz("America/Sao_Paulo")
      .format("Do MMMM YYYY");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="clockContainer" id="selectedCity">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("Do MMMM YYYY")}</div>
      </div>
      <div class="clock">
        ${cityTime.format("hh:mm:ss")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
    <a href="index.html">⟵ Back to all clocks</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#country");
citiesSelectElement.addEventListener("change", updateCity);
