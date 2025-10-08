import React from "react";
import Carousel from "react-bootstrap/Carousel";
import land1 from "/src/assets/land1.jpg";

function HomeCarouselSingle() {
  return (
    <div style={{ width: "90%", margin: "50px auto" }}>
      <h2 className="text-center mb-4" style={{ color: "#1F3F00" }}>
        Featured Properties
      </h2>
      <Carousel>
        {[1, 2, 3, 4, 5].map((slide, i) => (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={land1}
              alt={`Property ${slide}`}
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <Carousel.Caption
              style={{
                background: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <h3>Property {slide} Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum.
              </p>
              <button
                style={{
                  backgroundColor: "#698300",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  marginTop: "10px",
                  cursor: "pointer",
                }}
              >
                View Details
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarouselSingle;
