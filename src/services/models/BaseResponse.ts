export interface BaseResponse<T> {
  errMsg: string
  code: number
  data: T
}
