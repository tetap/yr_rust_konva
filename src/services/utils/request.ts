import axios from 'axios'
import { HttpStatusCode, HttpStatusMsg } from './httpStatusEnum'
import type { BaseResponse } from '../models/BaseResponse'

// 前缀链接
export const BASEURL = import.meta.env.VITE_APP_API_BASE_URL

const baseService = axios.create({
  baseURL: BASEURL,
  timeout: 30000
})

// 请求拦截器
baseService.interceptors.request.use(
  (config: any) => {
    return config
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response)
    }
    return Promise.reject()
  }
)

function baseResponseMsg(code: HttpStatusCode, errMsg: string): BaseResponse<undefined> {
  return {
    code,
    errMsg,
    data: undefined
  }
}
// 响应拦截器
baseService.interceptors.response.use(
  (response) => {
    const res = response.data as BaseResponse<any>
    if (res.code !== HttpStatusCode.OK) {
      return Promise.reject(res)
    }
    return res
  },
  (error) => {
    // 请求超时或者服务未启动或者客户端无网络
    if (error.message.includes('timeout') | error.message.includes('Network Error')) {
      return Promise.reject(
        baseResponseMsg(HttpStatusCode.RequestTimeout, HttpStatusMsg.RequestTimeout)
      )
    }
    // 404
    if (error.response.status === HttpStatusCode.NotFound) {
      return Promise.reject(baseResponseMsg(HttpStatusCode.NotFound, HttpStatusMsg.NotFound))
    }
    // 其余错误
    if (error.response && error.response.data) {
      return Promise.reject(baseResponseMsg(error.response.data.code, error.response.data.errMsg))
    }
    return Promise.reject({
      ...error.response,
      errMsg: HttpStatusMsg.Unknown
    })
  }
)

export type RequestData = {
  url: string
  method?: 'POST' | 'GET' | 'DELETE' | 'PUT'
  params?: any
  data?: any
}
// 通用请求
export function requestData<T>({
  url,
  method = 'GET',
  params = {},
  data = {}
}: RequestData): Promise<BaseResponse<T>> {
  return new Promise(function (resolve, reject) {
    baseService
      .request({
        url,
        method,
        params,
        data
      })
      .then((res) => resolve(res as any))
      .catch((error) => reject(error))
  })
}

export default baseService
