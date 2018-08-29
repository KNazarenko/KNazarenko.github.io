<template>
    <nav class="nav">
                 
          <el-button type="success" @click="newUpdate">Update</el-button>
          <el-button type="success" @click="toggleInput">Add</el-button>
                
          <input  
            v-focus          
            type="text"
            class="newCity"
            name="input"
            placeholder="Type new city"
            v-if="isShow"
            @keyup.enter="getCity"                       
          />

    </nav>
</template>

<script>
export default {
  data: () => ({
    isShow: false
  }),

  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },

  methods: {
    toggleInput() {
      const input = (this.isShow = !this.isShow);
    },
    getCity({ target }) {
      const cityName = target.value;
      this.$emit("onCityName", cityName);
      this.isShow = !this.isShow;
    },
    newUpdate() {
      this.$emit("onUpdate");
    }
  }
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.el-button + .el-button {
  margin-left: 30px;
}

.newCity {
  position: absolute;
  bottom: -70px;
  right: 0;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 6px;
}
</style>
