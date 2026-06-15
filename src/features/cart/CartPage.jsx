"use client";

import { useState } from "react";
import { useCart } from "@/hooks/useCart";
import ErrorState from "@/components/ui/ErrorState";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CartPage() {
    const { cart, loading, error, removeItem } = useCart();

    const [confirmed, setConfirmed] = useState(false);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [checkoutError, setCheckoutError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);

    const items = cart?.items ?? [];

    const subtotal = items.reduce((sum, item) => {
        return sum + (item.product?.price ?? 0) * item.quantity;
    }, 0);

    const shipping = cart?.shipping ?? 4.99;

    const handleConfirm = async () => {
        try {
            setIsCheckingOut(true);
            setCheckoutError(null);

            const res = await fetch("http://localhost:5000/order/checkout/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    items: cart.items,
                }),
            });

            if (!res.ok) {
                throw new Error("Checkout failed");
            }

            const data = await res.json();

            const orderId = data?.order?._id;

            if (!orderId) {
                throw new Error("Order ID not found");
            }

            const paymentRes = await fetch(
                "http://localhost:5000/payment/create-intent",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        orderId: orderId,
                    }),
                }
            );

            if (!paymentRes.ok) {
                throw new Error("Payment intent failed");
            }

            const paymentData = await paymentRes.json();

            const clientSecret = paymentData.clientSecret;

            setClientSecret(clientSecret);

        } catch (err) {
            setCheckoutError("Impossible de finaliser la commande ou le paiement.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-background-dark text-white">
                Chargement du panier...
            </div>
        );
    }

    if (error) {
        return (
            <ErrorState
                title="Erreur panier"
                message="Impossible de charger le panier. Êtes-vous connecté ?"
            />
        );
    }

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-start bg-background-dark px-4 py-8 md:py-12">
            <main className="w-full max-w-2xl overflow-hidden rounded-xl border border-white/5 bg-[#1a0c0c] shadow-2xl">

                <div className="relative overflow-hidden bg-primary px-6 py-8 text-center">
                    <h1 className="mb-2 text-5xl font-black italic tracking-tighter md:text-6xl">
                        {confirmed ? "COMMANDE CONFIRMÉE !" : "MON PANIER"}
                    </h1>

                    <p className="text-lg font-medium tracking-tight opacity-90">
                        {confirmed
                            ? "Votre commande est en cours de préparation."
                            : "Vérifiez vos articles avant validation."}
                    </p>
                </div>

                <div className="p-6 md:p-10 space-y-6">

                    {/* ITEMS */}
                    <div>
                        <h2 className="mb-4 text-sm uppercase tracking-widest text-white/60">
                            Articles
                        </h2>

                        {items.length === 0 ? (
                            <p className="text-white/50">Votre panier est vide.</p>
                        ) : (
                            <div className="space-y-3">
                                {items.map((item) => (
                                    <div
                                        key={item.product?._id}
                                        className="flex items-center justify-between border-b border-white/10 pb-3"
                                    >
                                        <div>
                                            <p className="font-semibold">
                                                {item.product?.name}
                                            </p>
                                            <p className="text-sm text-white/60">
                                                Qté : {item.quantity}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <p className="font-bold">
                                                {(
                                                    (item.product?.price ?? 0) *
                                                    item.quantity
                                                ).toFixed(2)}{" "}
                                                €
                                            </p>

                                            {!confirmed && (
                                                <button
                                                    onClick={() =>
                                                        removeItem(item.product?._id)
                                                    }
                                                    className="text-sm text-red-400 transition hover:text-red-300"
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
                    <div className="space-y-2 border-t border-white/10 pt-4">
                        <div className="flex justify-between text-white/70">
                            <span>Sous-total</span>
                            <span>{subtotal.toFixed(2)} €</span>
                        </div>

                        <div className="flex justify-between text-white/70">
                            <span>Livraison</span>
                            <span>{shipping.toFixed(2)} €</span>
                        </div>

                        <div className="flex justify-between border-t border-white/10 pt-2 text-lg font-bold">
                            <span>Total</span>
                            <span>{(subtotal + shipping).toFixed(2)} €</span>
                        </div>
                    </div>

                    {/* ERROR */}
                    {checkoutError && (
                        <p className="text-center text-sm text-red-400">
                            {checkoutError}
                        </p>
                    )}

                    {clientSecret ? (
                        <Elements stripe={stripePromise} options={{ clientSecret }}>
                            <CheckoutForm onSuccess={() => setConfirmed(true)} />
                        </Elements>
                    ) : (
                        <button
                            onClick={handleConfirm}
                            disabled={items.length === 0 || isCheckingOut}
                            className="w-full rounded-lg bg-primary py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isCheckingOut
                                ? "Validation..."
                                : "Confirmer la commande"}
                        </button>
                    )}

                    {confirmed && (
                        <div className="pt-4 text-center">
                            <span className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                                Paiement confirmé
                            </span>
                        </div>
                    )}
                </div>
            </main >
        </div >
    );
}