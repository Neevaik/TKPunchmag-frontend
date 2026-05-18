import ActionButton from "./ActionButton";
import Link from "next/link";

export default function ProductCard({
    id,
    name,
    price,
    rating,
    badge,
    brand,
    image,
    description,
    onAddToCart,
}) {

    return (
        <Link href={`/product/${id}`} className="block h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-dark bg-card-dark transition-transform hover:scale-[1.02] cursor-pointer">

                <div className="relative">
                    <img
                        src={image}
                        alt={name}
                        className="h-72 w-full object-cover"
                    />

                    {badge && (
                        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase text-white">
                            {badge}
                        </span>
                    )}
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

                        <div
                            onClick={(e) => {
                                e.preventDefault();
                                onAddToCart?.();
                            }}
                        >
                            <ActionButton size="sm">
                                Ajouter au panier
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
}