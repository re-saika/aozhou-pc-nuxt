export default (axios) => {
  return {
    get({ url, data, header }) {
      return axios.get(url, { params: data, header })
    },
    delete({ url, data, header }) {
      return axios.delete(url, { params: data, header })
    },
    post({ url, data, header }) {
      return axios.post(url, data, header)
    },
    put({ url, data, header }) {
      return axios.put(url, data, header)
    }
  }
}
