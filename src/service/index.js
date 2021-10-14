import { axios, urlGet, postJSON } from "@/utils/clientAjax";
import config from "@/utils/config";

function getOrgCode() {
  const userInfo = sessionStorage.getItem("cdss-curorganize")
    ? JSON.parse(sessionStorage.getItem("cdss-curorganize"))
    : {};
  return userInfo.organizeCode || "";
}

export default {
  all: params => axios.all(params),
  // 获取所有的规则
  getRuleList: params =>
    axios.get(`${config.apiRoot}/aicdsschronic/rule/list`, {
      params: { ...params, orgCode: getOrgCode() }
    }),
  // 查询规则
  ruleSearch: params =>
    axios.post(`${config.apiRoot}/aicdsschronic/rule/search`, {
      ...params,
      orgCode: getOrgCode()
    }),
  // 修改规则状态
  ruleUpdateStatus: params =>
    axios.post(`${config.apiRoot}/aicdsschronic/rule/updateRuleStatus`, params),
  // 修改规则JSON
  ruleUpdateJSON: params =>
    axios.post(`${config.apiRoot}/aicdsschronic/rule/updateRule`, params),
  // 获取控费记录中所有的医生
  getDoctorList: params =>
    urlGet("/aicdsschronic/feecontroldetail/record/doctors", {
      ...params,
      orgCode: getOrgCode()
    }),
  // 获取控费记录中所有的药品
  getDurgList: params =>
    urlGet("/aicdsschronic/feecontroldetail/record/drugs", {
      ...params,
      orgCode: getOrgCode()
    }),
  // 获取收费员信息
  getChargeList: () =>
    urlGet("/aicdsschronic/feecontroldetail/record/cashier", {
      orgCode: getOrgCode()
    }),
  // 查询控费明细
  getRecord: params =>
    axios.post(`${config.apiRoot}/aicdsschronic/feecontroldetail/record/page`, {
      ...params,
      orgCode: getOrgCode()
    }),
  // 查询检查项目列表
  getInspectList: params =>
    urlGet("/aicdsschronic/feecontroldetail/record/inspects", params),
  // 导出excel
  exportFeeDetail: params =>
    axios({
      method: "post",
      url: `${config.apiRoot}/aicdsschronic/feecontroldetail/record/page/export`,
      data: { ...params, orgCode: getOrgCode() },
      responseType: "blob"
    }),
  // // 查询角色列表
  // getRoleList: params => postJSON('/role/page', params),
  // // 添加角色
  // addRole: params => postJSON('/role/add', params),
  // // 修改角色
  // editRole: params => postJSON('/role/update', params),
  // // 删除角色
  // deleteRole: params => urlGet(`/role/delete/${params}`),
  // // 启用角色
  // unlockRole: params => urlGet(`/role/unblock/${params}`),
  // // 禁用角色
  // lockRole: params => urlGet(`/role/blockup/${params}`),
  // // 查询角色info
  // getRoleInfo: params => urlGet(`/role/getrolebyid/${params}`),
  // 查询所有权限
  getPermission: params =>
    axios.get(`${config.apiRoot}/permission/listallmenu`, {
      params: { ...params, orgCode: getOrgCode() }
    }),
  // 获取渠道
  getAllServiceCodes: params => postJSON("/org/listdimension", params)
};
