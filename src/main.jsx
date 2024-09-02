import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import mixpanel from "mixpanel-browser"
import { routeTree } from './routeTree.gen'

mixpanel.init("17cf1377da64a461e08d78a00f8f427d", {
  debug: true,
  track_pageview: "full-url",
  persistence: "localStorage",
});

const router = createRouter({ basepath: "/", routeTree })

const rootElement = document.getElementById('root')
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}