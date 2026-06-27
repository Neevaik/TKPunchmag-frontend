import { useState } from "react";
import ActionButton from "./ActionButton";
import Link from "next/link";
import Image from "next/image";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ProductCard({
    id,
    name,
    price,
    rating,
    brand,
    image,
    description,
}) {

    const [added, setAdded] = useState(false);
    const cloudinaryBase = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;

    const handleAddToCart = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            const res = await fetch(`${API_URL}/cart/add`, {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    productId: id,
                    quantity: 1,
                }),
            });

            const data = await res.json();
            console.log("Add to cart response:", data);

            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
        } catch (err) {
            console.error("Cart error:", err);
        }
    };

    return (
        <Link href={`/product/${id}`} className="block h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-dark bg-card-dark transition-transform hover:scale-[1.02] cursor-pointer relative">

                {added && (
                    <div className="absolute top-4 right-4 z-20 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-fade-in">
                        Ajouté au panier ✓
                    </div>
                )}

                <div className="relative">
                    <Image
                        src={`${cloudinaryBase}${image}`}
                        alt={name}
                        width={600}
                        height={600}
                    />
                    {/* {badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
                            {badge}
                        </span>
                    )} */}
                </div>

                <div className="flex flex-1 flex-col p-5">
                    <div className="space-y-3">
                        <h1 className="text-lg font-bold text-white">
                            {name}
                        </h1>

                        <p className="text-sm uppercase tracking-wide text-primary">
                            {brand}
                        </p>

                        <div className="min-h-[72px]">
                            {description && (
                                <p className="line-clamp-3 text-sm leading-relaxed text-text-muted">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-auto flex items-end justify-between pt-6">
                        <div className="space-y-1">
                            <p className="text-2xl font-black text-white">
                                ${price}
                            </p>

                            <p className="text-sm text-yellow-400">
                                ★ {rating}
                            </p>
                        </div>

                        <div onClick={handleAddToCart}>
                            <ActionButton size="sm">
                                {added ? "Ajouté ✓" : "Ajouter au panier"}
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}