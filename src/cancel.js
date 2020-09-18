// // 创建取消令牌的生成器对象
// const CancelToken = axios.CancelToken;
// // 从中获取令牌对象
// const source = CancelToken.source();
// // 发请求
// axios.get('/user/12345', {
//   // 传递令牌
//   cancelToken: source.token
// });
// // 2秒取消请求
// setTimeout(function () {
//     source.cancel();
// },2000);

function source() {
  return {
    token: '',
    cancel: () => {}, // xhr.abort()
  }
}

function axios_get(url, options) {
  // 先各种配置
  if (options.cancelToken) {
    options.cancelToken.then(function () {
      xhr.abort()
    })
  }

  // 最终发请求
  xhr.request()
}

axios_get('url', {
  cancelToken: source.token,
})

setTimeout(function () {
  source.cancel()
}, 5000)
