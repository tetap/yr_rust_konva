import React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

export const Routes = React.memo(() => {
  const libs: any = import.meta.glob(['./libs/*.tsx', './libs/*.ts'], { eager: true })
  const routes: RouteObject[] = []
  for (const lib in libs) {
    routes.push(...libs[lib].default)
  }
  return useRoutes(routes)
})
