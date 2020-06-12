export default (axios) => {
  return {
    // 项目列表 （底部
    projectlist(data) {
      return axios.get({
        url: '/flaz/index/projects',
        data
      })
    },
    // 底部提交表单
    consulting(data) {
      return axios.post({
        url: '/flaz/index/AttendPlan',
        data
      })
    }
  }
}
