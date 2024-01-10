// 自定义图片懒加载插件
import { useIntersectionObserver } from '@vueuse/core'


export const imgLazyLoadPlugin = {
    install(app) {
        // 图片懒加载指令逻辑
        app.directive('img-lazy', {
            mounted(el, binding) {
                // console.log(el, binding.value);
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        // console.log(isIntersecting);
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value // 赋值图片url给src属性
                            stop(); // 停止监听
                        }
                    },
                )
            }
        });
    }
};