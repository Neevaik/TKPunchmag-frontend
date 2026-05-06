"use client";

import Link from "next/link";
import { useRef } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";

export default function ProductCarousel() {
  const products = MOCK_PRODUCTS.filter((p) => p.brand === "tkpunchmag");

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="border-y border-border-dark bg-[#120c0c] py-12">

      <div className="mb-8 flex items-center justify-between px-4 md:px-10 lg:px-40">
        <h2 className="flex items-center gap-3 text-2xl font-black uppercase tracking-tighter text-white md:text-3xl">
          <span className="material-symbols-outlined text-primary">
            workspace_premium
          </span>
          Top Contenders
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="flex size-10 items-center justify-center rounded-full border border-border-dark bg-card-dark text-white hover:border-primary hover:bg-primary"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>

          <button
            onClick={() => scroll("right")}
            className="flex size-10 items-center justify-center rounded-full border border-border-dark bg-card-dark text-white hover:border-primary hover:bg-primary"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="hide-scrollbar flex gap-6 overflow-x-auto px-4 pb-8 snap-x snap-mandatory scroll-smooth md:px-10 lg:px-40"
      >
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="group flex w-[280px] shrink-0 snap-start flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-4 transition-all hover:border-primary/30 md:w-[320px]"
          >

            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-lg bg-[#1a1212]">

              {p.badge && (
                <div className="absolute left-3 top-3 z-10 rounded bg-primary px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {p.badge}
                </div>
              )}

              <div
                className="h-3/4 w-3/4 rounded-lg bg-gradient-to-br from-gray-800 to-black bg-cover bg-center shadow-2xl"
                style={p.image ? { backgroundImage: `url(${p.image})` } : undefined}
              />
            </div>

            <div className="flex flex-col gap-2">

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold uppercase text-white group-hover:text-primary">
                    {p.title}
                  </h3>

                  {p.subtitle && (
                    <p className="mt-1 text-xs uppercase text-text-muted">
                      {p.subtitle}
                    </p>
                  )}
                </div>

                {p.rating != null && (
                  <div className="flex items-center gap-1 text-xs font-bold text-yellow-500">
                    <span className="material-symbols-outlined text-sm">star</span>
                    {p.rating}
                  </div>
                )}
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-xl font-bold text-white">
                  ${p.price.toFixed(2)}
                </span>

                <button className="rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase text-black hover:bg-primary hover:text-white">
                  Add To Cart
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}