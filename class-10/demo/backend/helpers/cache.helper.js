class Cache {
  constructor(data) {
    this.forecast = [];
    this.movies = [];
    this.timeStamp = Date.now();
  }
}

module.exports = Cache;

/**
 *
 * {
  "forecast":[{
    "lat":"value",
    "lon": "value",
    "data": [
      {
        "date":"valid_data",
        "description":"description Data"
      }
    ]
  },
  {
    "lat":"value",
    "lon": "value",
    "data": [
      {
        "date":"valid_data",
        "description":"description Data"
      }
    ]
  }],
  "movies":[{
    name:'value',
    result:[{

    }]
  }]
}
 */