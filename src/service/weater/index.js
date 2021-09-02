
const axios = require("axios");

const sendRequest = async (url, query) => {
  let config = {
    method: "get",
    url: `${url}?${query}`
  };
  let result = await axios(config);
  return result.data;
};

module.exports = { sendRequest };
