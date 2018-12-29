import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Basic from '@/pages/basic.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Basic',
      name: 'Index',
      component: Basic
    }
  ]
})
