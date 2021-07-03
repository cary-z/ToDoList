<template>
  <n-layout>
    <n-layout-content :native-scrollbar="false">
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer>
      <FooterBar />
    </n-layout-footer>
  </n-layout>
</template>

<script lang="ts">
import Home from './home/Home.vue'
import FooterBar from '../components/FooterBar.vue'
export default {
  components: {
    Home,
    FooterBar
  }
}
</script>

<style lang="scss" scoped>
.n-layout ::v-deep .n-layout-scroll-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.n-layout-footer {
  /* position: fixed; */
  height: 8vh;
  background: rgba(128, 128, 128, 0.5);
}
.n-layout-content {
  flex: 1; 
  background: #fff;
}
</style>