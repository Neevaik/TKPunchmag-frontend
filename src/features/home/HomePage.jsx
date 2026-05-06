import Footer from "@/components/layout/Footer";
import Hero from "@/features/home/components/Hero";
import WhyWeFight from "@/features/home/components/WhyWeFight";
import ProductCarousel from "@/features/home/components/ProductCarousel";
import AthleteSpotlight from "@/features/home/components/AthleteSpotlight";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <WhyWeFight />
        <ProductCarousel />
        <AthleteSpotlight />
      </main>
      <Footer />
    </>
  );
}