function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format(
    "dddd, MMMM Do, YYYY"
  );
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("dddd, MMMM Do, YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM Do, YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("dddd, MMMM Do, YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let body = document.querySelector("body");
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
    body.classList.add("mylocation");
    body.classList.remove("athens");
    body.classList.remove("chicago");
    body.classList.remove("london");
    body.classList.remove("shanghai");
  }
  if (cityTimeZone === "Europe/Athens") {
    body.classList.add("athens");
    body.classList.remove("mylocation");
    body.classList.remove("chicago");
    body.classList.remove("london");
    body.classList.remove("shanghai");
  }
  if (cityTimeZone === "America/Chicago") {
    body.classList.add("chicago");
    body.classList.remove("athens");
    body.classList.remove("mylocation");
    body.classList.remove("london");
    body.classList.remove("shanghai");
  }
  if (cityTimeZone === "Europe/London") {
    body.classList.add("london");
    body.classList.remove("athens");
    body.classList.remove("chicago");
    body.classList.remove("mylocation");
    body.classList.remove("shanghai");
  }
  if (cityTimeZone === "Asia/Shanghai") {
    body.classList.add("shanghai");
    body.classList.remove("athens");
    body.classList.remove("chicago");
    body.classList.remove("london");
    body.classList.remove("mylocation");
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city">
        <div class="row">
          <div class="col" >
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
          </div>
          <div class="col">
            <div class="time">${cityTime.format("h:mm:ss")} 
              <small>${cityTime.format("A")}</small>
            </div>
          </div>
        </div>
        <a href="/">- Go to Main -</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-list");
citiesSelectElement.addEventListener("change", updateCity);
