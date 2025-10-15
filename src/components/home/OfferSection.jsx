// src/components/home/OfferSection.jsx

import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import land1 from "/src/assets/land1.jpg";

const offers = [
  { title: "Houses", category: "REAL ESTATE", image: land1 },
  { title: "Buildings", category: "REAL ESTATE", image: land1 },
  { title: "Plots of Land", category: "REAL ESTATE", image: land1 },
  { title: "Drilling Boreholes", category: "REAL ESTATE", image: land1 },
];

function OfferSection() {
  return (
    <div className="py-5 px-4 bg-light" style={{ marginTop: "80px" }}>
      <div className="text-center mb-5">
        <h2 className="fw-bold text-uppercase" style={{ color: "#698300" }}>
          What We Offer
        </h2>
      </div>

      <Row className="g-4 justify-content-center">
        {offers.map((offer, index) => (
          <Col key={index} md={4} lg={3}>
            <Card
              className="text-white border-0 rounded-3 overflow-hidden shadow-sm"
              style={{
                transform: "scale(1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <Card.Img
                src={offer.image}
                alt={offer.title}
                style={{ height: "450px", objectFit: "cover" }}
              />

              {/* Overlay content repositioned to bottom center */}
              <Card.ImgOverlay
                className="d-flex flex-column justify-content-end text-center p-4"
                style={{
                  backgroundColor:
                    index % 2 === 0
                      ? "rgba(31, 63, 0, 0.6)" // dark green tint
                      : "rgba(15, 32, 16, 0.6)", // slightly darker tone
                }}
              >
                <div>
                  <Card.Subtitle className="mb-2 text-uppercase fw-semibold text-white-50">
                    {offer.category}
                  </Card.Subtitle>
                  <Card.Title className="fs-3 fw-bold">
                    {offer.title}
                  </Card.Title>
                  <Button
                    variant="success"
                    className="mt-3 text-capitalize fw-semibold px-4"
                    style={{ backgroundColor: "#698300", border: "none" }}
                  >
                    View {offer.title}
                  </Button>
                </div>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default OfferSection;
