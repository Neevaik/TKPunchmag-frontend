import ActionButton from "./ActionButton";

export default function TopProductCard({
    name,
    brand,
    category,
    price,
    rating,
    image,
}) {
    return (
        <div className="
        group
        bg-card-dark
        rounded-2xl
        overflow-hidden
        border
        border-white/5
        hover:border-primary/40
        transition-all
        duration-300
        hover:-translate-y-1
        cursor-pointer
        flex
        flex-col">

            <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url(${image})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{category}</span>
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

                <ActionButton className="mt-6" size="sm">
                    Ajouter au panier
                </ActionButton>
            </div>

        </div>
    );
}