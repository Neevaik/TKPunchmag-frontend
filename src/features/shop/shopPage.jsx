import Footer from "../../components/layout/Footer";
import Hero from "./components/Hero";
import CategoryFilters from "./components/CategoryFilters";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import GuideSection from "./components/Guide";

export default async function ShopPage() {
  const res = await fetch("http://localhost:5000/product/top-rated", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch top products");
  }

  const topRatedProducts = await res.json();

  return (
    <>
      <main>
        <Hero />
        <CategoryFilters />
        <ProductSection topRatedProducts={topRatedProducts} />
        <GuideSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}