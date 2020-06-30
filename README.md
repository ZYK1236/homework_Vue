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
* 项目技术栈: vuecli + vue + axios + ant design of vue + stylus + vue-router + vuex
* 特点1: 开箱即用 🚀，安装相关依赖环境后即可直接启动前端模版
* 特点2: 接口文件单独抽离，单独作为一个模块放在 `utils` 文件夹中，只要修改接口`baseUrl`即可与你的后端数据库链接 🔗  （前提是你的接口相关地址与参数和我这边提供的参考后端接口文档一致
* 特点3: 提供参考后端接口文档，如果想最大化的避免接触前端代码，建议您的接口相关地址与参数和我提供的参考后端接口文档一致

项目目录介绍(只介绍可能会接触的，其他如果感兴趣自行学习):
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

## 2.开始使用
### 2.1 安装依赖
* 请下载node.js环境: https://nodejs.org/en/ 不用最新版，稳定版就👌
* 请下载yarn包管理器: https://classic.yarnpkg.com/zh-Hans/
* 请下载一个vscode :)

### 2.2 启动项目
clone项目到本地之后请依次在vscode中的终端里面输入以下命令行:
```js
yarn + 回车
yarn serve
```

等待webpack📦打包成功后，输入终端中显示的预览地址到浏览器上打开:
如果您看到打开的网页显示 '恭喜您，前端模版启动完成' 等字样，说明前端模版已经启动完毕

### 2.3连接后端数据库
* 首先⚠️：请确保你本地的后端服务正常，后端用python，node，php，java都可以 **(因为是前后端分离，所以后端的所有代码都不会影响到前端，请牢记这一点)**
* 其次⚠️: 请确保你本地的后端服务器开启了CORS跨域，具体怎么开谷歌即可，一行代码的事；如果实在不能配置跨域，我会在后面说明怎么在前端配置









