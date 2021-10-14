import { urlGet, postJSON } from "./clientAjax";

const api = {
  // 上传图片
  kanoUpload: params => postJSON("/kano/upload", params),
  // 用户权限
  getAuthList: params => urlGet("/sys/permission/menu", params),
  // 登录
  login: params => postJSON("/sys/login", params),
  // 修改密码
  editPassword: params => postJSON("/sys/password/update", params),
  // 校验原密码
  verifyPassword: params => postJSON("/sys/password/verify", params),
  // 用户列表
  getUserList: params => postJSON("/sys/user/list", params),
  // 启用用户
  enableUser: params => urlGet("/sys/user/unblock", params),
  // 停用用户
  blockUser: params => urlGet("/sys/user/blockup", params),
  // 角色查询
  getRoleList: params => postJSON("/sys/role/list", params),
  // 添加用户
  addUser: params => postJSON("/sys/user/add", params),
  // 编辑用户
  updateUser: params => postJSON("/sys/user/update", params),
  // 用户重置密码
  resetPassword: params => postJSON("/sys/user/password/reset", params),
  // 同步his用户
  syncHis: () => urlGet("/user/his_user_synchronization"),
  // 获取top榜
  getMedicalTop: params =>
    postJSON("/aicdsschronic/statistical/topMedicareQuery", params),
  // 获取top金额榜
  getMedicalMoney: params =>
    postJSON("/aicdsschronic/statistical/topMedicareMoneyQuery", params),
  // 获取监控
  getStatistical: params =>
    postJSON("/aicdsschronic/statistical/statistical", params),
  // 获取 健康处方设置页面信息
  getHosPrescriptionInfo: hospitalId =>
    urlGet("/aicdsschronic/prescription/config/select", { hospitalId }),
  // 更新 健康处方设置页面信息
  updateHosPrescriptionInfo: params =>
    postJSON("/aicdsschronic/prescription/config/update", params),
  // 获取 医保控费触发金额监控
  getStatisticalMoney: params =>
    postJSON("/aicdsschronic/statistical/statisticalMoney", params),
  // 获取 菜单tree
  getMenuTree: () => urlGet("/sys/permission/listallmenu"),
  // 新增菜单/权限
  addMenuPermission: params => postJSON("/sys/permission/add", params),
  // 修改菜单/权限
  editMenuPermission: params => postJSON("/sys/permission/update", params),
  // 权限点列表
  getPermissionList: params => postJSON("/sys/permission/query", params),
  // 删除权限
  delPermission: id => urlGet(`/sys/permission/delete/${id}`),
  // 启用权限
  enablePermission: id => urlGet(`/sys/permission/unblock/${id}`),
  // 禁用权限
  disablePermission: id => urlGet(`/sys/permission/blockup/${id}`),
  // 获取角色
  getRoleListNew: params => postJSON("/sys/role/listwithtree", params),

  // 查询角色列表
  getRoleList: params => postJSON("/sys/role/page", params),
  // 添加角色
  addRole: params => postJSON("/sys/role/add", params),
  // 修改角色
  editRole: params => postJSON("/sys/role/update", params),
  // 删除角色
  deleteRole: params => urlGet(`/sys/role/delete/${params}`),
  // 启用角色
  unlockRole: params => urlGet(`/sys/role/unblock/${params}`),
  // 禁用角色
  lockRole: params => urlGet(`/sys/role/blockup/${params}`),
  // 查询角色info
  getRoleInfo: params => urlGet(`/sys/role/getrolebyid/${params}`),

  // 上报最近登录机构
  reportLastlogin: params => postJSON("/sys/lastlogin/update", params),
  // admin 询问是否关联账户
  addUserCheck: params => postJSON("/sys/user/addusercheck", params),

  // 药品基础数据
  searchCommonName: params => postJSON("/medicine/searchCommonName", params),
  searchChemicalName: params =>
    postJSON("/medicine/searchChemicalName", params),

  // 用药指导
  searchGuideCommonList: params =>
    postJSON("/medicine/guide/common/list", params),
  getGuideInfo: params => postJSON("/medicine/guide/get", params),
  getGuidePage: params => postJSON("/medicine/guide/page", params),
  saveGuideData: params => postJSON("/medicine/guide/save", params),
  getGuideLabelPage: params => postJSON("/medicine/label/page", params),
  saveGuideLabelData: params => postJSON("/medicine/label/save", params),
  deleteGuideLabelData: params => postJSON("/medicine/label/delete", params),
  getGuideLabelList: params => postJSON("/medicine/label/list", params),

  // 导入
  medicineUpdate: params => postJSON("/medicine/status/update", params),
  searchHISCommonName: params =>
    postJSON("/external/medicine/name/search", params),
  searchMedicine: params => postJSON("/medicine/searchMedicine", params),
  searchGroupMedicine: params => postJSON("/medicine/groupMedicine", params),
  searchAllergenList: params => postJSON("/allergen/page", params),
  deleteAllergen: params => postJSON("/allergen/delete", params),
  saveAllergen: params => postJSON("/allergen/save", params),
  batchDeleteAllergen: params => postJSON("/allergen/batch/delete", params),
  searchAllergenRelated: params => postJSON("/allergen/medicine/page", params),
  searchAtc: params => postJSON("/medicine/atc/list", params),
  unRelateAllergen: params => postJSON("/allergen/medicine/delete", params),
  relateAllergen: params => postJSON("/allergen/medicine/save", params),
  getDictList: data => postJSON("/dict/list", data),
  sychronizeMedicine: data =>
    postJSON("/medicine/base/sychronizeMedicine", data),

  // 规则
  getUnitOptions: params => postJSON("/medicine/getAllDosageUnit", params),
  searchRule: params => postJSON("/rule/searchRule", params),
  searchCommonRule: params => postJSON("/rule/commonName/page", params),

  saveRule: params => postJSON("/rule/saveRule", params),
  deleteRule: params => postJSON("/rule/deleteRule", params),
  copyRule: params => postJSON("/rule/copyRule", params),
  searchSingleRule: params => postJSON("/rule/getRuleById", params),
  updateRuleStatus: params => postJSON("/rule/updateStatusByRuleIds", params),
  getDiagnosis: params => postJSON("/rule/getDiagnosisFromRule", params),
  // 过敏原列表
  getAllergenOptions: params => postJSON("/allergen/relation/list", params),
  // 给药途径
  getAdministrationRoutesOptions: params =>
    postJSON("/medicine/administration/list", params),

  searchDiagnosis: params => postJSON("/diagnosis/search", params),
  getRuleSwitch: params => postJSON("/rule/getUpdateStatus", params),
  updateRuleSwitch: params => postJSON("/rule/saveUpdateStatus", params),

  // 成分&治疗重复
  searchRepeatPage: params => postJSON("/medicine/repeat/page", params),
  searchRepeatMedicine: params => postJSON("/medicine/route/list", params),
  searchRepeatRule: params => postJSON("/rule/list", params),
  serchRuleCodeMedicine: params => postJSON("/medicine/mark/list", params),
  saveRelatedRule: params => postJSON("/rule/saveRelatedRule", params),

  getByRelationId: params => postJSON("/medicine/getByRelationId", params),

  getDosageFormFromMedicine: params =>
    postJSON("/medicine/dosageForm/get", params),
  saveRuleFast: params => postJSON("/rule/fast/save", params),
  searchFastRuleByCommon: params => postJSON("/rule/commonName/list", params),
  searchCommonNameAndId: params => postJSON("/rule/CommonName/search", params),
  saveRuleFastInteraction: params =>
    postJSON("/rule/fast/save/interaction", params),
  FastMedicineRoute: params => postJSON("/medicine/route/info", params),

  // 快捷维护
  getSpecificationByCommon: params =>
    postJSON("/medicine/specification/get", params),
  otherDelRuleFast: params => postJSON("/rule/fast/save/delete", params),
  otherAddRuleFast: params => postJSON("/rule/fast/save/add", params),
  otherCoverRuleFast: params => postJSON("/rule/fast/save/cover", params),

  /**
   * 审方调优
   *
   */
  getProcessPage: params => postJSON("/process/page", params),
  getStatistics: params => postJSON("/indicator/statistic", params),
  getHistoryStatistics: params =>
    postJSON("/indicator/history/statistic", params),

  getProcessDetail: params => postJSON("/process/get", params),
  changeProcessStatus: params => postJSON("/process/operate", params),
  passProcess: params => postJSON("/process/verify/pass", params),
  getCensorRes: params => postJSON("/prescription/auto/censor", params),
  getHospitalList: params =>
    postJSON("/sys/org/external/hospital/list", params),

  /**
   * 数据对照模块接口
   */
  // 疾病对照列表
  getDiagnosisCompareList: data => postJSON("/external/diagnosis/page", data),
  // 自动关联疾病编码对照
  autoAssociation: data =>
    postJSON("/external/diagnosis/autoassociation", data),
  // 疾病编码对照导出
  exportDiagnosis: data => postJSON("/external/diagnosis/export", data),
  importDiagnosis: data => postJSON("/external/diagnosis/batch/save", data),

  // 医院疾病编码搜索接口
  getExternalDiagnosisCode: data =>
    postJSON("/external/diagnosis/search", data),
  // 微医疾病编码搜索接口
  getWyDiagnosisCode: data => postJSON("/diagnosis/search", data),
  // 疾病编码对照操作接口(关联、拒绝)
  operateDiagnosis: data => postJSON("/external/diagnosis/operate", data),

  // 过敏源信息对照接口【过敏源】
  getAllergenCompareList: data => postJSON("/external/allergen/page", data),
  autoAssociationAllergen: data =>
    postJSON("/external/allergen/autoassociation", data),
  exportAllergen: data => postJSON("/external/allergen/export", data),
  importAllergen: data => postJSON("/external/allergen/batch/save", data),

  getExternalAllergen: data => postJSON("/external/allergen/search", data),
  getWEAllergen: data => postJSON("/allergen/search", data),
  operateAllergen: data => postJSON("/external/allergen/operate", data),
  // 给药途径对照 【给药途径】

  getRouteCompareList: data =>
    postJSON("/external/administration/route/page", data),
  autoRouteAssociation: data =>
    postJSON("/external/administration/route/autoassociation", data),
  exportRoute: data => postJSON("/external/administration/route/export", data),
  importRoute: data =>
    postJSON("/external/administration/route/batch/save", data),

  getExternalRoute: data =>
    postJSON("/external/administration/route/search", data),
  getDictSearch: data => postJSON("/dict/search", data),
  operateRoute: data =>
    postJSON("/external/administration/route/operate", data),

  // 给药频次对照

  getFrequencyCompareList: data => postJSON("/external/frequency/page", data),
  autoFrequencyAssociation: data =>
    postJSON("/external/frequency/autoassociation", data),
  exportFrequency: data => postJSON("/external/frequency/export", data),
  importFrequency: data => postJSON("/external/frequency/batch/save", data),

  getExternalFrequency: data => postJSON("/external/frequency/search", data),
  // getDictSearch: data => postJSON("/dict/search", data),
  operateFrequency: data => postJSON("/external/frequency/operate", data),

  // 药品信息对照【药品信息】
  getMedicineCompareList: data => postJSON("/external/medicine/page", data),
  getMedicineCompareAllList: data => postJSON("/external/medicine/list", data),
  getMedicineCompareDetail: data => postJSON("/external/medicine/get", data),
  getMedicineComparRelationAuto: data =>
    postJSON("/external/medicine/relation/auto", data),
  getMedicineInfoSearch: data => postJSON("/medicine/info/get", data),
  importMedicineInfo: data => postJSON("/external/medicine/batch/save", data),

  getMedicineSave: data => postJSON("/external/medicine/ratio/save", data),
  getMedicineCompareConfirm: data =>
    postJSON("/external/medicine/relation/confirm", data),
  getMedicineCompareCancel: data =>
    postJSON("/external/medicine/relation/cancel", data),
  getMedicineCompareRefuse: data => postJSON("/external/medicine/refuse", data),
  getMedicineCompareCancelRefuse: data =>
    postJSON("/external/medicine/cancel/refuse", data),
  // 版本升级
  getVersionList: data => postJSON("/version/page", data),
  getVersionInfo: data => postJSON("/version/number/info", data),
  getVersionLatest: data => postJSON("/version/latest/get", data),
  getVersionExport: data => postJSON("/version/export", data),
  getVersionCreate: data => postJSON("/version/generate", data),
  getVersionUp: data => postJSON("/version/upgrade", data)
};
export default api;
