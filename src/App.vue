<template>
  <div id="app" class="content">
    <cube-spin></cube-spin>
    <router-view></router-view>
   </div>
</template>

<script>
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import CubeSpin from './vue-loading-spinner/components/Cube';
export default {
  name: "app",
  components: {
    FontAwesomeIcon,
    CubeSpin
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
</style> 
