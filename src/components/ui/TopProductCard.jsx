import { useState } from "react";
import ActionButton from "./ActionButton";
import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function TopProductCard({
    id,
    name,
    brand,
    category,
    price,
    rating,
    image,
}) {
    const [added, setAdded] = useState(false);

    const cloudinaryBase = `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/`;
    const imageUrl = image?.startsWith("http") ? image : `${cloudinaryBase}${image}`;

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
            <div className="group bg-card-dark rounded-2xl overflow-hidden border border-white/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col relative">

                {added && (
                    <div className="absolute top-4 right-4 z-20 bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-fade-in">
                        Ajouté au panier ✓
                    </div>
                )}

                <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                    <div>
                        <h4 className="text-white font-bold text-lg leading-tight group-hover:text-primary transition-colors">{name}</h4>
                        <p className="text-white/40 text-xs mt-1 uppercase tracking-widest">{brand}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-xl font-black text-white">${price}</span>
                            <div className="flex items-center gap-1 text-primary">
                                <span className="material-symbols-outlined text-sm fill-1">star</span>
                                <span className="text-xs font-bold text-white/80">{rating}</span>
                            </div>
                        </div>
                    </div>

                    <div onClick={handleAddToCart}>
                        <ActionButton size="sm">
                            {added ? "Ajouté ✓" : "Ajouter au panier"}
                        </ActionButton>
                    </div>
                </div>
            </div>
        </Link>
    );
}