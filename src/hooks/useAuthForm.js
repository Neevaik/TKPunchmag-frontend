"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useAuthForm() {
    const router = useRouter();
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("bob");
    const [password, setPassword] = useState("123");
    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isLogin = mode === "login";

    function switchMode(newMode) {
        setMode(newMode);
        setError("");
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");


        try {
            const url = `${API_URL}/user/${isLogin ? "login" : "signup"}`;
            console.log("url : ", url)


            const body = isLogin
                ? { username, password }
                : { email, username, password };

            const res = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Error");

            if (data.ok) router.push("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return {
        mode,
        isLogin,
        setMode: switchMode,
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
    };
}