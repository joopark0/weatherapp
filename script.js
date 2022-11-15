async function weatherData() {
  try {
    let zipcode = getZip();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&APPID=548d4f69ca76724f697301ded08beaba`
    );
    const catresponse = await response.json();
    return catresponse;
  } catch (err) {
    console.log(err);
  }
}
function getZip() {
  return document.querySelector('#zipcode').value;
}
async function runWeather() {
  let tempw = await weatherData();
  console.log(tempw);
  document.querySelector('.temp').textContent = tempw.main.temp;
}

document.querySelector('#enter').addEventListener('click', function () {
  runWeather();
});
