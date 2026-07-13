import Login from '@/features/auth/pages/login'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_guest')({
  component: Login,
})
