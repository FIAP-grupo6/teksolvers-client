import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import mixpanel from "mixpanel-browser"
import { routeTree } from './routeTree.gen'

mixpanel.init("key", {
  debug: true,
  track_pageview: "full-url",
  persistence: "localStorage",
});

const queryClient = new QueryClient()

const router = createRouter({ basepath: "/", routeTree })

const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}