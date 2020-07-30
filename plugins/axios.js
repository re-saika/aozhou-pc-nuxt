import api from '@/api'

export default ({ $axios }, inject) => {
  const createRequest = api($axios)
  // 将api字段注入到vue.prototype中，会在第一个参数前加上$符号
  inject('api', createRequest)

  // $axios.defaults.timeout = 100000
  $axios.defaults.baseURL = 'http://fuli.wkan.cn'

  $axios.onRequest((config) => {
    return config
  })
  $axios.onResponse((response) => {
    if (response.data.status === 1 || response.data.state === 'SUCCESS') {
      return response.data
    } else {
      return Promise.reject(response)
    }
  })
  $axios.onError(({ data }) => {
    return Promise.reject(data.msg)
  })
}
