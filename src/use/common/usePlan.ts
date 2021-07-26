import { ref, reactive, nextTick } from 'vue'

interface plan_list_item {
  disabled: boolean
  content: string
  checked: boolean
}

export default function () {
  const local_list: plan_list_item[] = JSON.parse(localStorage.getItem('plan_list') as string) || []
  const plan_list: plan_list_item[] = reactive(local_list)
  const content = ref('')

  const add_plan = () => {
    plan_list.unshift({
      content: content.value,
      disabled: true,
      checked: false
    })
    localStorage.setItem('plan_list', JSON.stringify(plan_list))
    content.value = ''
  }

  const edit_plan = (event: KeyboardEvent, index: number, instance: any) => {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      plan_list[index].checked = !plan_list[index].checked
      return
    }
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

  const keyup_search = (event: KeyboardEvent) => {
    event.code === 'Enter' && add_plan()
    event.code === 'Escape' && (content.value = '')
  }

  const keyup_plan = (event: KeyboardEvent, index: number, instance: any) => {
    // console.log(event.code)
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
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      plan_list[index].checked = !plan_list[index].checked
      ;(event.target as HTMLElement).blur()
      nextTick(() => {
        ;(instance?.refs['show_input_' + index] as HTMLElement).focus()
      })
    }
  }
  return { plan_list, content, add_plan, edit_plan, delete_plan, save_plan, keyup_search, keyup_plan }
}
