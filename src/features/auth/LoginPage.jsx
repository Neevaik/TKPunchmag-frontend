"use client";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '../../components/ui/ActionButton'

const fieldClass =
    'w-full rounded-lg border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none transition-all placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary'

export default function LoginPage() {
    const router = useRouter()
    const [mode, setMode] = useState('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('123')
    const [username, setUsername] = useState('bob')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    async function handleSubmit(event) {
        event.preventDefault()
        setError('')
        setLoading(true)

        try {
            const url =
                mode === "login"
                    ? `${API_URL}/user/login`
                    : `${API_URL}/user/signup`

            const body = mode === "login" ? { username, password } : { email, password, username }

            console.log("Submitting:", { url, body, username, password, email })

            const res = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(body),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Error")
            }

            if (data.ok === true) {
                router.push("/")
            }

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    function goLogin() {
        setMode('login')
        setError('')
    }

    function goSignup() {
        setMode('signup')
        setError('')
    }

    return (
        <>
            <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden p-4 bg-gym-overlay">
                <div className="pointer-events-none absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-[120px]" />
                <div className="pointer-events-none absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-[150px]" />
                <div className="relative z-10 w-full max-w-md">
                    <div className="glass-panel rounded-xl border border-white/10 p-8 shadow-2xl">
                        <div className="mb-8 text-center">
                            <h2 className="mb-2 text-3xl font-extrabold uppercase italic tracking-tight text-white">
                                {mode === 'login' ? 'Back in the Ring' : 'Join the Gym'}
                            </h2>
                            <p className="text-sm text-white/60">
                                {mode === 'login'
                                    ? 'Enter the corner to access your fighter stats and drills.'
                                    : 'Create your account to track orders and saved gear.'}
                            </p>
                        </div>

                        <div className="mb-6 flex rounded-lg border border-white/10 bg-white/5 p-1">
                            <button
                                type="button"
                                className={`flex-1 rounded-md py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === 'login' ? 'bg-primary text-white' : 'text-white/50 hover:text-white'}`}
                                onClick={goLogin}>
                                Sign in
                            </button>
                            <button
                                type="button"
                                className={`flex-1 rounded-md py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === 'signup' ? 'bg-primary text-white' : 'text-white/50 hover:text-white'}`}
                                onClick={goSignup}>
                                Sign up
                            </button>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            {error ? (
                                <p
                                    className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200"
                                    role="alert"
                                >
                                    {error}
                                </p>
                            ) : null}

                            {mode === 'signup' ? (
                                <div className="space-y-2">
                                    <label className="ml-1 text-xs font-bold uppercase tracking-widest text-white/50">
                                        Email
                                    </label>

                                    <div className="group relative">
                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary">
                                            mail
                                        </span>

                                        <input
                                            className={fieldClass}
                                            placeholder="you@example.com"
                                            type="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                            ) : null}

                            <div className="space-y-2">
                                <label className="ml-1 text-xs font-bold uppercase tracking-widest text-white/50">
                                    Username
                                </label>
                                <div className="group relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-primary">
                                        person
                                    </span>
                                    <input
                                        className={fieldClass}
                                        placeholder="Ring name"
                                        type="text"
                                        value={username}
                                        onChange={(ev) => setUsername(ev.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between px-1">
                                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">
                                        Password
                                    </label>
                                    {mode === 'login' ? (
                                        <Button type="button" variant="link" size="sm">
                                            Forgot?
                                        </Button>
                                    ) : null}
                                </div>
                                <div className="group relative">
                                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 transition-colors group-focus-within:text-primary">
                                        lock
                                    </span>
                                    <input
                                        className={`${fieldClass} pr-12`}
                                        placeholder="••••••••"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 transition-colors hover:text-white"
                                        aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                                        onClick={() => setShowPassword((v) => !v)}
                                    >
                                        <span className="material-symbols-outlined text-xl">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <Button type="submit" variant="primary" disabled={loading}>
                                {loading ? '…' : mode === 'login' ? 'Sign In' : 'Create account'}
                                {!loading ? (
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                        bolt
                                    </span>
                                ) : null}
                            </Button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest text-white/30">
                                <span className="bg-transparent px-4 backdrop-blur-sm">Or Spar with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button type="button">
                                <span className="text-xs font-bold uppercase tracking-tight">Google</span>
                            </Button>
                            <Button type="button">
                                <span className="text-xs font-bold uppercase tracking-tight">Apple</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
