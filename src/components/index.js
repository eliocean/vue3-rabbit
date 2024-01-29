// 把此目录下所以组件进行全局注册
import ImageView from './ImageView/index.vue';
import XtxSku from './XtxSku/index.vue';

export const componentPlugin = {
    install(app) {
        app.component('XtxImageView', ImageView);
        app.component('XtxSku', XtxSku);
    }
}