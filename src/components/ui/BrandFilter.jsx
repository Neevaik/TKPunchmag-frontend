export default function BrandFilter({
    brands,
    value,
    onChange,
}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-lg border border-border-dark bg-card-dark px-4 py-2 text-sm"
        >
            <option value="all">Toutes les marques</option>

            {brands.map((brand) => (
                <option key={brand} value={brand}>
                    {brand}
                </option>
            ))}
        </select>
    );
}