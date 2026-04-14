import React from "react";
import heroImage from "/src/assets/land2.jpg";

function PropertiesHero() {
  return (
    <section
      aria-label="Properties page header"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
      }}
    >
      {/* Accessible overlay */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundColor: "rgba(0,0,0,0.45)"
      }} />
      <div style={{ position: "relative", zIndex: 1, padding: "40px 20px", maxWidth: "640px" }}>
        <h1 className="fw-bold mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
          Explore Our Properties in Kenya
        </h1>
        <p className="fs-5" style={{ color: "rgba(255,255,255,0.9)" }}>
          Find your perfect plot, home, or investment opportunity in Nairobi and across Kenya today.
        </p>
      </div>
    </section>
  );
}

export default PropertiesHero;
