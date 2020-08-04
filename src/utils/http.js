import {APIS, Token} from '../constants/API';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/**
 * 异常处理程序
 */

const errorHandler = (error) => {
  const {response} = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const {status, url} = response;
    /*  notification.error({
       message: `请求错误 ${status}: ${url}`,
       description: errorText,
     }); */
    console.log({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    /* notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    }); */
    console.log({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }

  return response;
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});

let defaultReqData = {
  serviceType: '',
  param: {},
  timeOut: common_timeOut,
};

const common_url = APIS.Main_Path;
const common_timeOut = 5000;

/**
 * Get请求
 *
 * @param {Object} arg
 * @param {string} arg.serviceType 路径
 * @param {number} arg.timeOut 超时
 * @param {Object} arg.params  参数
 * @param {Function} arg.success arg.success arg.error 回调
 */
let fetchGet = (arg) => {
  const {serviceType, timeOut, params, success, fail, error} = arg;

  let url = common_url + serviceType;
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach((key) =>
      paramsArray.push(key + '=' + params[key]),
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }

  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    charset: 'utf-8',
  };
  if (Token) {
    headers['Token'] = `${Token}`;
  }
  console.log('fetchGet request', url, params);
  // fetch 请求
  _fetch(
    fetch(url, {
      headers,
    }),
    timeOut,
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log('result', responseJson);
      success && success(responseJson);
    })
    .catch((e) => {
      console.log(e);
      error && error(e);
    });
};

/**
 * Post请求
 *
 * @param {Object} arg
 * @param {string} arg.serviceType 路径
 * @param {number} arg.timeOut 超时
 * @param {Object} arg.params  参数
 * @param {Function} arg.success arg.success arg.error 回调
 */
let fetchPost = (arg) => {
  const {serviceType, mainPath, timeOut, params, success, fail, error} = arg;
  let url =
    ('http://apiparty.xinhuaapp.com/Service' + mainPath || common_url) +
    serviceType;

  console.log('request', url, params);
  let headers = {
    Accept: 'application/json',
    charset: 'utf-8',
    'Content-Type': 'application/json',
  };
  if (Token) {
    headers['Token'] = `${Token}`;
  }

  _fetch(
    fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params),
    }),
    timeOut,
  )
    .then((response) => {
      console.log('test1', response);
      return response.json();
    })
    .then((responseJson) => {
      console.log('test', responseJson);
      if (responseJson.Status === 1) {
        success && success(responseJson);
      } else {
        fail && fail(responseJson);
      }
    })
    .catch((e) => {
      console.log(e);
      error && error(error);
    });
};

/**
 * 上传图片请求
 *
 * @param {Object} arg
 * @param {string} arg.serviceType 路径
 * @param {number} arg.timeOut 超时
 * @param {number} arg.images  图片
 * @param {Object} arg.params  参数
 * @param {Function} arg.success arg.success arg.error 回调
 */
let fetchUpload = (arg) => {
  const {serviceType, timeOut, images, params, success, fail, error} = arg;
  let url = common_url + serviceType;
  console.log('request', url, images);
  let formData = new FormData();
  if (params) {
    formData = params;
  }
  for (var i = 0; i < images.length; i++) {
    var uri = images[I];
    var date = new Date();
    var name = date.getTime() + '.png'; //用时间戳保证名字的唯一性
    let file = {uri: uri, type: 'multipart/form-data', name: name};
    formData.append('file', file);
  }
  console.log('formData', url, formData);
  _fetch(
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    }),
    timeOut,
  )
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      if (responseJson.Status === 1) {
        success && success(responseJson);
      } else {
        fail && fail();
      }
    })
    .catch((e) => {
      console.log(e);
      error && error(error);
    });
};

function _fetch(fetch_promise, timeout = common_timeOut) {
  let timeout_fn = null;

  //这是一个可以被reject的promise
  let timeout_promise = new Promise(function (resolve, reject) {
    timeout_fn = function () {
      reject('timeout promise');
    };
  });

  //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  let abortable_promise = Promise.race([fetch_promise, timeout_promise]);

  setTimeout(function () {
    timeout_fn();
  }, timeout);

  return abortable_promise;
}

export {fetchGet, fetchPost, fetchUpload};
