"use client";
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useCart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCart = async () => {
        try {
            setError(null);
            const res = await fetch(`${API_URL}/cart`, {
                credentials: "include",
            });
            if (!res.ok) throw new Error();
            const data = await res.json();
            setCart(data ?? []);
        } catch {
            setCart([]);
            setError("Impossible de charger le panier");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchCart(); }, []);

    const addItem = async (productId, quantity = 1) => {
        await fetch(`${API_URL}/cart/add`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId, quantity }),
        });
        fetchCart();
    };

    const removeItem = async (productId) => {
        try {
            const res = await fetch(`${API_URL}/cart/remove/${productId}`, {
                method: "DELETE",
                credentials: "include",
            });
            if (!res.ok) throw new Error();
            fetchCart();
        } catch {
            setError("Impossible de retirer cet article");
        }
    };

    return { cart, loading, error, addItem, removeItem };
}