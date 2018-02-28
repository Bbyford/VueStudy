import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FooComponent from '@/components/FooComponent'
import BarComponent from '@/components/BarComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/foo',
      name: 'FooComponent',
      component: FooComponent
    },
    {
      path: '/bar',
      name: 'BarComponent',
      component: BarComponent
    }
  ]
})
