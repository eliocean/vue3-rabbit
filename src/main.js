import '@/styles/common.scss' // 引入初始化样式文件


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

import { useIntersectionObserver } from '@vueuse/core'

// 自定义全局指令
app.directive('img-lazy', {
    mounted(el, binding) {
        // console.log(el, binding.value);
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                // console.log(isIntersecting);
                if (isIntersecting) {
                    // 进入视口区域
                    el.src = binding.value // 赋值图片url给src属性
                }
            },
        )
    }
});