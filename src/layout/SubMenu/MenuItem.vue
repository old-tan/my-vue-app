<template>
  <el-sub-menu v-if="menuItem.child && menuItem.child.length" :index="menuItem.path">
    <template #title>
      <el-icon>
        <i-ep-star></i-ep-star>
      </el-icon>
      <span>{{ menuItem.title }}</span>
    </template>
    <MenuItem v-for="child in menuItem.child" :key="child.id" :menu-item="child" />
  </el-sub-menu>
  <el-menu-item v-else :index="menuItem.path" @click="(child) => handleClickMenu(child)">
    <el-icon>
      <!-- <i-ep-star></i-ep-star> -->
      <component :is="menuItem.icon" />
      <!-- <IEpUser /> -->
    </el-icon>
    <span>{{ menuItem.title }}</span>
  </el-menu-item>
</template>

<script setup>

const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
    default: () => { }
  }
})

onMounted(() => {
  // console.log(this.$route)
})
const router = useRouter()
const route = useRoute()
const handleClickMenu = (item) => {
  if (item.index !== route.path) {
    router.push({ path: item.index })
  }
}
</script>

<style lang="scss" scoped></style>
