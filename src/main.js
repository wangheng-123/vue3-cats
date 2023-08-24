//引入初始化样式资源
import '@/styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//测试接口函数
// import {getCategory} from '@/apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })

import App from './App.vue'
import router from './router'

//引入懒加载指令插件并且注册
import {lazyPlugin} from "@/directives"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(lazyPlugin)

app.mount('#app')

