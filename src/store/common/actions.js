import types from './type';
import api from '@/utils/service';
import { Message } from '@weiyi/vit';

export default {
  // 登录
  login ({ commit }, params) {
    api.login(params).then((res) => {
      if (res.code !== '0') {
        Message.error(res.message);
        return false;
      }
      commit(types.LOGIN, res.data);
    });
  },
  // todo 退出接口
  logout ({ commit }) {
    commit(types.LOGOUT);
  },
  // 权限列表
  authList ({ commit }, params) {
    api.getAuthList(params).then(res => {
      if (res.code !== '0') {
        Message.error(res.message);
        return false;
      }
      commit(types.AUTHLIST, res.data || []);
    });
  },
};
