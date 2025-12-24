import React from "react";
import Header from "../components/shared/Header";
import PropertiesHero from "../components/properties/PropertiesHero";
import PropertyList from "../components/properties/PropertyList";
import PropertyCategories from "../components/properties/PropertyCategories";
import TestimonialsSection from "../components/home/TestimonialsSection";
import NewsletterSection from "../components/home/NewsletterSection";

function Properties() {
  return (
    <>
      <Header />
      <PropertiesHero />
      <PropertyCategories />
      <PropertyList />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}

export default Properties;
