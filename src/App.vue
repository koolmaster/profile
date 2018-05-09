<template>
  <div id="app" class="content">
    
    <router-view></router-view>
   </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  name: "app",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style> 
