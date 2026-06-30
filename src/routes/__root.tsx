import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import type { QueryClient } from '@tanstack/react-query'
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <div>
      <TooltipProvider>
        <Tooltip>
          <Outlet />
        </Tooltip>
        <TanStackRouterDevtools />
      </TooltipProvider>
    </div>
  )
})