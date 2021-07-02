<template>
  <n-layout>
    <n-layout-content :native-scrollbar="false">
      <Home />
    </n-layout-content>
    <n-layout-footer>
      <div>假装我是底部栏</div>
    </n-layout-footer>
  </n-layout>
</template>

<script>
import Home from './home/Home.vue'
export default {
  components: {
    Home
  }
}
</script>

<style scoped>
.n-layout >>> .n-layout-scroll-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.n-layout-footer {
  /* position: fixed; */
  height: 10vh;
  background: rgba(128, 128, 128, 0.5);
}
.n-layout-content {
  /* flex: 1; */
  background: #fff;
}
</style>