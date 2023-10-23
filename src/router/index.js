import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue'
const history = createWebHistory()
const HOME_URL = "/index"

const asyncRoutes = [
  {
    id: '1',
    parent_id: '0',
    title: "监测概况",
    icon: shallowRef(IEpStar),
    path: '/MonitoringOverview',
    component: () => import('@/views/MonitoringOverview/index.vue'),
    children: []
  },
  {
    id: '2',
    parent_id: '0',
    title: "区域分析",
    icon: shallowRef(IEpStar),
    path: '/RegionalAnalysis',
    component: () => import('@/views/RegionalAnalysis/index.vue'),
    children: []
  },
  {
    id: '3',
    parent_id: '0',
    title: "平台分析",
    icon: shallowRef(IEpStar),
    path: '/PlatformAnalysis',
    component: () => import('@/views/PlatformAnalysis/index.vue'),
    children: []
  },
  {
    id: '4',
    parent_id: '0',
    title: "违规黑榜",
    icon: shallowRef(IEpStar),
    path: '/IllegalBlacklist',
    component: () => import('@/views/IllegalBlacklist/index.vue'),
    children: []
  },
]
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: HOME_URL,
    meta: {
      title: '首页',
      icon: '',
    },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: '',
          affix: true
        }
      },
      ...asyncRoutes,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
];
const router = createRouter({
  history,
  routes,
})
export default router
