const conf = require("config");
const axios = require("axios");
const getLocation = async (ip) => {
  let config = {
    method: "get",
    url: `${conf.get("services.ip-api.url")}/${ip}`,
  };
  let result = await axios(config);
  return result.data;
};

module.exports = { getLocation };
