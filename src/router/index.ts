// 本文件是路由的入口文件（倒入路由树结构并激活路由，也可以配置路由钩子）

import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // 首页（重定向，仅针对不带参数的路由）
  {
    path: '/',
    redirect: '/home',
  },

  // 首页（重定向，可以带参数）
  {
    path: '/',
    redirect: {
      name: 'home',
      query: {
        from: 'redirect',
      },
    },
  },

  // 首页
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue')    // 路由的模板文件
  },

  // 登录
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
    meta: { // 元信息
        title: '登录',
        isDisableBreadcrumbLink: true,  // 是否禁用面包屑链接
        isShowBreadcrumb: false,        // 是否显示面包屑
        addToSidebar: false,            // 是否加入侧边栏
        sidebarIcon: '',                // 设置侧边栏的图标(默认状态)
        sidebarIconAlt: '',             // 设置侧边栏的图标(展开状态)
        isNoLogin: true,                // 是否免登录（后台默认强制登录，设置为 true 则可以免登录访问，此处的登录页不需要校验）
      },
  },

  // 注册
  {
    path: '/',
    name: 'register',
    component: () => import('../views/register.vue')
  },

  // 重定向
  {
    path: '/error',
    redirect: '/',
  },

  // 二级路由
  {
    path: '/parent',
    name: 'parent',
    component: () => import('../views/register.vue'),
    children: [
        {
            path: 'child',
            name: 'child',
            component: () => import('../views/register.vue')
        }
    ]
  },

  // 路由别名
  /*
  {
    path: '/home',
    alias: '/index',
    name: 'home',
    component: () => import('../views/home.vue')
  },*/

  // 404路由
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/404.vue')
  },

    // 访问主域名时，根据用户的登录信息，重定向到不同的页面
    /*{
        path: '/',
        redirect: () => {
            // `loginInfo` 是当前用户的登录信息
            // 可以从 `localStorage` 或者 `Pinia` 读取
            const { groupId } = loginInfo
            const groupId = 0

            // 根据组别 ID 进行跳转
            switch (groupId) {
            // 管理员跳去仪表盘
            case 1:
                return '/dashboard'

            // 普通用户跳去首页
            case 2:
                return '/home'

            // 其他都认为未登录，跳去登录页
            default:
                return '/login'
            }
        },
    },*/
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router