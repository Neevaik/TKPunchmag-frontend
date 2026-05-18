"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ui/ProductCard";
import CategoryHeader from "./components/Header";
import {
    filterByCategory,
    filterByBrand,
    sortProducts,
} from "@/lib/helpers/filters";
import { getByCategory } from "@/lib/api/products.api";

export default function CategoryPage({ slug }) {
    const [selectedBrand, setSelectedBrand] = useState("all");
    const [sortBy, setSortBy] = useState("featured");

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            const result = await getByCategory(slug);

            if (!result.error) {
                setProducts(result.products || []);
            } else {
                setProducts([]);
            }

            setLoading(false);
        };

        if (slug) {
            loadProducts();
        }
    }, [slug]);

    const categoryProducts = useMemo(() => {
        return filterByCategory(products, slug);
    }, [products, slug]);

    const brands = useMemo(() => {
        return [...new Set(categoryProducts.map((p) => p.brand))];
    }, [categoryProducts]);

    const filteredProducts = useMemo(() => {
        const byBrand = filterByBrand(categoryProducts, selectedBrand);
        return sortProducts(byBrand, sortBy);
    }, [categoryProducts, selectedBrand, sortBy]);

    const handleAddToCart = (product) => {
        console.log("Add to cart:", product);
    };

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

                <CategoryHeader
                    slug={slug}
                    brands={brands}
                    selectedBrand={selectedBrand}
                    setSelectedBrand={setSelectedBrand}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                />

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            subtitle={product.subtitle}
                            price={product.price}
                            rating={product.rating}
                            badge={product.badge}
                            brand={product.brand}
                            image={product.images[0]}
                            description={product.description}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    ))}
                </div>

            </div>
        </main>
    );
}