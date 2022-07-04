import { createApp } from 'vue'
import App from './App.vue'
// 引入主样式文件
import './index.scss'

// import Button from './button'
// import sheepZ from '../lib'
import Button from '../lib/button'

const app = createApp(App)
app.use(Button)
// app.use(sheepZ)

app.mount('#app')
