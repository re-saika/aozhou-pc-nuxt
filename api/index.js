// import http from './request'

import request from './request'
import app from './modules/app'
import about from './modules/about'
import project from './modules/project'
import estate from './modules/estate'
import recommend from './modules/recommend'

export default (axios) => {
  const http = request(axios)
  return {
    app: app(http),
    about: about(http),
    project: project(http),
    estate: estate(http),
    recommend: recommend(http)
  }
}
