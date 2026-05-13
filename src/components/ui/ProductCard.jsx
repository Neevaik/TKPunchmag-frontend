export default function ProductCard({
    title,
    subtitle,
    price,
    rating,
    badge,
    brand,
    image,
    description,
}) {
    return (
        <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border-dark bg-card-dark transition-transform hover:scale-[1.02]">
            <div className="relative">
                <img
                    src={image}
                    alt={title}
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
                    <p className="text-sm uppercase tracking-wide text-primary">
                        {brand}
                    </p>

                    <div className="min-h-[90px]">
                        <h2 className="line-clamp-2 text-2xl font-bold text-white">
                            {title}
                        </h2>

                        {subtitle && (
                            <p className="mt-1 line-clamp-1 text-text-muted">
                                {subtitle}
                            </p>
                        )}
                    </div>

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

                    <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold uppercase text-white transition hover:opacity-90">
                        Add to cart
                    </button>
                </div>
            </div>
        </article>
    );
}