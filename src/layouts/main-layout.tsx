import { AppShell } from '@/components/app-shell'
import { Outlet } from '@tanstack/react-router'

function MainLayout() {
    return (
        <AppShell>
            <Outlet />
        </AppShell>
    )
}

export default MainLayout