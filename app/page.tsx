import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/FeaturedProducts";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <FeaturedProducts />
        <WhyUs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
