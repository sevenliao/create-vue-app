import Vue from 'vue'
import Router from 'vue-router'

import App from '@/App'
import Home from '@/components/home'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: Home,
        children: [{
            path: '',
            component: index,
          },
          {
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
          },
        ]
      },
      {
        path: 'login',
        component: login
      }
    ]
  }, {
    path: '*',
    redirect: '/login'
  }]
})
