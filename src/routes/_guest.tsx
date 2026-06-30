import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  staticData: {
    breadcrumb: {
      title: "Guest",
      path: "/_guest"
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_guest"!</div>
}
