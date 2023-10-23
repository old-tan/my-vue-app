<template>
  <div class="sub_menu">
    <h2>SubMenu</h2>
    <div>
      <el-icon v-if="isCollapse" @click="isCollapse = !isCollapse">
        <IEpExpand />
      </el-icon>
      <el-icon v-else @click="isCollapse = !isCollapse">
        <IEpFold />
      </el-icon>
    </div>
    <el-scrollbar height="100vh">
      <MenuEle :menuData="store.asyncMenu" :is-collapse="isCollapse" />
    </el-scrollbar>
  </div>
</template>

<script setup>
import MenuEle from './MenuEle.vue'
import { useAuthStore } from '@/store/auth'
const store = useAuthStore()

const isCollapse = ref(false)
watch(() => store.curRegional, (newVal) => {
  console.log('newVal----', newVal)
  console.log(store.asyncMenu)
})

</script>

<style lang="scss" scoped>
.sub_menu {
  padding: 0 10px;
}
</style>
