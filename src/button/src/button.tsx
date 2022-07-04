import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : ''
    return () => {
      return (
        <button
          disabled={disabled.value}
          class={`s-btn ${blockClass} s-btn--${type.value} s-btn--${size.value} `}
        >
          {slots.default ? slots.default() : '按钮'}
        </button>
      )
    }
  }
})
