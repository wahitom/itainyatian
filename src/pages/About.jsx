import React from "react";
import SEO from "../components/seo/SEO";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import AboutUs from "../components/aboutus/AboutUs";
import TestimonialsSection from "../components/home/TestimonialsSection";

const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Us – Itaai Nyatian",
  "url": "https://itaainyatian.vercel.app/aboutus",
  "description": "Learn about Itaai Nyatian, a trusted real estate company in Nairobi, Kenya with over 10 years of experience helping clients buy, sell and invest in property.",
  "mainEntity": {
    "@type": "RealEstateAgent",
    "name": "Itaai Nyatian",
    "foundingLocation": { "@type": "Place", "name": "Nairobi, Kenya" },
    "telephone": ["+254722850574", "+254721827435"],
    "email": "itaainyatian@gmail.com"
  }
};

function About() {
  return (
    <>
      <SEO
        title="About Us – Trusted Real Estate in Nairobi, Kenya"
        description="Itaai Nyatian has been helping Kenyans buy, sell and invest in property for over 10 years. Learn about our story, mission, values and team."
        keywords="about Itaai Nyatian, real estate company Nairobi, property agents Kenya, trusted realtors Kenya"
        canonical="/aboutus"
        structuredData={aboutStructuredData}
      />
      <Header />
      <main id="main-content">
        <AboutUs />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}

export default About;
