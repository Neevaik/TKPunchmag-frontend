"use client";

import { useMemo, useState } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";

import ProductCard from "@/components/ui/ProductCard";
import BrandFilter from "@/components/ui/BrandFilter";
import SortFilter from "@/components/ui/SortFilter";

import {
    filterByCategory,
    filterByBrand,
    sortProducts,
} from "@/lib/helpers/filters";

export default function CategoryPage({ slug }) {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

    const categoryProducts = useMemo(() => {
        return filterByCategory(MOCK_PRODUCTS, slug);
    }, [slug]);

    const brands = useMemo(() => {
        return [...new Set(categoryProducts.map((p) => p.brand))];
    }, [categoryProducts]);

    const filteredProducts = useMemo(() => {
        const byBrand = filterByBrand(
            categoryProducts,
            selectedBrand
        );

        return sortProducts(byBrand, sortBy);
    }, [categoryProducts, selectedBrand, sortBy]);

    const handleAddToCart = (product) => {
        console.log("Add to cart:", product);
    };

    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">

                <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div>
                        <p className="text-sm uppercase tracking-widest text-primary">
                            Category
                        </p>

                        <h1 className="text-4xl font-black uppercase">
                            {slug.replace("-", " ")}
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            subtitle={product.subtitle}
                            price={product.price}
                            rating={product.rating}
                            badge={product.badge}
                            brand={product.brand}
                            image={product.image}
                            description={product.description}
                            onAddToCart={() =>
                                handleAddToCart(product)
                            }
                        />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="mt-20 text-center">
                        <h2 className="text-2xl font-bold">
                            Aucun produit trouvé
                        </h2>

                        <p className="mt-2 text-text-muted">
                            Essaye de modifier les filtres.
                        </p>
                    </div>
                )}

            </div>
        </main>
    );
}