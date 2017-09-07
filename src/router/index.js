import Vue from 'vue'
import VueRouter from 'vue-router'
import menuModule from '../store/menu'

const DashBoard = () => import('component/DashBoard')
const NotFound = () => import('component/NotFound')

Vue.use(VueRouter)

function generateRoutesFromMenu(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i += 1) {
    const item = menu[i]
    if (item.path) {
      routes.push(item)
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes)
    }
  }
  return routes
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard,
    },
    ...generateRoutesFromMenu(menuModule.state.items),
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound,
    },
  ],
  mode: 'history',
})

export default router
