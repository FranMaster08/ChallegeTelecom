const config = require("config");
const app = require("./app");
const port = config.get("port");
app.listen(port, () => console.log(`running in port ${port}`));
