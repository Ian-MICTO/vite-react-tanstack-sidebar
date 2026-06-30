import { AppShell } from '@/components/app-shell'
import { DashboardSkeleton } from '@/components/dashboard-skeleton'

function MainLayout() {
    return (
        <AppShell>
            <DashboardSkeleton />
        </AppShell>
    )
}

export default MainLayout