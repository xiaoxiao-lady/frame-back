import axios from "axios";
import config from "./config";
// V1.1.0修改

function NetworkError(message) {
  this.name = "NetworkError";
  this.message = message;
}
function getCommonParams() {
  const curorganize = sessionStorage.getItem("cdss-curorganize")
    ? JSON.parse(sessionStorage.getItem("cdss-curorganize"))
    : {};
  return {
    organizeId: curorganize.id || "",
    orgCode: curorganize.organizeCode || "",
  };
}

NetworkError.prototype = new Error();

/* 请求统一设置连接超时 */
axios.interceptors.request.use(
  (configR) => {
    // TODO 统一设置请求取消，保存到vuex 中。在路由切换时使用。
    // const CancelToken = axios.CancelToken;
    // const source = CancelToken.source();
    // configR.cancelToken = source.token;
    configR.timeout = 100000;

    return configR;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (/timeout/.test(err.message)) {
      return new NetworkError("网络连接超时");
    } else if (err.response && err.response.status !== 200) {
      if (err.response.status === 401) {
        // console.log(router.currentRoute.fullPath === "login");
        // !handleUnInclude(err) &&
        //   window.location.pathname !== "/login" &&
        //   (window.location.href = "/login");
      }
      return err.response;
    } else return err;
  }
);

/**
 * get请求
 * @param url {String} 请求url
 * @param params
 * @return {Promise} 返回一个Promise
 */
const urlGet = function (url, params = {}) {
  const commonParams = getCommonParams();
  params.orgCode = commonParams.orgCode;
  params.organizeId = commonParams.organizeId;
  return new Promise((resolve, reject) => {
    axios.get(config.apiRoot + url, { params: params }).then((suc) => {
      if (suc.status !== 200) {
        reject(suc);
      } else {
        resolve(suc.data);
      }
    });
  });
};

// 封装json-post请求
const postJSON = (url = "", json = {}) => {
  const commonParams = getCommonParams();
  json.orgCode = commonParams.orgCode;
  json.organizeId = commonParams.organizeId;
  return new Promise((resolve, reject) => {
    axios.post(config.apiRoot + url, json).then((res) => {
      if (res.status !== 200) {
        reject(res);
      } else {
        resolve(res.data);
      }
    });
  });
};

export { urlGet, postJSON, axios };
