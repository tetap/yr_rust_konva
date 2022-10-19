import { lazyComponent } from '../lazyComponent'

export default [
  {
    path: '/',
    element: lazyComponent(
      () => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard/Dashboard')
    )
  }
]
