import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  // beforeLoad: ({ context }) => {
  //   // If the user lands on the welcome page but is already logged in,
  //   // immediately bounce them straight to the dashboard!
  //   if (true) {
  //     throw redirect({ to: '/dashboard' })
  //   }
  // },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_welcome/"!</div>
}
