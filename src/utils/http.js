// axios 接口请求封装
import axios from "axios";
import { ElMessage } from "element-plus";

const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5 * 1000 //timeout 5s
});

// 添加axios请求拦截器
httpInstance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, error => {
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  return Promise.reject(error);
})

export default httpInstance;