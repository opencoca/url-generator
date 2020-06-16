import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'meet',
  component: () => import(/* webpackChunkName: "page-meet" */'./pages/meet')
}, {
  path: 'space',
  name: 'space',
  component: () => import(/* webpackChunkName: "page-space" */'./pages/space')
}, {
  path: '/gravatar',
  name: 'gravatar',
  component: () => import(/* webpackChunkName: "page-gravatar" */'./pages/gravatar')
}, {
  path: '/robohash',
  name: 'robohash',
  component: () => import(/* webpackChunkName: "page-robohash" */'./pages/robohash')
}, {
  path: '/dicebear',
  name: 'dicebear',
  component: () => import(/* webpackChunkName: "page-dicebear" */'./pages/dicebear')
}, {
  path: '/adorable',
  name: 'adorable',
  component: () => import(/* webpackChunkName: "page-adorable" */'./pages/adorable')
}, {
  path: '/about',
  name: 'about',
  component: () => import(/* webpackChunkName: "page-about" */'./pages/about')
}
]

export default new Router({ routes })
