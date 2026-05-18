import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import WhyWeFight from "@/features/home/components/WhyWeFight";
import ProductCarousel from "@/features/home/components/TopProductCard";
import AthleteSpotlight from "@/features/home/components/AthleteSpotlight";
import ErrorState from "@/components/ui/ErrorState";

import { getTopRatedProducts } from "@/lib/api/products.api";

export default async function Home() {

  const { products, error } = await getTopRatedProducts();

  return (
    <>
      <main>
        <Hero />
        <WhyWeFight />
        {error ? (
          <ErrorState title="Impossible de charger les produits" message="Une erreur est survenue lors de la récupération des produits." />) : (
          <ProductCarousel topRatedProducts={products} />
        )}
        <AthleteSpotlight />
      </main>
      <Footer />
    </>
  );
}