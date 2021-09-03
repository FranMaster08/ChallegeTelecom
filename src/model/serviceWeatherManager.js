function serviceWeatherManager() {
  this.validateLogicObject = "";
  this.setStrategy = (validateLogicObject) => {
    this.validateLogicObject = validateLogicObject;
  };
  this.getWeatherByCity = (city) => {
    return this.validateLogicObject.getWeatherByCity(city);
  };
  this.getWeatherByCoors = (ip) => {
    return this.validateLogicObject.getWeatherByCoors(ip);
  };
}

module.exports = serviceWeatherManager;
