// export default () => <div>test</div>
import { withModifiers, defineComponent, ref } from 'vue'

export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const count = ref(0)
    // console.log('slots.default() ', slots.default() )
    const inc = () => {
      count.value++
      emit('click', count.value)
    }
    const list = ref<number[]>([1, 2, 3])
    return () => {
      const span = true ? <span>A</span> : <span>B</span>
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          点我{count.value}
          {/* <input v-focus type="text" v-model={count.value} /> */}
          {span}
          <ul>
            {list.value.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <div>{slots.default ? slots.default() : 'default'}</div>
          <div>{slots.title ? slots.title() : 'default title'}</div>
          {/* <div>{slots.suffix && slots.suffix({ name: "suffix" })}</div> */}
        </div>
      )
    }
  }
})
