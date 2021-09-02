const conf = require("config");
const axios = require("axios");
const getLocation = async () => {
  let config = {
    method: "get",
    url: conf.get("services.ip-api.url"),
  };
  let result = await axios(config);
  return result.data;
};

module.exports = { getLocation };
