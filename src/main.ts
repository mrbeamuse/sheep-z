import { createApp } from 'vue'
import App from './App.vue'
// 引入主样式文件
import './index.scss'

import Button from './button'

const app = createApp(App)
app.use(Button)

app.mount('#app')
