// http状态码
export enum HttpStatusCode {
  OK = 200,
  NotFound = 404,
  RequestTimeout = 408
}
export enum HttpStatusMsg {
  NotFound = '404 NotFound',
  RequestTimeout = 'Request Timeout',
  Unknown = '未知请求错误'
}
