import { Ref, ref, reactive, nextTick } from 'vue'

interface plan_list_item {
  disabled: boolean
  content: string
  checked: boolean
}

export default function () {
  const local_list: plan_list_item[] = JSON.parse(localStorage.getItem('plan_list') as string) || []
  const plan_list: plan_list_item[] = reactive(local_list)
  const content = ref('')

  const addplan = () => {
    plan_list.unshift({
      content: content.value,
      disabled: true,
      checked: false
    })
    localStorage.setItem('plan_list', JSON.stringify(plan_list))
    content.value = ''
  }

  const edit_plan = (index: number, instance: any) => {
    plan_list[index].disabled = false
    nextTick(() => {
      ;(instance?.refs['input_' + index] as HTMLElement).focus()
    })
  }

  const delete_plan = (index: number) => {
    plan_list.splice(index, 1)
    localStorage.setItem('plan_list', JSON.stringify(plan_list))
  }

  const save_plan = (index: number) => {
    plan_list[index] && (plan_list[index].disabled = true)
    nextTick(() => {
      localStorage.setItem('plan_list', JSON.stringify(plan_list))
    })
  }

  const keyup_seach = (event: KeyboardEvent) => {
    event.code === 'Enter' && addplan()
    event.code === 'Escape' && (content.value = '')
  }

  const keyup_plan = (event: KeyboardEvent, index: number, instance: any) => {
    event.code === 'Enter' && (event.target as HTMLElement).blur()
    if (event.code === 'Escape') {
      if (plan_list[index].content) {
        plan_list[index].content = ''
      } else {
        delete_plan(index)
        const surplus = index < plan_list.length ? index : index - 1
        if (surplus >= 0) {
          plan_list[surplus].disabled = false
          nextTick(() => {
            ;(instance?.refs['input_' + surplus] as HTMLElement).focus()
          })
        } else {
          ;(instance?.refs.todo as HTMLElement).focus()
        }
      }
    }
  }
  return { plan_list, content, addplan, edit_plan, delete_plan, save_plan, keyup_seach, keyup_plan }
}
