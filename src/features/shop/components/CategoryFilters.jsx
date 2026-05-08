export default function CategoryFilters() {
    const categories = [
        "All Gear",
        "Gloves",
        "Wraps",
        "Heavy Bags",
        "Headgear",
        "Shin Guards",
    ];

    return (
        <div className="flex gap-4 p-8 overflow-x-auto border-b border-white/5 bg-background-dark">
            {categories.map((cat) => (
                <button
                    key={cat}
                    className="px-6 py-2 rounded-full text-xs font-black uppercase bg-white/5 hover:bg-primary/20"
                >
                    {cat}
                </button>
            ))}
        </div>
    );
}