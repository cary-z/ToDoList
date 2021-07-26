<template>
  <n-menu :value="checkactive()"
          :on-update:value="handleUpdateValue"
          :options="menuOptions"
          mode="horizontal" />
</template>

<script lang="ts">
import { h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { List, NewspaperOutline, CalendarClearSharp, Person } from '@vicons/ionicons5'
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
    label: '快捷键说明',
    key: '/explain',
    icon: renderIcon(NewspaperOutline),
    path: '/explain'
  },
  // {
  //   label: '其他',
  //   key: '',
  //   icon: renderIcon(CalendarClearSharp),
  //   path: ''
  // },
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
    NewspaperOutline,
    CalendarClearSharp
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    return {
      menuOptions,
      handleUpdateValue(key: string, item: menuOptions_item) {
        router.push(item.path)
      },
      checkactive() {
        return route.path
      }
    }
  }
}
</script>
<style  lang="scss" scoped>
$item-color: rgba(45, 45, 167, 0.8);
.n-menu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.n-menu :deep(.n-menu-item--selected) .n-menu-item-content {
  .n-menu-item-content__icon,
  .n-menu-item-content-header {
    color: $item-color;
  }
}
.n-menu :deep(.n-menu-item-content):hover {
  .n-menu-item-content__icon,
  .n-menu-item-content-header {
    color: $item-color;
  }
}
</style>