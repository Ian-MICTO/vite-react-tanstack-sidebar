import Dashboard from '@/features/auth/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/dashboard')({
  staticData: {
    breadcrumb: [{
      title: "Dashboard",
      path: "/dashboard",
    }]
  },
  component: Dashboard,
})
