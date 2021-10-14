import { LOCAL } from "@/utils/constant";
export default {
  num: 0,
  // isLogin: true, // 是否登录
  // userInfo: JSON.parse(
  //   localStorage.getItem(LOCAL.userInfo) ||
  //     '{"admin":true,"id":52,"jwtToken":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTIsImV4cCI6MTYxMDYxMjA4MSwidXNlcm5hbWUiOiJhZG1pbiJ9.aOQ8zGYcquRN8fCHtiXjHKeVayhd7JfLVyTzvecxEhs","nickName":"超级管理员","organizes":[{"bizCode":"","city":"hangzhou","county":"china","gmtCreated":1593337938000,"gmtModified":1593337938000,"id":77,"lastChoose":true,"orgLevel":"","orgType":"","organizeCode":"5c52b6de-949b-4ea1-a9f8-6b90eee4233b","organizeName":"微医院","outsideHospId":"111","outsideHospName":"微医院","outsideOrgCode":"123","outsideOrgName":"微医院","province":"zhejiang"}],"userName":"admin"}'
  // ), // 用户信息
  authList: JSON.parse(localStorage.getItem("cdss-authList") || "[]"), // 权限列表
  // curorganize: JSON.parse(
  //   localStorage.getItem(LOCAL.curorganize) ||
  //     '{"bizCode":"","city":"hangzhou","county":"china","gmtCreated":1593337938000,"gmtModified":1593337938000,"id":77,"lastChoose":true,"orgLevel":"","orgType":"","organizeCode":"5c52b6de-949b-4ea1-a9f8-6b90eee4233b","organizeName":"天津东营门社区医院","outsideHospId":"111","outsideHospName":"微医院","outsideOrgCode":"123","outsideOrgName":"微医院","province":"zhejiang"}'
  // ) // 当前选中组织
  //  v1.1.0修改的
  isLogin: false, // 是否登录
  userInfo: JSON.parse(localStorage.getItem(LOCAL.userInfo) || "{}"), // 用户信息
  curorganize: JSON.parse(sessionStorage.getItem(LOCAL.curorganize) || "{}") // 当前选中组织
};
