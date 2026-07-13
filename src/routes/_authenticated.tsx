import MainLayout from '@/layouts/main-layout'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated')({
  component: MainLayout,
})
