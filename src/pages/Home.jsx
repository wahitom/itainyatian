import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SEO from "../components/seo/SEO";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import HeroSection from "../components/home/HeroSection";
import HomeCarousel from "../components/home/HomeCarousel";
import StatsSectionA from "../components/home/StatsSection";
import AboutSection from "../components/home/AboutSection";
import OfferSection from "../components/home/OfferSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Itaai Nyatian – Real Estate & Property Kenya",
  "url": "https://itaainyatian.vercel.app/",
  "description": "Itaai Nyatian offers residential homes, commercial buildings, land, plots, borehole drilling and construction services across Kenya.",
  "publisher": {
    "@type": "Organization",
    "name": "Itaai Nyatian",
    "telephone": ["+254722850574", "+254721827435"],
    "email": "itaainyatian@gmail.com"
  }
};

function Home() {
  return (
    <>
      <SEO
        title="Real Estate & Property in Nairobi, Kenya"
        description="Itaai Nyatian – your trusted real estate partner in Kenya. Browse residential homes, land, plots, commercial properties, and construction services in Nairobi and beyond."
        keywords="real estate Kenya, property Nairobi, land for sale Kenya, houses Nairobi, plots Kenya, borehole drilling, Itaai Nyatian"
        canonical="/"
        structuredData={homeStructuredData}
      />
      <Header />
      <main id="main-content">
        <HeroSection />
        <HomeCarousel />
        <StatsSectionA />
        <AboutSection />
        <OfferSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
