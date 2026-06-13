"use client";
import { useState } from "react";

export default function OrderConfirmation() {
    const initialOrder = {
        _id: "ORD-123456789",
        items: [
            {
                id: 1,
                name: "Gants de boxe Pro",
                quantity: 1,
                price: 49.99,
            },
            {
                id: 2,
                name: "Protège-dents",
                quantity: 2,
                price: 9.99,
            },
            {
                id: 3,
                name: "Bandes de protection",
                quantity: 1,
                price: 12.5,
            },
        ],
        shipping: 4.99,
        status: "pending",
    };

    const [order, setOrder] = useState(initialOrder);
    const [confirmed, setConfirmed] = useState(false);

    const orderShortId = order._id.slice(-8);

    // 🗑️ retirer un article
    const handleRemoveItem = (id) => {
        const updatedItems = order.items.filter((item) => item.id !== id);

        setOrder((prev) => ({
            ...prev,
            items: updatedItems,
        }));
    };

    // ✅ confirmer commande
    const handleConfirmOrder = () => {
        setConfirmed(true);
    };

    // calcul total
    const subtotal = order.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="relative flex flex-col items-center justify-start min-h-screen px-4 py-8 md:py-12">
            <main className="w-full max-w-2xl bg-[#1a0c0c] rounded-xl shadow-2xl overflow-hidden border border-white/5">

                {/* HEADER */}
                <div className="bg-primary py-8 px-6 text-center relative overflow-hidden">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tighter italic mb-2">
                        {confirmed ? "ORDER CONFIRMED!" : "CONFIRM ORDER"}
                    </h1>

                    <p className="text-lg font-medium tracking-tight opacity-90">
                        {confirmed
                            ? "Votre commande est en cours de préparation."
                            : "Vérifiez vos articles avant validation."}
                    </p>
                </div>

                {/* INFOS */}
                <div className="grid grid-cols-2 border-b border-white/10">
                    <div className="p-6 border-r border-white/10 flex flex-col items-center text-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
                            Commande
                        </span>

                        <span className="text-xl font-bold tracking-tight">
                            #{orderShortId}
                        </span>
                    </div>

                    <div className="p-6 flex flex-col items-center text-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold mb-1">
                            Statut
                        </span>

                        <span className="text-xl font-bold tracking-tight">
                            {confirmed ? "Confirmée" : "En attente"}
                        </span>
                    </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 md:p-10 space-y-6">

                    {/* ITEMS */}
                    <div>
                        <h2 className="text-sm uppercase tracking-widest text-white/60 mb-4">
                            Articles
                        </h2>

                        {order.items.length === 0 ? (
                            <p className="text-white/50">
                                Aucun article dans la commande.
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {order.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center border-b border-white/10 pb-3"
                                    >
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-white/60">
                                                Qté: {item.quantity}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <p className="font-bold">
                                                {(item.price * item.quantity).toFixed(2)} €
                                            </p>

                                            {!confirmed && (
                                                <button
                                                    onClick={() => handleRemoveItem(item.id)}
                                                    className="text-red-400 text-sm hover:text-red-300 transition"
                                                >
                                                    Retirer
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* TOTAL */}
                    <div className="border-t border-white/10 pt-4 space-y-2">
                        <div className="flex justify-between text-white/70">
                            <span>Sous-total</span>
                            <span>{subtotal.toFixed(2)} €</span>
                        </div>

                        <div className="flex justify-between text-white/70">
                            <span>Livraison</span>
                            <span>{order.shipping.toFixed(2)} €</span>
                        </div>

                        <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                            <span>Total</span>
                            <span>{(subtotal + order.shipping).toFixed(2)} €</span>
                        </div>
                    </div>

                    {/* BUTTON CONFIRM */}
                    {!confirmed && (
                        <button
                            onClick={handleConfirmOrder}
                            disabled={order.items.length === 0}
                            className={`w-full mt-4 py-3 font-bold uppercase tracking-widest transition
                                ${
                                    order.items.length === 0
                                        ? "bg-gray-600 cursor-not-allowed"
                                        : "bg-green-600 hover:bg-green-500"
                                }
                            `}
                        >
                            Confirmer la commande
                        </button>
                    )}

                    {/* STATUS */}
                    {confirmed && (
                        <div className="text-center pt-4">
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
                                Paiement confirmé
                            </span>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}