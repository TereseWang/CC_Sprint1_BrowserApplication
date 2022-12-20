import axios from "axios";

// const codeMessage = {
// 	200: 'success',
// 	201: 'edit success',
// 	202: 'request put in line',
// 	204: 'delete success',
// 	// 400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
// 	// 401: '用户没有权限（令牌、用户名、密码错误）。',
// 	// 403: '用户得到授权，但是访问是被禁止的。',
// 	404: 'not found',
// 	406: 'format unavailable',
// 	410: 'permenantly deleted',
// 	// 422: '当创建一个对象时，发生一个验证错误。',
// 	500: 'internal server error',
// 	502: 'gateway error',
// 	// 503: '服务不可用，服务器暂时过载或维护。',
// 	504: 'gateway timeout',
// };

const request = (url, option) => {
  var option = option || {
    headers: {
      "Content-Type": "application/json"
    }
  }
  const headers = {
    seqNo: (new Date()).valueOf(),
  }
  if (option.headers && option.headers["Content-Type"]) {
    headers["Content-Type"] = option.headers["Content-Type"]
  }
  return axios({
    url,
    method: option.method || 'GET',
    data: option.data || null,
    params: option.params || null,
    headers: headers,
    responseType: option.responseType || 'json'
  })
};

export default request;