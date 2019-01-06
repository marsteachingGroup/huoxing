import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Basic from '@/pages/basic.vue'
import School from '@/pages/school.vue'
import Personal from '@/pages/personal.vue'
import Success from '@/pages/success.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/basic',
      name: 'Basic',
      component: Basic
    },
    {
      path: '/school',
      name: 'School',
      component: School
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/success',
      name: 'Success',
      component: Success
    }
  ]
})
