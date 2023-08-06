export const qiniuConfig = {
  accessKey: 'cVy3PZC_CT_Rd4SdC0Q4Xab_JGPbzG2fjyLo65dH',
  secretKey: 'z3j3NhB62zGDBctABw3GT9S5sAFvoqGuI5C37y6Q',
  localFilePath: 'C:\\Users\\hasee\\xm\\jwt\\',
  option: {
    scope: 'nestq', // 存储空间名称
    cors: [
      {
        origin: '*', // 允许所有域名访问，也可以指定单个域名，如 'http://example.com'
        method: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // 允许的请求方法
        // 允许的自定义请求头，如果前端请求中带有这些自定义头，服务器会返回对应的响应头
        // 例如：前端请求中带有 Authorization 头，服务器可以返回 Access-Control-Expose-Headers: Authorization
        exposeHeaders: ['Authorization'],
        // 预检请求的缓存时间，单位为秒。如果设置为 0，则每次请求都会发起预检请求，这样可能导致性能问题。
        // 建议设置一个合适的值，例如 3600（1 小时）
        maxAge: 3600,
      },
    ],
  },

  bucketName: 'http://rynt4id44.hn-bkt.clouddn.com',
}
