const conf = require("config");
const axios = require("axios");
const getweatherByCoords = async (lat, lon) => {
  try {
    let cityCurrent = `&lat=${lat}&lon=${lon}`;
    return sendRequest(cityCurrent);
  } catch (error) {
    return error.response.data;
  }
};
const getweatherByCity = async (city) => {
  try {
    let cityCurrent = city ? `&q=${city}` : "";
    return sendRequest(cityCurrent);
  } catch (error) {
    return error.response.data;
  }
};

const sendRequest = async (cityCurrent) => {
  let config = {
    method: "get",
    url: `${conf.get("services.weather.url-current")}?appid=${conf.get(
      "services.weather.api-key"
    )}${cityCurrent}`,
  };
  let result = await axios(config);
  return result.data;
};

module.exports = { getweatherByCity, getweatherByCoords };
