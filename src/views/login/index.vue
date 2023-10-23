<template>
  <div>
    <div class="login-account">
      <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
        <el-form-item label="账号" prop="name">
          <el-input v-model="account.name" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="account.password" show-password />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="loginForm(formRef)">
        登录
      </el-button>
    </div>
  </div>
</template>

<script setup>
// import { useUserStore } from '@/store/userStore'
// const store = useUserStore()
// console.log(store.token)

import { rules } from './config/account-config'


const asyncRoutes = [
  {
    id: '1',
    parent_id: '0',
    title: "监测概况",
    icon: IEpStar,
    path: '/MonitoringOverview',
    component: () => import('@/views/MonitoringOverview/index.vue'),
    children: []
  },
  {
    id: '2',
    parent_id: '0',
    title: "区域分析",
    icon: IEpStar,
    path: '/RegionalAnalysis',
    component: () => import('@/views/RegionalAnalysis/index.vue'),
    children: []
  },
  {
    id: '3',
    parent_id: '0',
    title: "平台分析",
    icon: IEpStar,
    path: '/PlatformAnalysis',
    component: () => import('@/views/PlatformAnalysis/index.vue'),
    children: []
  },
  {
    id: '4',
    parent_id: '0',
    title: "违规黑榜",
    icon: IEpStar,
    path: '/IllegalBlacklist',
    component: () => import('@/views/IllegalBlacklist/index.vue'),
    children: []
  },
]
import { useAuthStore } from '@/store/auth'
const store = useAuthStore()
store.SetMenu(asyncRoutes) // asyncRoutes 指新值


const account = reactive({
  name: 'admin',
  password: '',
})
const formRef = ref()

const loginForm = async (formEl) => {
  if (!formRef) return
  await formRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      //
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="scss" scoped></style>
