// src/components/home/HomeCarouselMulti.jsx

import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import land1 from "/src/assets/land1.jpg";

const properties = [
  { title: "Green Acres Estate", desc: "Lorem ipsum dolor sit amet." },
  { title: "Savannah View Plots", desc: "Consectetur adipiscing elit." },
  { title: "Sunset Gardens", desc: "Sed do eiusmod tempor incididunt." },
  { title: "Palm Grove", desc: "Ut labore et dolore magna aliqua." },
  { title: "Hilltop Residences", desc: "Quis nostrud exercitation ullamco." },
];

function HomeCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 992) {
        setItemsPerSlide(2); // Tablet
      } else {
        setItemsPerSlide(3); // Desktop
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

  const handleLearnMore = (property) => {
    alert(`More info about ${property.title} coming soon!`);
  };

  return (
    <div style={{ paddingBottom: "80px", width: "90%", margin: "50px auto" }}>
      <h2 className="text-center mb-4" style={{ color: "#1F3F00" }}>
        Featured Properties
      </h2>
      <Carousel interval={null}>
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
                <div
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
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(0,0,0,0.1)";
                  }}
                >
                  <img
                    src={land1}
                    alt={property.title}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h4 style={{ color: "#1F3F00" }}>{property.title}</h4>
                    <p style={{ color: "#555" }}>{property.desc}</p>
                    <button
                      onClick={() => handleLearnMore(property)}
                      style={{
                        backgroundColor: "#698300",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        marginTop: "10px",
                        cursor: "pointer",
                        transition:
                          "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#566a00";
                        e.target.style.transform =
                          "translateY(-3px) scale(1.05)";
                        e.target.style.boxShadow = "0 6px 14px rgba(0,0,0,0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "#698300";
                        e.target.style.transform = "translateY(0) scale(1)";
                        e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;
