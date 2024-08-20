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
const PrivateOpenedTicketLazyImport = createFileRoute(
  '/_private/opened-ticket',
)()
const PrivateNovoTicketLazyImport = createFileRoute('/_private/novo-ticket')()
const PrivateMeusChamadosLazyImport = createFileRoute(
  '/_private/meus-chamados',
)()
const PrivateDashboardLazyImport = createFileRoute('/_private/dashboard')()

// Create/Update Routes

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const PrivateOpenedTicketLazyRoute = PrivateOpenedTicketLazyImport.update({
  path: '/opened-ticket',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/opened-ticket.lazy').then((d) => d.Route),
)

const PrivateNovoTicketLazyRoute = PrivateNovoTicketLazyImport.update({
  path: '/novo-ticket',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/novo-ticket.lazy').then((d) => d.Route),
)

const PrivateMeusChamadosLazyRoute = PrivateMeusChamadosLazyImport.update({
  path: '/meus-chamados',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/meus-chamados.lazy').then((d) => d.Route),
)

const PrivateDashboardLazyRoute = PrivateDashboardLazyImport.update({
  path: '/dashboard',
  getParentRoute: () => PrivateRoute,
} as any).lazy(() =>
  import('./routes/_private/dashboard.lazy').then((d) => d.Route),
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
    '/_private/dashboard': {
      id: '/_private/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof PrivateDashboardLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/meus-chamados': {
      id: '/_private/meus-chamados'
      path: '/meus-chamados'
      fullPath: '/meus-chamados'
      preLoaderRoute: typeof PrivateMeusChamadosLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/novo-ticket': {
      id: '/_private/novo-ticket'
      path: '/novo-ticket'
      fullPath: '/novo-ticket'
      preLoaderRoute: typeof PrivateNovoTicketLazyImport
      parentRoute: typeof PrivateImport
    }
    '/_private/opened-ticket': {
      id: '/_private/opened-ticket'
      path: '/opened-ticket'
      fullPath: '/opened-ticket'
      preLoaderRoute: typeof PrivateOpenedTicketLazyImport
      parentRoute: typeof PrivateImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  PrivateRoute: PrivateRoute.addChildren({
    PrivateDashboardLazyRoute,
    PrivateMeusChamadosLazyRoute,
    PrivateNovoTicketLazyRoute,
    PrivateOpenedTicketLazyRoute,
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
        "/_private/dashboard",
        "/_private/meus-chamados",
        "/_private/novo-ticket",
        "/_private/opened-ticket"
      ]
    },
    "/_private/dashboard": {
      "filePath": "_private/dashboard.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/meus-chamados": {
      "filePath": "_private/meus-chamados.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/novo-ticket": {
      "filePath": "_private/novo-ticket.lazy.jsx",
      "parent": "/_private"
    },
    "/_private/opened-ticket": {
      "filePath": "_private/opened-ticket.lazy.jsx",
      "parent": "/_private"
    }
  }
}
ROUTE_MANIFEST_END */
