import Carousel from "react-bootstrap/Carousel";
import HomeCarousel from "../components/home/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "../components/home/HeroSection";
import StatsSectionA from "../components/home/StatsSection";
import AboutSection from "../components/home/AboutSection";
import OfferSection from "../components/home/OfferSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeCarousel />
      <StatsSectionA />
      <OfferSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}

export default Home;
