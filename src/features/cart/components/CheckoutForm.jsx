// src/features/cart/components/CheckoutForm.jsx
"use client";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

export default function CheckoutForm({ onSuccess }) {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: { return_url: window.location.origin + "/order/confirmation" },
            redirect: "if_required",
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            onSuccess();
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <PaymentElement />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full py-3 bg-green-600 hover:bg-green-500 font-bold uppercase tracking-widest disabled:bg-gray-600"
            >
                {loading ? "Paiement..." : "Payer maintenant"}
            </button>
        </form>
    );
}