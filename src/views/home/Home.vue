<template>
  <n-card :bordered="false">
    <template v-slot:header>
      <div class="header">ToDoList</div>
    </template>
    <n-grid :cols="1">
      <n-gi>
        <n-input v-model:value="content"
                 @keyup="keyup_search($event)"
                 ref="todo"
                 type="input"
                 clearable
                 placeholder="今天需要做什么">
          <template #suffix>
            <div class="me-1">
              <n-icon v-show="content !== ''"
                      @click="add_plan"
                      style="cursor: pointer;">
                <Add />
              </n-icon>
            </div>
          </template>
        </n-input>
      </n-gi>
    </n-grid>
    <n-grid class="mt-2"
            :y-gap="3"
            :cols="1">
      <n-gi v-for="(item,index) in plan_list"
            :key="'plan_'+index">
        <n-input v-show="item.disabled"
                 v-model:value="item.content"
                 @dblclick="edit_plan($event,index,instance)"
                 @keyup="edit_plan($event,index,instance)"
                 :ref="'show_input_'+index"
                 :placeholder="'计划'+(index+1)"
                 readonly
                 type="text">
          <template #prefix>
            <n-checkbox :key="'check_'+index"
                        @dblclick.stop=""
                        @update:checked="save_plan(index)"
                        v-model:checked="item.checked">
            </n-checkbox>
          </template>
          <template #suffix>
            <n-icon @click="delete_plan(index)"
                    @dblclick.stop=""
                    style="cursor: pointer;">
              <Close />
            </n-icon>
          </template>
        </n-input>
        <n-input v-show="!item.disabled"
                 v-model:value="item.content"
                 :key="'input_'+index"
                 :ref="'input_'+index"
                 type="input"
                 @keyup="keyup_plan($event,index,instance)"
                 @blur="save_plan(index)"
                 clearable
                 :placeholder="'计划'+(index+1)">
        </n-input>
      </n-gi>
    </n-grid>
  </n-card>
</template>

<script lang="ts">
import { getCurrentInstance } from 'vue'
import usePlan from '../../use/common/usePlan'
import { Close, Add } from '@vicons/ionicons5'
export default {
  components: {
    Close,
    Add
  },
  setup() {
    const instance = getCurrentInstance()
    const { plan_list, content, add_plan, edit_plan, save_plan, delete_plan, keyup_search, keyup_plan } = usePlan()
    return {
      instance,
      plan_list,
      content,
      add_plan,
      edit_plan,
      save_plan,
      delete_plan,
      keyup_search,
      keyup_plan
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
:deep(.n-input.n-input--disabled .n-input__input-el) {
  color: black !important;
}
</style>