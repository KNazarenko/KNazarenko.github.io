<template>
  <div id="app">
    <app-header @onUpdate="doUpdate" @onCityName="setCity"/>
    <app-city-list :cities="cities" @removeItem="deleteCity"/>      
  </div>
</template>

<script>
import AppHeader from "./components/Header/Header";
import AppCityList from "./components/CityList/CityList";

import { API } from "./api";
export default {
  name: "app",
  data: () => ({
    cities: []
  }),
  components: {
    AppHeader,
    AppCityList
  },
  methods: {
    setCity(city) {
      API.getCityByName(city)
        .then(r => r.json())
        .then(data => this.addCity(data))
        .catch(err => alert("Город не найден."));
    },
    addCity(data) {
      this.cities.push({
        cityName: data.name,
        temp: (data.main.temp - 272.15).toFixed(0),
        icon: data.weather[0].icon,
        id: data.id
      });
    },
    deleteCity(id) {
      this.cities = this.cities.filter(city => city.id !== id);
    },
    doUpdate() {
      const cities = [...this.cities];
      this.cities = [];
      cities.forEach(citie => {
        API.getCityByName(citie.cityName)
          .then(r => r.json())
          .then(data => {
            this.addCity(data);
          });
      });
    }
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        API.getWeather(latitude, longitude)
          .then(response => response.json())
          .then(data => this.addCity(data));
      });
    }
  }
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}

html {
  font-size: 12px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
