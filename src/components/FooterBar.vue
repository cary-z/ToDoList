<template>
    <n-menu :value="checkactive()" @update:value="handleUpdateValue" :options="menuOptions" mode="horizontal"/>
</template>

<script>
import { h ,defineComponent  } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/router.ts'
import { NIcon  } from 'naive-ui'
function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: '主页',
    key: '/home',
    // icon: renderIcon(),
    path: '/home'
  },
  {
    label: '其他',
    key: '/sign-in',
    // icon: renderIcon(),
    path: '/sign-in'
  },
  {
    label: '我的',
    key: '/profile',
    // icon: renderIcon(),
    path: '/profile'
  }
]
export default defineComponent({
    setup () {
        const route = useRoute()
        const checkactive = () => {
            return route.path
        }
        return {
        menuOptions,
        handleUpdateValue (key, item) {
            router.push(item.path)
        },
        checkactive
    }
  }
})
</script>

<style scoped>
.n-menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>