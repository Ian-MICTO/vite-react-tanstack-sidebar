import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  staticData: {
    breadcrumb: [{
      title: "Dashboard",
      path: "/dashboard",
    }]
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/dashboard"!</div>
}
