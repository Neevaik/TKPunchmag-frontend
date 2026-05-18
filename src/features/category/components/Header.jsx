import BrandFilter from "@/components/ui/BrandFilter";
import SortFilter from "@/components/ui/SortFilter";

export default function CategoryHeader({
    slug,
    brands,
    selectedBrand,
    setSelectedBrand,
    sortBy,
    setSortBy,
}) {
    return (
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>
                <p className="text-sm uppercase tracking-widest text-primary">
                    Category
                </p>

                <h1 className="text-4xl font-black uppercase">
                    {slug.replaceAll("-", " ")}
                </h1>
            </div>

            <div className="flex flex-wrap gap-3">
                <BrandFilter
                    brands={brands}
                    value={selectedBrand}
                    onChange={setSelectedBrand}
                />

                <SortFilter
                    value={sortBy}
                    onChange={setSortBy}
                />
            </div>
        </div>
    );
}