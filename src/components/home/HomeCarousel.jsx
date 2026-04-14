// src/components/home/HomeCarousel.jsx

import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import land1 from "/src/assets/land1.jpg";

const properties = [
  {
    title: "Green Acres Estate",
    desc: "Spacious residential plots in a secure, serene environment — ideal for families building their dream home.",
    alt: "Green Acres Estate – residential plots for sale in Kenya by Itaai Nyatian",
  },
  {
    title: "Savannah View Plots",
    desc: "Prime land with breathtaking views, perfect for investment or personal development in Kenya.",
    alt: "Savannah View Plots – prime land for sale in Kenya by Itaai Nyatian",
  },
  {
    title: "Sunset Gardens",
    desc: "Affordable plots in a growing neighbourhood with ready infrastructure and easy access roads.",
    alt: "Sunset Gardens – affordable plots and land in Nairobi Kenya by Itaai Nyatian",
  },
  {
    title: "Palm Grove",
    desc: "Exclusive gated community plots featuring modern amenities and lush landscaping throughout.",
    alt: "Palm Grove – exclusive gated community property in Kenya by Itaai Nyatian",
  },
  {
    title: "Hilltop Residences",
    desc: "Premium hilltop homes and plots offering panoramic views and cool highland climate living.",
    alt: "Hilltop Residences – premium highland homes and plots in Kenya by Itaai Nyatian",
  },
];

function HomeCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const chunkedProperties = [];
  for (let i = 0; i < properties.length; i += itemsPerSlide) {
    chunkedProperties.push(properties.slice(i, i + itemsPerSlide));
  }

  return (
    <section
      aria-labelledby="featured-properties-heading"
      style={{ paddingBottom: "80px", width: "90%", margin: "50px auto" }}
    >
      <h2
        id="featured-properties-heading"
        className="text-center mb-4"
        style={{ color: "#1F3F00" }}
      >
        Featured Properties in Kenya
      </h2>
      <Carousel interval={null} aria-label="Featured property listings slideshow">
        {chunkedProperties.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                display: "flex",
                gap: itemsPerSlide === 1 ? "10px" : "20px",
                justifyContent: "center",
                flexWrap: "nowrap",
                padding: itemsPerSlide === 1 ? "0 15px" : "0",
              }}
            >
              {group.map((property, i) => (
                <article
                  key={i}
                  style={{
                    flex: "1",
                    background: "#cdd0cbff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                    minWidth: itemsPerSlide === 1 ? "90%" : "auto",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <img
                    src={land1}
                    alt={property.alt}
                    loading="lazy"
                    style={{ width: "100%", height: "400px", objectFit: "cover" }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h3 style={{ color: "#1F3F00", fontSize: "1.1rem" }}>{property.title}</h3>
                    <p style={{ color: "#555" }}>{property.desc}</p>
                    <Link
                      to="/properties"
                      style={{
                        backgroundColor: "#698300",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        marginTop: "10px",
                        cursor: "pointer",
                        textDecoration: "none",
                        display: "inline-block",
                        fontWeight: 600,
                        transition: "background-color 0.3s ease",
                      }}
                      aria-label={`View details for ${property.title}`}
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default HomeCarousel;
