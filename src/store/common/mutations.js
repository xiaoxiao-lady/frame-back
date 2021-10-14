import types from "./type";
import { LOCAL } from "@/utils/constant";

export default {
  [types.LOGIN](state, data) {
    state.userInfo = data;
    state.isLogin = true;
    localStorage.setItem(LOCAL.userInfo, JSON.stringify(data));
    localStorage.setItem(LOCAL.jwtToken, data.jwtToken);
  },
  [types.LOGOUT](state) {
    // 重置数据
    localStorage.removeItem(LOCAL.userInfo);
    localStorage.removeItem(LOCAL.jwtToken);
    localStorage.removeItem(LOCAL.authList);
    localStorage.removeItem(LOCAL.curorganize);
    state.userInfo = {};
    state.authList = [];
    state.isLogin = false;
    state.curorganize = {};
  },
  [types.AUTHLIST](state, data) {
    state.authList = data;
    localStorage.setItem(LOCAL.authList, JSON.stringify(data));
  },
  [types.CURORGANIZE](state, data) {
    state.curorganize = data;
    sessionStorage.setItem(LOCAL.curorganize, JSON.stringify(data));
  }
};
