"use client";

import { useState } from "react";
import ActionButton from "../../components/ui/ActionButton";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AddToCartButton({ productId }) {
    const [added, setAdded] = useState(false);

    const handleAddToCart = async () => {

        try {
            const res = await fetch(`${API_URL}/cart/add`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId,
                    quantity: 1,
                }),
            });

            if (!res.ok) {
                throw new Error("Erreur lors de l'ajout au panier");
            }

            setAdded(true);

            setTimeout(() => {
                setAdded(false);
            }, 2000);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {added && (
                <div className="mb-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                    Ajouté au panier ✓
                </div>
            )}

            <div onClick={handleAddToCart}>
                <ActionButton size="sm">
                    {added ? "Ajouté ✓" : "Ajouter au panier"}
                </ActionButton>
            </div>
        </>
    );
}