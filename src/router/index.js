import Vue from 'vue'
import Router from 'vue-router'
import Component1 from '@/components/Component1'
import Component2 from '@/components/Component2'
import Component3 from '@/components/Component3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/1',
      name: 'Comp1',
      component: Component1
    },
    {
      path: '/2',
      name: 'Comp2',
      component: Component2
    },
    {
      path: '/3',
      name: 'Comp3',
      component: Component3
    }
  ]
})
