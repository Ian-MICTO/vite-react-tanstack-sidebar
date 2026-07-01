import { createFileRoute, Link, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    Hello "/_welcome/"!
    <br />
    <Link to="/login">Go to Login</Link>
  </div>
}
