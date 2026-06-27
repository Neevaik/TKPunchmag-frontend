"use client";

import useAuthForm from "../../hooks/useAuthForm";
import AuthInput from "./components/AuthInput";
import AuthModeToggle from "./components/AuthModeToggle";
import AuthSocialButtons from "./components/AuthSocialButtons";
import Button from "@/components/ui/ActionButton";

export default function LoginPage() {
    const {
        mode,
        isLogin,
        setMode,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        loading,
        error,
        handleSubmit,
    } = useAuthForm();

    return (
        <div className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden p-4 bg-gym-overlay">
            <div className="relative z-10 w-full max-w-md">
                <div className="glass-panel rounded-xl border border-white/10 p-8 shadow-2xl">

                    <div className="mb-8 text-center">
                        <h2 className="mb-2 text-3xl font-extrabold uppercase italic">
                            {isLogin ? "Back in the Ring" : "Join the Gym"}
                        </h2>

                        <p className="text-sm text-white/60">
                            {isLogin ? "Enter the corner to access your fighter stats." : "Create your account to track orders."}
                        </p>
                    </div>

                    <AuthModeToggle mode={mode} setMode={setMode} />

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {error && (
                            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                                {error}
                            </p>
                        )}

                        {!isLogin && (
                            <AuthInput
                                label="Email"
                                icon="mail"
                                type="email"
                                value={email}
                                onChange={setEmail}
                                placeholder="you@example.com"
                                autoComplete="email"
                            />
                        )}

                        <AuthInput
                            label="Username"
                            icon="person"
                            value={username}
                            onChange={setUsername}
                            placeholder="Ring name"
                            autoComplete="username"
                        />

                        <AuthInput
                            label="Password"
                            icon="lock"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={setPassword}
                            placeholder="••••••••"
                            autoComplete={isLogin ? "current-password" : "new-password"}
                            rightSlot={
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white">
                                    <span className="material-symbols-outlined text-xl">
                                        {showPassword ? "visibility_off" : "visibility"}
                                    </span>
                                </button>
                            }
                        />

                        <Button type="submit" variant="primary" disabled={loading}>
                            {loading ? "..." : isLogin ? "Sign In" : "Create account"}
                        </Button>
                    </form>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>

                        <div className="relative flex justify-center text-xs font-bold uppercase text-white/30">
                            <span className="px-4">Or Spar with</span>
                        </div>
                    </div>

                    <AuthSocialButtons />
                </div>
            </div>
        </div>
    );
}