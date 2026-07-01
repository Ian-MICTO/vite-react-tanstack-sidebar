import { cn } from "@/lib/utils"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('demo@example.com')
    const [password, setPassword] = useState('password123')
    const [error, setError] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (email === 'demo@example.com' && password === 'password123') {
            // auth.login(email, password)
            setError('')
            navigate({ to: '/dashboard' })
            return
        }
        setError('Use demo@example.com / password123 to simulate login.')
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="w-full max-w-sm rounded-lg border bg-card p-6 shadow-sm">
                <h1 className="text-lg font-semibold">Login</h1>
                <p className={cn(
                    "text-xs text-muted-foreground",
                )}>
                    Use the demo credentials to test the redirect flow.
                </p>
                <br />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border px-3 py-2"
                        />
                    </div>

                    <div>
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md border px-3 py-2"
                        />
                    </div>

                    {error ? <p className={cn(
                        "text-xs py-3 text-red-500/80",
                    )}>{error}</p> : null}

                    <button type="submit">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login