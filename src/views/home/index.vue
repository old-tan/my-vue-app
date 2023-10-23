<template>
  <div>
    <h1>Main 区域内容</h1>
    <h2>一、测试自动导入 ref 等</h2>
    <div>{{ message }}</div>
    <h2>二、测试自动导入 element 组件</h2>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <h2>三、测试自动导入 icon: i-ep-xx</h2>
    <i-ep-add-location />
    <i-ep-aim />
    <h2>Main</h2>
    <div>
      <h3>{{ msg }}</h3>
      <h3>{{ count }}</h3>
    </div>
  </div>
</template>
<script setup>
const message = ref('ref messsage')
const msg = ref('今天天气好晴朗')
const count = ref(710)
</script>

<style scoped></style>
