import '@/styles/common.scss' // 引入初始化样式文件


import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import { createPinia } from 'pinia'
app.use(createPinia())


import router from './router'
app.use(router)


// 引入自定义的图片懒加载插件
import { imgLazyLoadPlugin } from '@/directives'
app.use(imgLazyLoadPlugin);


app.mount('#app') // 挂载必须在最后！！！