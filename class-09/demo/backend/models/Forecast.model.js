class Forecast {
  constructor(weather) {
    this.date = weather.valid_date;
    this.description = weather.weather.description;
  }
}

module.exports = Forecast;
