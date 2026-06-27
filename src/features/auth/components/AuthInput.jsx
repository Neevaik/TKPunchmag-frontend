"use client";

export default function AuthInput({
    label,
    icon,
    type = "text",
    value,
    onChange,
    placeholder,
    autoComplete,
    rightSlot,
}) {
    const fieldClass =
        "w-full rounded-lg border-white/10 bg-white/5 py-3.5 pl-11 pr-4 text-white outline-none transition-all placeholder:text-white/20 focus:border-primary focus:ring-1 focus:ring-primary";

    return (
        <div className="space-y-2">
            <label className="ml-1 text-xs font-bold uppercase tracking-widest text-white/50">
                {label}
            </label>

            <div className="group relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary">
                    {icon}
                </span>

                <input
                    className={`${fieldClass} ${rightSlot ? "pr-12" : ""}`}
                    type={type}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required
                />

                {rightSlot}
            </div>
        </div>
    );
}