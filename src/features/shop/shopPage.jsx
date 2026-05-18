import Footer from "../../components/layout/Footer";
import Hero from "./components/Hero";
import CategoryFilters from "./components/CategoryFilters";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import GuideSection from "./components/Guide";
import ErrorState from "@/components/ui/ErrorState";

import { getTopRatedProducts } from "@/lib/api/products.api";

export default async function ShopPage() {

  const { products, error } = await getTopRatedProducts();

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <main className="flex flex-col">
        <Hero />
        <CategoryFilters />
        {error ? (
          <ErrorState title="Impossible de charger les produits" message="Une erreur est survenue lors de la récupération des produits." />) : (
          <ProductSection topRatedProducts={products} />
        )}
        <GuideSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}