function serviceWeatherManager() {
  this.validateLogicObject = "";
  this.setStrategy = (validateLogicObject) => {
    this.validateLogicObject = validateLogicObject;
  };
  this.getWeatherByCity = (city) => {
    return this.validateLogicObject.getWeatherByCity(city);
  };
  this.getWeatherByCoors = (lat, long) => {
    return this.validateLogicObject.getWeatherByCoors(lat, long);
  };
}

module.exports = serviceWeatherManager;
