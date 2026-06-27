"use client";

export default function AuthModeToggle({ mode, setMode }) {
    return (
        <div className="mb-6 flex rounded-lg border border-white/10 bg-white/5 p-1">
            <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 rounded-md py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === "login"
                        ? "bg-primary text-white"
                        : "text-white/50 hover:text-white"
                    }`}
            >
                Login
            </button>

            <button
                type="button"
                onClick={() => setMode("signup")}
                className={`flex-1 rounded-md py-2 text-xs font-bold uppercase tracking-widest transition-colors ${mode === "signup"
                        ? "bg-primary text-white"
                        : "text-white/50 hover:text-white"
                    }`}
            >
                Sign up
            </button>
        </div>
    );
}