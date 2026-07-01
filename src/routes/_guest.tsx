import { useIsAuthenticated } from '@/features/auth/auth-hooks'
import Login from '@/features/auth/pages/login'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  beforeLoad: () => {
    if (useIsAuthenticated()) {
      throw redirect({ to: '/dashboard' })
    }
  },
  component: Login,
})