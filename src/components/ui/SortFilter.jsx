export default function SortFilter({
    value,
    onChange,
}) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="rounded-lg border border-border-dark bg-card-dark px-4 py-2 text-sm"
        >
            <option value="featured">Mis en avant</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
            <option value="rating">Mieux notés</option>
        </select>
    );
}