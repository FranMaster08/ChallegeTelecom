const location = (req, res, next) => {
  res.status(200).json({ mensaje: "ubicacion" });
};

const current = (req, res, next) => {
  res.status(200).json({ mensaje: "city" });
};

const forecast = (req, res, next) => {
  res.status(200).json({ mensaje: "forecast" });
};

const home = (req, res, next) => {
  res.status(200).json({ mensaje: "home" });
};

module.exports = { location, current, forecast, home };
