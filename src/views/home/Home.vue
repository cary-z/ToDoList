<template>
  <n-card :bordered="false">
    <template v-slot:header>
      <div class="header">ToDoList</div>
    </template>
    <n-grid :cols="1">
      <n-gi>
        <n-input v-model:value="content"
                 @keyup="keyup_seach($event)"
                 type="input"
                 clearable
                 placeholder="今天需要做什么" />
      </n-gi>
    </n-grid>
    <n-grid class="mt-2"
            :y-gap="3"
            :cols="1">
      <n-gi v-for="(item,index) in plan_list"
            :key="'plan_'+index">
        <n-input v-show="item.disabled"
                 v-model:value="item.content"
                 @dblclick="edit_plan(index)"
                 @keyup="edit_plan(index)"
                 :placeholder="'计划'+(index+1)"
                 readonly
                 type="text">
                 <template v-slot:prefix>
                    <n-checkbox v-model:checked="item.checked">
                    </n-checkbox>
                 </template>
                 </n-input>
        <n-input v-show="!item.disabled"
                 v-model:value="item.content"
                 :ref="'input_'+index"
                 type="input"
                 @keyup="keyup_plan($event,index)"
                 @blur="item.disabled = true"
                 clearable
                 :placeholder="'计划'+(index+1)">
        </n-input>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script lang="ts">
interface plan_list_item {
  disabled: boolean
  content: string
  checked:boolean
}

import { Ref, ref,defineComponent,getCurrentInstance  } from 'vue'
export default defineComponent({
  setup() {
    const instance = getCurrentInstance()
    const plan_list: Ref<plan_list_item[]> = ref([])
    let content = ref('')

    const addplan = () => {
      plan_list.value.unshift({
        content: content.value,
        disabled: true,
        checked: false
      })
      content.value = ''
    }

    const edit_plan = (index: number) => {
      plan_list.value[index].disabled = false
      setTimeout(() => {
        (instance?.refs['input_' + index] as HTMLElement).focus()
      })
    }

    const  keyup_seach = (event:KeyboardEvent) => {
      event.code === 'Enter' && addplan()
      event.code === 'Escape' && (content.value = '')
    }

    const keyup_plan = (event:KeyboardEvent,index:number) => {
      event.code === 'Enter' && ((event.target as HTMLElement).blur())
      event.code === 'Escape' && (plan_list.value[index].content = '')
    }
    return {
      plan_list,
      content,
      addplan,
      edit_plan,
      keyup_seach,
      keyup_plan
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  font-size: 25px;
}
.n-input--disabled {
  background-color: #fff;
}
::v-deep .n-input.n-input--disabled .n-input__input-el {
  color: black !important;
}
</style>