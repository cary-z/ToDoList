<template>
  <n-card :bordered="false">
    <template v-slot:header>
      <div class="header">ToDoList</div>
    </template>
    <n-grid :cols="1">
      <n-gi>
        <n-input v-model:value="value"
                 @keyup.enter="addplan"
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
                 v-model:value="item.value"
                 @dblclick="edit_plan(index)"
                 @keyup="edit_plan(index)"
                 :placeholder="'计划'+(index+1)"
                 readonly
                 type="text"></n-input>
        <n-input v-show="!item.disabled"
                 v-model:value="item.value"
                 :ref="'input_'+index"
                 type="input"
                 @keyup.enter="$event.target.blur()"
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
  value: string
}

import { Ref, ref } from 'vue'
export default {
  setup() {
    const plan_list: Ref<plan_list_item[]> = ref([])
    let value = ref('')
    return {
      plan_list,
      value
    }
  },
  methods: {
    addplan() {
      ;(this as any).plan_list.unshift({
        value: (this as any).value,
        disabled: true
      })
      ;(this as any).value = ''
    },
    edit_plan(index: number) {
      ;(this as any).plan_list[index].disabled = false
      setTimeout(() => {
        ;(this as any).$refs['input_' + index].focus()
      })
    }
  }
}
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