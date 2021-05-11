const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const boxCityName = document.getElementById("boxCityName");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("tempStatus");
const dataHide = document.querySelector(".dataHide");

const getDay = () => {
  let realTimeData = new Date();
  let day = document.getElementById("day");
  let dayName = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNoName = dayName[realTimeData.getDay()];
  day.innerText = dayNoName;
};
getDay();

const getDate = () => {
  let realTimeData = new Date();
  let todayDate = document.getElementById("todayDate");
  let todayDatee = realTimeData.getDate();
  todayDate.innerText = todayDatee;
};
getDate();
const getMonth = () => {
  let realTimeData = new Date();
  let todayMonth = document.getElementById("todayMonth");
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = monthName[realTimeData.getMonth()];
  todayMonth.innerText = month;
};
getMonth();

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    boxCityName.innerText = "Please write a City name";
    dataHide.classList.add("dataHide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d64094489daee2289cba56abb7bea02d`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      boxCityName.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = (arrData[0].main.temp / 10).toFixed(2);
      const tempMode = arrData[0].weather[0].main;
      if (tempMode == "Clear") {
        tempStatus.innerHTML = "<i class='bi bi-brightness-high'></i>";
      } else if (tempMode == "Clouds") {
        tempStatus.innerHTML = "<i class='bi bi-cloud'></i>";
      } else if (tempMode == "Rain") {
        tempStatus.innerHTML = "<i class='bi bi-cloud-drizzle'></i>";
      } else {
        tempStatus.innerHTML = "<i class='bi bi-cloud'></i>";
      }
      dataHide.classList.remove("dataHide");
    } catch {
      boxCityName.innerText = "Please write a poeper City name";
      dataHide.classList.add("dataHide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
