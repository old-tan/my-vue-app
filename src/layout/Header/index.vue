<template>
  <div>
    <h2>Header</h2>
    <el-cascader v-model="defaultValue" :options="options" :show-all-levels="false" :props="defaultProps"
      @change="handleChange" clearable />
    <p>Selected Value: {{ defaultValue }}</p>
  </div>
</template>

<script setup>
// import { useMenu } from "@/hooks/useMenu"
import { useAuthStore } from '@/store/auth'
const defaultValue = ref('0')
const store = useAuthStore()
const defaultProps = {
  multiple: false,
  checkStrictly: true,
}
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
const handleChange = (payload) => {
  defaultValue.value = payload[payload.length - 1]
  // useMenu(defaultValue.value)
  store.SetCurRegional(defaultValue.value) // asyncRoutes 指新值
  defaultValue.value === '0'
    ? store.SetMenu(asyncRoutes)
    : defaultValue.value === 'component'
      ? store.SetMenu(asyncRoutes.slice(0, 2))
      : store.SetMenu(asyncRoutes.slice(2))
}


const options = [
  {
    value: '0',
    label: '全部',
    children: [],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
</script>

<style lang="scss" scoped></style>
