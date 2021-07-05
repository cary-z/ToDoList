<template>
  <n-menu :value="checkactive()"
          :on-update:value="handleUpdateValue"
          :options="menuOptions"
          mode="horizontal" />
</template>

<script lang="ts">
import { h } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/router'
import { NIcon } from 'naive-ui'
import { List, CalendarClearSharp, Person } from '@vicons/ionicons5'
function renderIcon(icon: any) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
interface menuOptions_item {
  label: string
  key: string
  path: string
  icon: any
}

const menuOptions: menuOptions_item[] = [
  {
    label: '任务',
    key: '/home',
    icon: renderIcon(List),
    path: '/home'
  },
  {
    label: '其他',
    key: '/sign-in',
    icon: renderIcon(CalendarClearSharp),
    path: '/sign-in'
  },
  {
    label: '我的',
    key: '/profile',
    icon: renderIcon(Person),
    path: '/profile'
  }
]
export default {
  components: {
    List,
    Person,
    CalendarClearSharp
  },
  setup() {
    const route = useRoute()
    const checkactive = () => {
      return route.path
    }
    return {
      menuOptions,
      handleUpdateValue(key: string, item: menuOptions_item) {
        router.push(item.path)
      },
      checkactive
    }
  }
}
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