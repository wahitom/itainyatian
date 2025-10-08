import React from "react";
import Carousel from "react-bootstrap/Carousel";
import land1 from "/src/assets/land1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection() {
  return (
    <div style={{ height: "65vh", overflow: "hidden" }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={land1}
            alt="First slide"
            style={{ objectFit: "cover", height: "65vh" }}
          />
          <Carousel.Caption>
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <button
              style={{
                backgroundColor: "#698300",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              View Properties
            </button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={land1}
            alt="Second slide"
            style={{ objectFit: "cover", height: "65vh" }}
          />
          <Carousel.Caption>
            <h3>Lorem Ipsum Dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              vitae elit libero, a pharetra augue mollis interdum.
            </p>
            <button
              style={{
                backgroundColor: "#698300",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              View Properties
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
