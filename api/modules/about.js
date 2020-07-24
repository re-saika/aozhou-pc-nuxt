export default (axios) => {
  return {
    // 联系我们
    contactus(data) {
      return axios.post({
        url: '/flaz/index/AttendMsg',
        data
      })
    },
    // 上传文件 （要用另外的链接，废用
    upload(data) {
      return axios.post({
        url: '/api/upload/index/index',
        data
      })
    },
    // 投递简历
    resume(data) {
      return axios.post({
        url: '/flaz/index/resume',
        data
      })
    }
  }
}
