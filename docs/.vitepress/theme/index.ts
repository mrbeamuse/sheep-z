// import Theme from 'vitepress/dist/client/theme-default'
import Theme from 'vitepress/theme'
// import Button from '../../../sheep-ui/button/src/Button'
import  HelloWorld  from '../../../src/components/HelloWorld.vue';
import  Test  from '../../../src/components/Test';
// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
export default {
  ...Theme,
  enhanceApp({ app }) {
    // 注册组件
    app.component('HelloWorld', HelloWorld)
    app.component('Test', Test)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}