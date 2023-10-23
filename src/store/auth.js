import { defineStore } from 'pinia'
// 导出仓库方法
export const useAuthStore = defineStore("auth", {
  state: () => ({
    asyncMenu: [],
    RegionalData: [],
    curRegional: '0'
  }),
  getters: {

  },
  actions: {
    // menu
    SetMenu(value) {
      this.asyncMenu = value
    },
    // regional
    SetRegional(value) {
      this.RegionalData = value
    },
    // curRegional
    SetCurRegional(value) {
      this.curRegional = value
    }
  },
  // 持久化
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth', // 存储的key值
        storage: localStorage, // 存储的位置
        paths: ['asyncMenu', 'RegionalData', 'curRegional'] // 默认持久化state的全部，paths指定持久化的对象
      }
    ],
    // strategies: [
    //   { storage: sessionStorage, paths: ['name'] },
    //   { storage: localStorage, paths: ['age'] },
    // ],
  },
})
