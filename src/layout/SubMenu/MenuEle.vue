<template>
  <div>
    <el-menu default-active="'1-1-1'" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
      :collapse="isCollapse">
      <MenuItem v-for="item in menuData" :key="item.id" :menu-item="item" />
    </el-menu>
  </div>
</template>

<script setup>
const { menuData } = defineProps({
  menuData: {
    type: Array,
    required: true,
    default: () => []
  },
  isCollapse: {
    type: Boolean,
    default: () => false
  }
})

import MenuItem from './MenuItem.vue'

const route = useRoute()
const router = useRouter()
// console.log(route)
// console.log(router)
onMounted(() => {
  // console.log(menuData)
})
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>
