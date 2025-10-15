// src/components/home/WhyChooseUs.jsx

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar, FaHandshake, FaBolt, FaShieldAlt } from "react-icons/fa";
import land1 from "/src/assets/land1.jpg";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaStar size={20} color="#fff" />,
      title: "Quality",
      text: "We deliver only excellence and aim to exceed expectations in everything we do.",
    },
    {
      icon: <FaHandshake size={20} color="#fff" />,
      title: "Integrity",
      text: "We conduct ourselves in the highest ethical standards, demonstrating honesty and fairness in every decision and action.",
    },
    {
      icon: <FaBolt size={20} color="#fff" />,
      title: "Agility",
      text: "We execute expeditiously to address our clients’ needs.",
    },
    {
      icon: <FaShieldAlt size={20} color="#fff" />,
      title: "Courage",
      text: "We decide and act in the best interests of our clients, even in the face of personal or professional adversity.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <Container fluid className="px-4 px-md-5">
        <Row className="align-items-stretch">
          {/* Left Side - Text */}
          <Col
            xs={12}
            lg={6}
            className="d-flex flex-column justify-content-center px-4 px-md-5 py-5"
            style={{ backgroundColor: "#e3e6e2ff" }}
          >
            <h2 className="fw-bold mb-4 text-dark">Why Choose Us</h2>
            <h3 className="fw-semibold mb-4" style={{ color: "#698300" }}>
              Let us guide you Home.
            </h3>

            {features.map((feature, index) => (
              <div key={index} className="mb-4 d-flex align-items-start">
                {/* Icon Circle */}
                <div
                  className="me-3 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#698300",
                    borderRadius: "50%",
                    width: "45px",
                    height: "45px",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <h5 className="fw-bold mb-1" style={{ color: "#1F3F00" }}>
                    {feature.title}
                  </h5>
                  <p className="text-muted mb-0">{feature.text}</p>
                </div>
              </div>
            ))}

            {/* Learn More Button */}
            <div className="mt-3">
              <Button
                variant="success"
                style={{
                  backgroundColor: "#698300ff",
                  border: "none",
                  borderRadius: "30px",
                  padding: "10px 24px",
                }}
                href="/about" // Update this path later if needed
              >
                Learn More
              </Button>
            </div>
          </Col>

          {/* Right Side - Image */}
          <Col
            xs={12}
            lg={6}
            className="p-0"
            style={{
              backgroundImage: `url(${land1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "600px",
              borderRadius: "20px 20px 20px 20px",
              overflow: "hidden",
            }}
          ></Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhyChooseUs;
