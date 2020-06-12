// import http from './request'

import request from './request'
import app from './modules/app'

export default (axios) => {
  const http = request(axios)
  return {
    app: app(http)
  }
}
