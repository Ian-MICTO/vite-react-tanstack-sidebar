import MainLayout from '@/layouts/main-layout'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: MainLayout,
})

function RouteComponent() {
  return <div>Hello "/_authenticated"!</div>
}
