// import http from './request'

import request from './request'
import app from './modules/app'
import about from './modules/about'

export default (axios) => {
  const http = request(axios)
  return {
    app: app(http),
    about: about(http)
  }
}
