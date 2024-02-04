// axios 接口请求封装
import axios from "axios";
import { ElMessage } from "element-plus";
import { uesUserStore } from '@/stores/user'
import router from '@/router'

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5 * 1000 //timeout 5s
});


// 添加axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  const userStore = uesUserStore();
  const token = userStore.userInfo.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));



// 添加axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, error => {
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })

  // 401 token过期处理
  if (error.response.status === 401) {
    const userStore = uesUserStore();
    userStore.clearUserInfo();
    router.push("/login");
  }

  return Promise.reject(error);
})

export default httpInstance;