import React from "react";
import SEO from "../components/seo/SEO";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import PropertiesHero from "../components/properties/PropertiesHero";
import PropertyList from "../components/properties/PropertyList";
import PropertyCategories from "../components/properties/PropertyCategories";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

const propertiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Properties – Itaai Nyatian",
  "url": "https://itaainyatian.vercel.app/properties",
  "description": "Browse houses, land, plots, and commercial properties available through Itaai Nyatian in Kenya.",
  "provider": {
    "@type": "RealEstateAgent",
    "name": "Itaai Nyatian",
    "telephone": ["+254722850574", "+254721827435"],
    "email": "itaainyatian@gmail.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Nairobi", "addressCountry": "KE" }
  }
};

function Properties() {
  return (
    <>
      <SEO
        title="Properties – Houses, Land & Plots in Kenya"
        description="Explore our range of residential homes, commercial buildings, land and plots for sale in Nairobi and across Kenya. Find the perfect property with Itaai Nyatian."
        keywords="properties Kenya, houses for sale Nairobi, land for sale Kenya, plots Nairobi, commercial property Kenya"
        canonical="/properties"
        structuredData={propertiesStructuredData}
      />
      <Header />
      <main id="main-content">
        <PropertiesHero />
        <PropertyCategories />
        <PropertyList />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}

export default Properties;
