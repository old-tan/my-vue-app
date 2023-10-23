

import axios from "axios"
import { useEnv } from "@/hooks"

const { VITE_BASE_API } = useEnv()


// const service = axios.create({
//   baseURL: VITE_BASE_API,
//   timeout: 10 * 1000, // 请求超时时间
//   headers: { "Content-Type": "application/json;charset=UTF-8" }
// })

// service.interceptors.request.use((config) => {
//   // 这里可以设置token: config!.headers!.Authorization = token
//   return config
// })

class HttpRequest {
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    this.instance.interceptors.request.use(config => {
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      const data = res.data
      if (data.returnCode === '-1001') {
        console.log('请求失败~, 错误信息')
      } else {
        return data
      }
    }, err => {
      return err
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance.request(config).then(res => {
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
        return err
      })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default HttpRequest
