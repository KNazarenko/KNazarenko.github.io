<template>
    <li class="item">
        <div class="wrapper">
            <!-- temperature and icon -->
            <div class="city_name">{{city}}</div>

            <div class="wrap">
                <div class="weather_icon">
                  <img :src="`http://openweathermap.org/img/w/${icon}.png`" alt="#" class="icon">
                </div>
                <div class="number">{{temp}}</div>
            </div>            

            <el-button type="info" plain size="mini" class="delete" @click="onRemoveItem(id)">x</el-button>               
        </div>
    </li>
</template>

<script>
export default {
  props: ["city", "temp", "icon", "id"],

  methods: {
    onRemoveItem(id) {
      this.$emit("removeItem", id);
    }
  }
};
</script>

<style scoped>
.item {
  width: 300px;
  height: 180px;
  border: 1px solid lightgray;
  border-radius: 3px;
  list-style: none;
  margin-bottom: 30px;
  margin-left: 50px;
}

.item:nth-child(3n + 1) {
  margin-left: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  padding: 30px 40px 20px;
  align-items: center;
  /* justify-content: space-around; */
  height: 100%;
  position: relative;
}

.wrap {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
}

.number {
  font-size: 6rem;
  line-height: 36px;
  color: dimgray;
}

.city_name {
  font-size: 2.5rem;
  color: dimgray;
}

.icon {
  width: 100px;
  height: 100px;
}

.delete {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 5px;
  margin-right: 5px;
}
</style>
