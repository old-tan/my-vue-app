<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="240px">
        <LayoutSubMenu />
      </el-aside>
      <el-container>
        <el-header height="150px" class="el_header">
          <LaoutHeader />
        </el-header>
        <el-main>
          <LayoutMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LayoutSubMenu from '@/layout/SubMenu/index.vue'
import LaoutHeader from '@/layout/Header/index.vue'
import LayoutMain from '@/layout/Main/index.vue'
</script>

<style lang="scss" scoped>
.el_header {
  background-color: aqua;
}
</style>
