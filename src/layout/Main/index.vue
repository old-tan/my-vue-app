<template>
  <router-view v-slot="{ Component, route }" v-if="isShow">
    <transition appear name="fade-transform" mode="out-in">
      <KeepAlive>
        <component :is="Component" :key="route.path" />
      </KeepAlive>
    </transition>
  </router-view>
</template>

<script setup>
// const settingsStore = useSettingsStore()
const isShow = ref(true)
// watch(
//   () => settingsStore.refresh,
//   () => {
//     isShow.value = false
//     nextTick(() => {
//       isShow.value = true
//     })
//   },
// )

</script>

<style lang="scss" scoped></style>
