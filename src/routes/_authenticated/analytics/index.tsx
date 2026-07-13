import Analytics from '@/features/analytics'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/analytics/')({
  staticData: {
    breadcrumb: [{
      title: "Analytics",
      path: "/analytics",
    }]
  },
  component: Analytics,
})
