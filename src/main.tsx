import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import type { BreadCrumbItem } from './types/breadcrumb'

const queryClient = new QueryClient()
const router = createRouter({
  routeTree: routeTree,
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  export interface Register {
    router: typeof router
  }

  interface StaticDataRouteOption {
    breadcrumb?: BreadCrumbItem
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
