import lazyLoad from '@/utils/lazyLoad'

const state = {
  items: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      meta: {
        icon: 'app',
      },
      component: lazyLoad('DashBoard'),
    },
    {
      name: 'exp1',
      path: '/exp1',
      meta: {
        icon: 'exp',
      },
      component: lazyLoad('DashBoard'),
    },
  ],
}

export default {
  state,
}
