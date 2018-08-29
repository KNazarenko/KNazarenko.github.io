const WEATHER_PATH = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "22603d94d2580dd4da189c31ff13a4a6";
export class API {
  static getWeather(long, lat) {
    return fetch(`${WEATHER_PATH}?lat=${long}&lon=${lat}&appid=${API_KEY}`);
  }
  static getCityByName(name) {
    return fetch(`${WEATHER_PATH}?q=${name}&appid=${API_KEY}`);
  }
}
