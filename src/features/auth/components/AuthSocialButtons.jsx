"use client";

import Button from "@/components/ui/ActionButton";

export default function AuthSocialButtons() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Button type="button">
                <span className="text-xs font-bold uppercase tracking-tight">
                    GMAIL
                </span>
            </Button>

            <Button type="button">
                <span className="text-xs font-bold uppercase tracking-tight">
                    Apple
                </span>
            </Button>
        </div>
    );
}