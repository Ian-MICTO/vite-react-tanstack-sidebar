import { useCurrentPath } from '@/hooks/use-current-path'
import { Link, useMatches } from '@tanstack/react-router'

export function AppBreadcrumbs() {
    // Get all active route matches
    const { breadcrumbs } = useCurrentPath();
    console.log(breadcrumbs);

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-600 my-4">
            {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1

                return (
                    <>
                        <div key={crumb.path} className="flex items-center gap-2">
                            {index > 0 && <span className="text-gray-400">/</span>}
                            {isLast ? (
                                <span className="font-semibold text-gray-900">{crumb.title}</span>
                            ) : (
                                <Link to={crumb.path} className="hover:underline hover:text-blue-600">
                                    {crumb.title}
                                </Link>
                            )}
                        </div>
                        Test
                    </>
                )
            })}
        </nav>
    )
}
