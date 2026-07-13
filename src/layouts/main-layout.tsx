import { AppBreadcrumbs } from '@/components/app-breadcrumbs'
import { AppShell } from '@/components/app-shell'
import { DashboardSkeleton } from '@/components/dashboard-skeleton'
import { Outlet } from '@tanstack/react-router'

function MainLayout() {
    return (
        <AppShell>
            <Outlet />
        </AppShell>
    )
}

export default MainLayout