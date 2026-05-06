"use client";
import ActionButton from "../ui/ActionButton";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <>
            <div className="border-t border-border-dark bg-card-dark px-4 py-16 md:px-10">
                <div className="mx-auto flex max-w-[960px] flex-col items-center gap-6 text-center">
                    <div className="mb-2 flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-4xl">mail</span>
                    </div>
                    <h2 className="text-3xl font-black uppercase tracking-tighter text-white md:text-4xl">
                        Join The Corner
                    </h2>
                    <p className="max-w-lg text-text-muted">
                        Sign up for our newsletter to get training tips, fight news, and{" "}
                        <span className="font-bold text-white">15% OFF</span> your first order.
                    </p>
                    <form
                        className="mt-4 flex w-full max-w-md gap-2"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input
                            className="flex-1 rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-white placeholder:text-text-muted/50 focus:border-primary focus:ring-0"
                            placeholder="Enter your email"
                            type="email"
                        />
                        <ActionButton>
                            Join
                        </ActionButton>
                    </form>
                </div>
            </div>

            <footer className="border-t border-border-dark bg-[#120c0c] px-4 py-8">
                <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-sm text-text-muted md:flex-row">
                    <p>
                        © {year} The Corner. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="/order/confirmation" className="transition-colors hover:text-white">
                            Order status
                        </a>

                        <a href="/" className="transition-colors hover:text-white">
                            Home
                        </a>

                        <span className="cursor-default hover:text-white">Terms</span>
                        <span className="cursor-default hover:text-white">Privacy</span>
                        <span className="cursor-default hover:text-white">Contact</span>
                    </div>
                </div>
            </footer>
        </>
    );
}