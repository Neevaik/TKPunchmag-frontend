"use client";
import { useState, useEffect } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function useCart() {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCart = async () => {
        try {
            const res = await fetch(`${API_URL}/cart`, {
                credentials: "include",
            });
            if (!res.ok) throw new Error();
            const data = await res.json();
            setCart(data ?? []);
        } catch {
            setCart([]);
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
        await fetch(`${API_URL}/cart/remove`, {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ productId }),
        });
        fetchCart();
    };

    return { cart, loading, addItem, removeItem };
}