import { defineComponent, toRefs, createVNode } from 'vue'
const buttonProps = {
  type: {
    type: String,
    default: 'secondary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
}
var Button = defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? 's-btn--block' : ''
    return () => {
      return createVNode(
        'button',
        {
          disabled: disabled.value,
          class: `s-btn ${blockClass} s-btn--${type.value} s-btn--${size.value} `
        },
        [slots.default ? slots.default() : '\u6309\u94AE']
      )
    }
  }
})
var ButtonPlugin = {
  install(app) {
    app.component(Button.name, Button)
  }
}
const installs = [ButtonPlugin]
var entry = {
  version: '0.0.1',
  install(app) {
    installs.forEach(p => app.use(p))
  }
}
export { Button, entry as default }
