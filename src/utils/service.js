
import axios from "axios";
import store from "../store/index"
import { message } from "ant-design-vue"

const service = axios.create({
  // api的base_url
  baseURL: process.env.NODE_ENV == "development" ? store.state.baseUrl : "/", 
  timeout: 50000, // 请求超时时间
});

// 添加请求拦截器
service.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    console.log("加载中...");
    //对post的内容序列化
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
  (response) => {
    //成功请求到数据
    return response.data;
  },
  (error) => {
    //响应错误处理
    
    message.error(`接口地址: ${error.config.url}出错了,原因: ${error.message}`)
    console.log(`接口地址: ${error.config.url}出错了,原因: ${error.message}`);
    
    return Promise.reject(error);
  }
);

export default service;
