const ipservices = require("../service/ip/ipapi");
const { sendRequest } = require("../service/weater");
const conf = require("config");

function currentStrategy() {
  this.getWeatherByCity = (city) => {
    const url = `${conf.get("services.weather.url-current")}`;
    const query = `appid=${conf.get("services.weather.api-key")}&q=${city}`;
    return sendRequest(url, query);
  };
  this.getWeatherByCoors = async (ip) => {
    const { lat, lon } = await ipservices.getLocation(ip);
    const url = `${conf.get("services.weather.url-current")}`;
    let query = `appid=${conf.get("services.weather.api-key")}&lat=${lat}&lon=${lon}`;
    return sendRequest(url, query);
  };
}
function forecastStrategy() {
  this.getWeatherByCity = async (city) => {
    const url = `${conf.get("services.weather.url-daily")}`;
    const query = `appid=${conf.get("services.weather.api-key")}&q=${city}&cnt=5`;
    return await sendRequest(url, query);
  };
  this.getWeatherByCoors = async (ip) => {
    const { lat, lon } = await ipservices.getLocation(ip);
    const url = `${conf.get("services.weather.url-daily")}`;
    let query = `lat=${lat}&lon=${lon}&cnt=5&appid=${conf.get("services.weather.api-key")}`;
    return await sendRequest(url, query);
  };
}

module.exports = { currentStrategy, forecastStrategy };
