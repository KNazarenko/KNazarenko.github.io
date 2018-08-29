<template>
    <header>
      <div class="header__wrap">
        <app-logo />
        <app-nav @onUpdate="doUpdate" @onCityName="getCity"/>
      </div>
    </header>    
</template>

<script>
import AppLogo from "./Logo";
import AppNav from "./Nav";

export default {
  name: "app-header",
  components: {
    AppLogo,
    AppNav
  },
  methods: {
    getCity(city) {
      this.$emit("onCityName", city);
    },
    doUpdate() {
      this.$emit("onUpdate");
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100px;
  background: rgb(59, 57, 52);
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
}

.header__wrap {
  display: flex;
  margin: 0 auto;
  width: 1000px;
  justify-content: space-between;
  align-items: center;
}
</style>
