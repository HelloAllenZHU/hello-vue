/* 
 * 本文件为vue项目的main入口文件
 */

// 导入vue框架里面的createApp函数
import { createApp } from 'vue'

// 导入本项目的App.vue组件
import App from './App.vue'

// 导入本项目的主css
import './assets/main.css'

// 导入路由组建(本行导入出错)
//import Router from 'vue-router'

// 导入(自己定义的)路由主文件
import router from './router'

// 导入element-plus框架
import ElementPlus from 'element-plus'

// 导入element-plus所有的icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 导入element-plus本地化(中文)处理(本行导入出错)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 导入element-plus框架的css
import 'element-plus/dist/index.css'

// 创建vue app
const app = createApp(App)

// 使用element-plus框架/组件/库
app.use(ElementPlus, { 
    zhCn,         // 中文设置
    size: 'small', 
    zIndex: 3000 
})

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
app.component(key, component)
}

// 使用router组件
app.use(router)

// 将app实例挂在到index.html中的#app上
app.mount('#app')
