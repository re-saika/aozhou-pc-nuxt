export default (axios) => {
  return {
    // 项目详情
    projectDetail(data) {
      return axios.get({
        url: '/flaz/index/projectDetail',
        data
      })
    },
    // 项目图片
    projectPhoto(data) {
      return axios.get({
        url: '/flaz/index/photoType',
        data
      })
    },
    // 项目户型
    projectApartment(data) {
      return axios.get({
        url: '/flaz/index/projectApartment',
        data
      })
    }
  }
}
