// import.meta.env import.meta.env.MODE
import { useEnv } from "@/hooks"
const { VITE_BASE_API, MODE, VITE_PUBLIC_PATH } = useEnv()
let BASE_URL = ''
const TIME_OUT = 10000
if (MODE === 'development') {
  BASE_URL = '/api'
} else if (MODE === 'production') {
  BASE_URL = '/prod'
} else {
  BASE_URL = '/'
}

export { BASE_URL, TIME_OUT }
