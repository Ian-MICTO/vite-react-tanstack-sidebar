import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/')({
  staticData: {
    breadcrumb: [{
      title: "Home",
      path: "/",
    }]
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/"!</div>
}
