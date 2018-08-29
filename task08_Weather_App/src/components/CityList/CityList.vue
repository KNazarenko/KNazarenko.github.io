<template>
  <div class="main__wrap">
    <ul class="list">
        <app-city-item
            v-for="(city, key) in cities"
            :key="key"
            :city="city.cityName"
            :temp="city.temp"
            :icon="city.icon"
            :id="city.id"
            @removeItem="onRemoveItem"
        />
    </ul>
  </div>
</template>

<script>
import AppCityItem from "./CityItem";
export default {
  props: ["cities"],

  components: {
    AppCityItem
  },

  methods: {
    onRemoveItem(id) {
      this.$emit("removeItem", id);
    }
  }
};
</script>

<style scoped>
.main__wrap {
  display: flex;
  margin: 0 auto;
  padding: 70px 0;
  width: 1000px;
  /* justify-content: space-between; */
  align-items: center;
}

.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* padding: 50px 200px; */
  color: black;
}
</style>
