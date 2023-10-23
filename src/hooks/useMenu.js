import { useAuthStore } from '@/store/auth'
const store = useAuthStore()

export function useMenu(value) {
  store.SetCurRegional(ref(value)) // asyncRoutes 指新值
}
