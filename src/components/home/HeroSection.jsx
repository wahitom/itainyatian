import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import land1 from "/src/assets/land1.jpg";
import land2 from "/src/assets/land2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <section aria-label="Featured properties slideshow" style={{ height: "65vh", overflow: "hidden" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={land1}
            alt="Scenic residential land and property available in Kenya through Itaai Nyatian"
            style={{ objectFit: "cover", height: "65vh" }}
            loading="eager"
            fetchpriority="high"
          />
          <Carousel.Caption>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
              Your Dream Property Awaits in Kenya
            </h1>
            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", maxWidth: "520px", margin: "0 auto 16px" }}>
              Discover premium residential homes, land, and plots across Nairobi and Kenya with Itaai Nyatian.
            </p>
            <Link
              to="/properties"
              style={{
                backgroundColor: "#698300", color: "white",
                border: "none", padding: "10px 24px",
                borderRadius: "5px", marginTop: "10px",
                cursor: "pointer", textDecoration: "none",
                fontWeight: 600, display: "inline-block",
              }}
              aria-label="Browse our property listings"
            >
              View Properties
            </Link>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={land2}
            alt="Prime land and plots for sale in Nairobi Kenya – Itaai Nyatian Real Estate"
            style={{ objectFit: "cover", height: "65vh" }}
            loading="lazy"
          />
          <Carousel.Caption>
            <h2 style={{ fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.8rem)" }}>
              Invest in Kenya's Growing Real Estate Market
            </h2>
            <p style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", maxWidth: "520px", margin: "0 auto 16px" }}>
              From borehole drilling to commercial developments — we handle every aspect of your property journey.
            </p>
            <Link
              to="/contactus"
              style={{
                backgroundColor: "#698300", color: "white",
                border: "none", padding: "10px 24px",
                borderRadius: "5px", marginTop: "10px",
                cursor: "pointer", textDecoration: "none",
                fontWeight: 600, display: "inline-block",
              }}
              aria-label="Contact Itaai Nyatian for property inquiries"
            >
              Get in Touch
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HeroSection;
