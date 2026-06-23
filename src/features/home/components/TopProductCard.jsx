"use client";

import TopProductCard from "@/components/ui/TopProductCard";


export default function ProductCarousel({ topRatedProducts }) {



  return (
    <section className="border-y border-border-dark bg-[#120c0c] py-12">
      <div className="mb-8 flex items-center justify-between px-4 md:px-10 lg:px-40">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">
          <span className="material-symbols-outlined text-primary">workspace_premium</span>
          Top Contenders
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topRatedProducts.map((product) => (
          <TopProductCard
            key={product._id}
            id={product._id}
            name={product.name}
            brand={product.brand}
            category={product.category}
            price={product.price}
            rating={product.rating}
            image={product.images?.[0]}
          />
        ))}
      </div>
    </section>
  );
}