// src/components/home/TestimonialsSectionLightBG.jsx

import React from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "James Kariuki",
    subtitle: "Home Buyer",
    text: "Working with this team made buying my first home a smooth and stress-free experience. They guided me through every step with patience and professionalism.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "Naomi Wambui",
    subtitle: "Land Investor",
    text: "I purchased several plots through them and was impressed by their honesty and quick communication. Highly recommend their services!",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "Brian Otieno",
    subtitle: "Construction Client",
    text: "They helped me build and complete my dream home on time. The quality of work was excellent and the team was always transparent.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
  {
    name: "Lilian Njeri",
    subtitle: "Property Seller",
    text: "I sold my property faster than I expected. Their team handled everything — from listing to finalizing the deal — with exceptional professionalism.",
    img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  },
];

function TestimonialsSectionLightBG() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container text-center text-black px-3">
        {/* Rating */}
        <div className="mb-4">
          <h2 className="fw-bold mb-2">What Our Clients Say</h2>
          <div className="d-flex justify-content-center align-items-center gap-2">
            <span className="fs-4 fw-semibold">4.8</span>
            <div>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={20} color="#FFD700" />
              ))}
            </div>
          </div>
          <p className="text-muted mt-2">Based on 120+ verified reviews</p>
        </div>

        {/* Testimonials */}
        <Row className="justify-content-center g-4 mb-4">
          {testimonials.map((t, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <Card
                className="h-100 shadow-sm border-0 rounded-4"
                style={{
                  backgroundColor: "#fff",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.05)";
                }}
              >
                <Card.Body className="p-4 d-flex flex-column align-items-center text-center">
                  <Image
                    src={t.img}
                    roundedCircle
                    width="70"
                    height="70"
                    className="mb-3 shadow-sm bg-light p-2"
                    alt="Default profile silhouette"
                  />
                  <Card.Text className="text-muted fst-italic mb-3">
                    “{t.text}”
                  </Card.Text>
                  <hr className="w-50" />
                  <Card.Title className="fw-bold text-dark mb-0">
                    {t.name}
                  </Card.Title>
                  <Card.Subtitle className="text-success">
                    {t.subtitle}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Leave a Review Button */}
        <Button
          className="px-4 py-2 fw-semibold border-0"
          style={{
            backgroundColor: "#698300",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          href="/contact" // will point to Contact Us page later
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#5c7200";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#698300";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Leave a Review
        </Button>
      </div>
    </section>
  );
}

export default TestimonialsSectionLightBG;
