import '@/styles/common.scss' // 引入初始化样式文件


import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)


import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)


import router from './router'
app.use(router)


// 引入自定义的图片懒加载插件
import { imgLazyLoadPlugin } from '@/directives'
app.use(imgLazyLoadPlugin);

// 引入全局组件注册插件
import { componentPlugin } from '@/components'
app.use(componentPlugin);

app.mount('#app') // 挂载必须在最后！！！