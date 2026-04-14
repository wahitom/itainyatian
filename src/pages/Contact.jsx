import React from "react";
import SEO from "../components/seo/SEO";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import ContactUs from "../components/contact/ContactUs";

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Itaai Nyatian",
  "url": "https://itaainyatian.vercel.app/contactus",
  "description": "Get in touch with Itaai Nyatian for property inquiries, viewings, or investment advice in Nairobi, Kenya.",
  "mainEntity": {
    "@type": "RealEstateAgent",
    "name": "Itaai Nyatian",
    "telephone": ["+254722850574", "+254721827435"],
    "email": "itaainyatian@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nairobi",
      "addressCountry": "KE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "17:00"
    }
  }
};

function Contact() {
  return (
    <>
      <SEO
        title="Contact Us – Get in Touch with Itaai Nyatian"
        description="Reach out to Itaai Nyatian for property inquiries, viewings, and investment guidance. Call +254 722 850 574 or email itaainyatian@gmail.com."
        keywords="contact Itaai Nyatian, property inquiry Kenya, real estate contact Nairobi, reach us"
        canonical="/contactus"
        structuredData={contactStructuredData}
      />
      <Header />
      <main id="main-content">
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
