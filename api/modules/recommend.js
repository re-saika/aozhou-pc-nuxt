export default (axios) => {
  return {
    // 文章推荐
    recomendArticle(data) {
      return axios.get({
        url: '/flaz/index/RecomendArticle',
        data
      })
    },
    // 视频推荐
    recomendVideo(data) {
      return axios.get({
        url: '/flaz/index/RecomendVideo',
        data
      })
    },
    // 在线预约
    appointment(data) {
      return axios.post({
        url: '/flaz/index/AttendMake',
        data
      })
    }
  }
}
