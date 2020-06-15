export default (axios) => {
  return {
    // 置业澳洲
    setHouseAus(data) {
      return axios.get({
        url: '/flaz/index/SetHouseAus',
        data
      })
    },
    // 获取图文列表
    articleList(data) {
      return axios.get({
        url: '/flaz/index/articleList',
        data
      })
    },
    // 获视频列表
    videoList(data) {
      return axios.get({
        url: '/flaz/index/videoList',
        data
      })
    },
    // 视频内页(素材详情)
    materialDetail(data) {
      return axios.get({
        url: '/flaz/index/materialDetail',
        data
      })
    }
  }
}
