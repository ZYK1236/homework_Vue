<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://vuejs.org/images/logo.png" alt="Vue logo"></a></p>

<p align="center">
  <a href="https://circleci.com/gh/vuejs/vue/tree/dev"><img src="https://img.shields.io/circleci/project/github/vuejs/vue/dev.svg?sanitize=true" alt="Build Status"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true" alt="Coverage Status"></a>
  <a href="https://npmcharts.com/compare/vue?minimal=true"><img src="https://img.shields.io/npm/dm/vue.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  <a href="https://chat.vuejs.org/"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg?sanitize=true" alt="Chat"></a>
  <br>
  <a href="https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c"><img src="https://app.saucelabs.com/buildstatus/vuejs" alt="Build Status"></a>
</p>

<h2 align="center">Supporting Vue.js</h2>
<h2 align="center">提供开箱即用的数据库大作业前端模版（vue版本） </h2>



## 1.项目介绍

* 项目技术栈: vuecli + vue + axios + antd + stylus + vue-router + vuex
* 特点1: 开箱即用 🚀，安装相关依赖环境后即可直接启动前端模版
* 特点2: 接口文件单独抽离 🐛 ，单独作为一个模块放在 `utils` 文件夹中，只要修改接口`baseUrl`即可与你的后端数据库链接 (前提是你的接口相关地址与参数和我这边提供的参考后端接口文档一致
* 特点3: 提供模版后端接口文档 📖，**如果想最大化的避免接触前端代码，建议您的接口相关地址与参数和我提供的参考后端接口文档一致**

****

项目目录介绍(只介绍可能会接触的，其他如果感兴趣自行学习 :D
```js
----
node_modules  //安装依赖包
public 

--
src 📁
  |utils 📁
    --
      |index.js //定义接口地址的baseUrl
  |api 📁
    --
      |index.js //定义接口地址baseUrl之后的路径
    
babel.config.js
package.json
vue.config.js //vue定制配置文件，在此项目可能会接触到配置跨域
yarn.lock
```


****
## 2.开始使用

**先写在前头的一些话：**

> 如果你不想折腾前端代码的话，后面有一份后端接口设计模版，请按照那个来设计你的接口和参数字段（因为我的前端代码就是按照那个模版后端接口来书写的），这样就基本不用去碰到前端的代码，直接启动前端模版，**修改下baseUrl**  (baseUrl是什么后面有介绍)，打开后端服务器就可以跑了



### 2.1 安装依赖
* 请下载node.js环境: https://nodejs.org/en/ 不用最新版，稳定版就👌
* 请下载yarn包管理器: https://classic.yarnpkg.com/zh-Hans/
* 请下载一个vscode  https://code.visualstudio.com/

请在安装完依赖后，打开powershell （mac是item）或者是 vscode终端后输入:

```js
yarn config set registry https://registry.npm.taobao.org/ 
```

更改 yarn 为国内的镜像源，快亿点



### 2.2 启动项目
**clone项目到本地之后请依次在vscode中的终端里面输入以下命令行:**

> vscode的终端是左上角那一行工具栏中的terminal，点击后选择 new terminal 即可打开终端，windows环境下用powershell打开项目文件夹输入以下命令行也可；Mac更容易了...item打开项目文件夹即可



```js
yarn //安装依赖
yarn serve  //启动项目
```

等待webpack📦打包成功后，输入终端中显示的预览地址并到浏览器上打开:
**如果您看到打开的网页显示 '恭喜您，前端模版启动完成' 等字样，说明前端模版已经启动完毕** 🎉🎉



### 2.3连接后端数据库
* 首先⚠️：请确保你本地的后端服务正常，后端用python，node，php，java都可以 **(因为是前后端分离，所以后端的所有代码都不会影响到前端，请牢记这一点)**
* 注意:如果你不知道什么是前后端分离，什么是接口，请自行谷歌/百度，接下来全文讲的基础都是在前后端分离以上
* 其次⚠️: 请确保你本地的后端服务器开启了CORS跨域，具体怎么开谷歌即可，几行代码的事；如果实在不能配置跨域，我会在后面说明怎么在前端配置跨域

算了..我讲下后端怎么开启CORS设置吧....实在是不想折腾前端代码了

python版本
```python
def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': 'https://www.example.com',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from Lambda!')
    };
```

php版本
```php
// 在php页面设置
// 设置允许其他域名访问
header('Access-Control-Allow-Origin:*');  
// 设置允许的响应类型 
header('Access-Control-Allow-Methods:POST, GET');  
// 设置允许的响应头 
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
```

java版本
```java
// 在任意配置类，返回一个新的CorsFilter Bean，并添加映射路径和具体的CORS配置信息。
package com.hehe.yyweb.config;

@Configuration
public class GlobalCorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        //1.添加CORS配置信息
        CorsConfiguration config = new CorsConfiguration();
          //放行哪些原始域
          config.addAllowedOrigin("*");
          //是否发送Cookie信息
          config.setAllowCredentials(true);
          //放行哪些原始域(请求方式)
          config.addAllowedMethod("*");
          //放行哪些原始域(头部信息)
          config.addAllowedHeader("*");
          //暴露哪些头部信息（因为跨域访问默认不能获取全部头部信息）
          config.addExposedHeader("*");

        //2.添加映射路径
        UrlBasedCorsConfigurationSource configSource = new UrlBasedCorsConfigurationSource();
        configSource.registerCorsConfiguration("/**", config);

        //3.返回新的CorsFilter.
        return new CorsFilter(configSource);
    }
}
```

****


#### （1）打开项目文件夹中的 `service.js`文件，先配置好你的后端服务器baseUrl，目录在：

```js
----
...
src 📁
	|...
	|utils 📁
  		|service.js
----
```
配置如下

```js
import qs from "qs";
import axios from 'axios'


const service = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? 
  		"你本地后端服务的接口baseURl" : 
  		"到时候你把后端部署到服务器后的域名",
  
  timeout: 50000, // 请求超时时间
});
```

举个例子 🌰: 你后端启动服务后部署在本地的8080端口: `localhost:8080`，这个就是你的 baseUrl ！！！

这个时候你的一些接口长这样 ： 

* 查看学生信息的接口: **localhost: 8080/student_info**  （**get/post参数我们先不管**



这个时候你的` baseUrl `就是 http://localhost:8080 **（记得加 http://**

然后你就在 **service.js** 中这样配置: 

```js
import qs from "qs";
import axios from 'axios'


const service = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? 
  		"http://localhost:8080" : 
  		"到时候你把后端部署到服务器后的域名",
  
  timeout: 50000, // 请求超时时间
});
```



#### （2）配置基于baseUrl后面的路径 （尽可能用大白话讲明白

什么是 baseUrl 后面的路径，说人话就是:

**你有一个查询学生信息的接口: http://localhost:8080/student_info：**

**那么 8080 后面那个 `/student_info`就是 baseUrl后面的路径**



然后我在把所有定义这些路径的代码抽离出来，放在了 `api` 文件夹里面的 `index.js`文件，方便统一管理和使用，文件目录: 

```js
----
src 📁
	|...
	|api 📁
		 |index.js
----
```

文件代码大概长这样（**以下只是demo代码，请以实际工程项目代码为准:** 

```js
import axios from '../utils/service'

/**
* @description getStudentInfo是一个方法，它负责调用 后端提供的 查询学生信息接口
*	@params { Object } payload是一个参数对象，里面有pageNum和pageSize两个属性
*/
const getStudentInfo = (payload) => {
  const { pageNum, pageSize } = payload		//拿到想要的值
  return axios({
    method: 'get',	//http get请求
    
    
    
    url: '/student_info',	// ⚠️这里就是你要修改的地方！！！！⚠️
    
    
    
    
    // params是传递的get请求参数
    params: {
      pageNum,
      pageSize
    }
  })
}

const api = {
  getStudentInfo,
}

export default api
```

**请注意⚠️：上面的代码不要求看懂！只要你知道baseUrl后面的路径在哪里修改就好了：在`url`:后面修改！！！！！**



因为每个人设计的接口长的不可能都一样:

有的人查询学生信息接口地址是 `http://..../message`，有的人是`http://..../info`等等等

**但是只要你知道 `/message` 和 `/info`等后缀地址在哪里改，就👌了**



请注意⚠️，**你后端服务器数据存储设计的字段要和前端请求参数的字段一致**，不然到时候请求数据的时候会报500错误码

**所以，我十分建议没有前端基础的同学按照我下面👇提供的后端接口设计模版来设计你的后端接口地址和请求参数字段**



> 如果你不想折腾前端代码的话，后面有一份后端接口设计模版，请按照那个来设计你的接口（因为我的前端代码就是按照那个模版后端接口来书写的），这样就基本不用去碰到前端的代码，直接启动前端模版，**修改下baseUrl**，打开后端服务器就可以跑了




****
## 3.后端设计接口模版

> 强烈建议按这个模版进行设计后端接口



### 3.1 请求学生信息接口





### 3.2请求学生成绩接口





### 3.3请求学生老师（哪位老师教他）接口





### 3.3查询快被开除的学生接口




****
## 4.常见问题

### 问：本地后端服务启动后，前端获取不到接口数据怎么办

答：**此项目有错误拦截处理机制，如果网络请求有异常会出现弹窗提示你，请注意查看**，如果看不懂错误提示，请看下面:

请先打开控制台(f12)，点击network窗口后选择 `XHR` 选项，刷新页面后查看调用接口详情

[![27RaR.png](https://wx2.sbimg.cn/2020/07/01/27RaR.png)](https://sbimg.cn/image/27RaR)



![27h7G.png](https://wx2.sbimg.cn/2020/07/01/27h7G.png)



**请重点查看 Request URL 和 status Code**

* 先看下 Request URL是不是你后端的接口对应地址，有没有写错，要么是baseUrl写错了，要么是后缀地址写错了
* 没写错地址的话 看下 Status Code: **如果是404说明你接口地址写错了，回到上一步；如果是5XX，要么是你后端服务器炸了，要么就是你前端请求的参数和后端规定的参数字段不一致导致的**



### 问：前端模版启动不起来怎么办

**答: 请到先检测下依赖环境是否安装成功**

命令后输入以下命令进行检测:

```js
yarn --version
// 1.22.4
node --version
// 12.xx.x
```

如果没有出现对应版本号，说明你环境没有安装成功，请重新安装



还有就是⚠️ 注意启动项目的2⃣️部曲:

* 先在vscode终端中输入 `yarn` 敲击回车
* 然后输入 `yarn serve`



**如果在 yarn 安装模块依赖的过程中出现报错，请删除项目文件夹中的 `node_module`文件夹并在终端中重新输入 yarn 进行安装**



### 问：怎么更改前端中的接口地址和参数

答: 在此项目，接口地址分为两部分

* baseUrl 即地址前缀，例如 http://localhost:8080
* 后缀地址，例如 http://localhost:8080/student  **后面的 `/student`**

baseUrl 在 **src 文件夹下的utils文件夹下的 service.js中进行修改**

后缀地址在 **src 文件夹下的 api 文件夹下的 index.js中修改**



