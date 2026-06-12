"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import CategoryHeader from "./components/Header";
import { filterByBrand, sortProducts } from "@/lib/helpers/filters";
import { getByCategory } from "@/lib/api/products.api";

export default function CategoryPage({ slug }) {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [sortBy, setSortBy] = useState("rating");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!slug) return;

        let ignore = false;

        const loadProducts = async () => {
            setLoading(true);
            setError(false);

            const result = await getByCategory(slug);

            if (ignore) return;

            if (result?.error) {
                setProducts([]);
                setError(true);
            } else {
                setProducts(result?.products ?? []);
            }

            setLoading(false);
        };

        loadProducts();

        return () => {
            ignore = true;
        };
    }, [slug]);

    const brands = useMemo(() => {
        return [...new Set(products.map((p) => p.brand))];
    }, [products]);

    const filteredProducts = useMemo(() => {
        const byBrand = filterByBrand(products, selectedBrand);
        return sortProducts(byBrand, sortBy);
    }, [products, selectedBrand, sortBy]);

    if (loading) {
        return (
            <main className="min-h-screen bg-background-dark text-white flex items-center justify-center">
                Loading products...
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background-dark px-4 py-10 text-white md:px-10">
            <div className="mx-auto max-w-7xl">

                <CategoryHeader slug={slug} brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} sortBy={sortBy} setSortBy={setSortBy} />

                {error && (
                    <p className="text-red-400 mb-4">
                        Erreur lors du chargement des produits
                    </p>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            name={product.name}
                            price={product.price}
                            rating={product.rating}
                            brand={product.brand}
                            image={product.images?.[0]}
                            description={product.description}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}