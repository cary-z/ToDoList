<template>
  <h1>{{ msg }}</h1>
  <p>
    <n-button type="info"
              @click="count++">count is: {{ count }}</n-button>
  </p>
  <p>
    <n-button type="primary"
              @click="count*=2">count double</n-button>
  </p>
</template>

<script lang="ts">
import { ref, watch, onBeforeMount, onMounted, defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const count = ref(0);
    console.log("setup", count.value);
    // watch(count, (newVal) => {
    //   console.log("setup watch count:", newVal);
    // });
    onBeforeMount(() => {
      count.value++;
      console.log("setup onBeforeMount", count.value);
    }),
      onMounted(() => {
        count.value++;
        console.log("setup onMounted", count.value);
      });
    return { count };
  },
  // watch: {
  //   count(newVal) {
  //     console.log("watch count:", newVal);
  //   },
  // },
  beforeMount() {
    this.count++;
    console.log("beforeMount", this.count);
  },
  mounted() {
    this.count++;
    console.log("mounted", this.count);
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
