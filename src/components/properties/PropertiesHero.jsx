// src/components/properties/PropertiesHero.jsx
import React from "react";
import heroImage from "/src/assets/land2.jpg"; // replace with your own

function PropertiesHero() {
  return (
    <section
      className="text-center text-white d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "40px",
          borderRadius: "12px",
        }}
      >
        <h1 className="fw-bold mb-3">Explore Our Properties</h1>
        <p className="fs-5">
          Find your perfect plot, home, or investment opportunity today.
        </p>
      </div>
    </section>
  );
}

export default PropertiesHero;
