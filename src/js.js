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
      .format("dddd, Do MMMM YYYY, HH:MM");
    alert(`${tokyoTime} in Tokyo/Japan`);
  }
  if (event.target.value === "sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("dddd, Do MMMM YYYY, HH:MM");
    alert(`${sydneyTime} in Sydney/Australia`);
  }
}

let selectElement = document.querySelector("#country");
selectElement.addEventListener("change", prompTime);
