import MainLayout from '@/layouts/main-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { useIsAuthenticated } from '@/features/auth/auth-hooks'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: () => {
    if (!useIsAuthenticated()) {
      throw redirect({ to: '/login' })
    }
  },
  component: MainLayout,
})
