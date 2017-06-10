# Expo on React Native 最佳项目实践

## 阶段一 

> 搭建环境，初始主要 ReactNative 各类组件，搭建好基本应用架构与文件架构

###  1.环境搭建

**本地**：`$ npm install create-react-native-app -g`安装本地RN项目构建Cli，条件允许可继续安装桌面客户端[Desktop Development Tool: XDE](https://docs.expo.io/versions/v15.0.0/introduction/installation.html) 

**调试运行**：在Android或IOS手机应用商店中下载安装 Expo 即可，之后的项目主要在实机中开发调试（简单粗暴~~）

**初始化项目**：在文件夹下`create-react-native-app <project-directory> [—verbose]`创建即可，直接运行`npm start`，即可得到可以在 Expo 中直接运行的项目URL和二维码，这样我们的项目就运行成功了，摇动手机即可打开调试选项，建议开发过程中打开 Live Reload，这样我们每次改动代码都会立刻反映在手机上（是不是很NB~~）。

### 2.底部Tab标签栏

> 这一步主要完成一个基本 app 中的底部 tab 标签栏的功能，同时也能借此完善我们的初始文件结构，更好的管理我们的代码，以便后面的开发。

首先还是在根目录下创建 `./src ` 文件夹，存放前端代码，具体如下：

```javascript
src
├── assets
│   └── img
├── components
├── screens
│   └── index.js
└── views
    ├── Find.js
    ├── Home.js
    ├── Order.js
    └── Profile.js
```

而在组件库的的选择上则选用当前最热门的`React Navigation`[戳这里](https://reactnavigation.org/docs/),文档里面介绍的很清楚，具体实现就直接看代码啊吧。



