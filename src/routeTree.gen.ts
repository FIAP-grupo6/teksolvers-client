/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PrivateImport } from './routes/_private'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const PrivateDashboardLazyImport = createFileRoute('/_private/dashboard')()
const PrivateChamadosLazyImport = createFileRoute('/_private/chamados')()
const PrivateChamadoIdConsultorLazyImport = createFileRoute(
  '/_private/chamado/$id/consultor',
)()
const PrivateChamadoIdClienteLazyImport = createFileRoute(
  '/_private/chamado/$id/cliente',
)()

// Create/Update Routes

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PrivateDashboardLazyRoute = PrivateDashboardLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/dashboard.lazy').then((d) => d.Route),
)

const PrivateChamadosLazyRoute = PrivateChamadosLazyImport.update({
  path: '/chamados',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/chamados.lazy').then((d) => d.Route),
)

const PrivateChamadoIdConsultorLazyRoute =
  PrivateChamadoIdConsultorLazyImport.update({
    path: '/chamado/$id/consultor',
    getParentRoute: () => PrivateRoute,
  } as any).lazy(() =>
    import('./routes/_private/chamado/$id/consultor.lazy').then((d) => d.Route),
  )

const PrivateChamadoIdClienteLazyRoute =
  PrivateChamadoIdClienteLazyImport.update({
    path: '/chamado/$id/cliente',
    getParentRoute: () => PrivateRoute,
  } as any).lazy(() =>
    import('./routes/_private/chamado/$id/cliente.lazy').then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/_private/chamados': {
      id: '/_private/chamados'
      path: '/chamados'
      fullPath: '/chamados'
      preLoaderRoute: typeof PrivateChamadosLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/dashboard': {
      id: '/_private/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof PrivateDashboardLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/chamado/$id/cliente': {
      id: '/_private/chamado/$id/cliente'
      path: '/chamado/$id/cliente'
      fullPath: '/chamado/$id/cliente'
      preLoaderRoute: typeof PrivateChamadoIdClienteLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/chamado/$id/consultor': {
      id: '/_private/chamado/$id/consultor'
      path: '/chamado/$id/consultor'
      fullPath: '/chamado/$id/consultor'
      preLoaderRoute: typeof PrivateChamadoIdConsultorLazyImport
      parentRoute: typeof PrivateImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  PrivateRoute: PrivateRoute.addChildren({
    PrivateChamadosLazyRoute,
    PrivateDashboardLazyRoute,
    PrivateChamadoIdClienteLazyRoute,
    PrivateChamadoIdConsultorLazyRoute,
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/_private"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/_private": {
      "filePath": "_private.jsx",
      "children": [
        "/_private/chamados",
        "/_private/dashboard",
        "/_private/chamado/$id/cliente",
        "/_private/chamado/$id/consultor"
      ]
    },
    "/_private/chamados": {
      "filePath": "_private/chamados.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/dashboard": {
      "filePath": "_private/dashboard.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/chamado/$id/cliente": {
      "filePath": "_private/chamado/$id/cliente.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/chamado/$id/consultor": {
      "filePath": "_private/chamado/$id/consultor.lazy.jsx",
      "parent": "/_private"
    }
  }
}
ROUTE_MANIFEST_END */
