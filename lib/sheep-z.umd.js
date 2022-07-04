;(function (e, t) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((e = typeof globalThis != 'undefined' ? globalThis : e || self),
      t((e['sheep-z'] = {}), e.Vue))
})(this, function (e, t) {
  'use strict'
  const u = {
    type: { type: String, default: 'secondary' },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  }
  var s = t.defineComponent({
      name: 'SButton',
      props: u,
      setup(n, { slots: o }) {
        const { type: d, size: f, disabled: r, block: p } = t.toRefs(n),
          c = p.value ? 's-btn--block' : ''
        return () =>
          t.createVNode(
            'button',
            {
              disabled: r.value,
              class: `s-btn ${c} s-btn--${d.value} s-btn--${f.value} `
            },
            [o.default ? o.default() : '\u6309\u94AE']
          )
      }
    }),
    l = {
      install(n) {
        n.component(s.name, s)
      }
    }
  const a = [l]
  var i = {
    version: '0.0.1',
    install(n) {
      a.forEach(o => n.use(o))
    }
  }
  ;(e.Button = s),
    (e.default = i),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})
