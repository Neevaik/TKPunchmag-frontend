import Footer from "../../components/layout/Footer";
import Hero from "./components/Hero";
import CategoryFilters from "./components/CategoryFilters";
import ProductSection from "./components/ProductSection";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

export default function ShopPage() {
  return (
    <>
      <main>
        <Hero />
        <CategoryFilters />
        <ProductSection />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}