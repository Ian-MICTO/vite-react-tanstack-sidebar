import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest/login')({
  staticData: {
    breadcrumb: {
      title: "Login",
      path: "/_guest/login"
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_guest/login"!</div>
}
