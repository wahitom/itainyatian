import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function AboutUs() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f8faf7" }}>
      <div className="container">
        {/* Intro Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/src/assets/land2.jpg"
              alt="About us"
              className="img-fluid rounded-4 shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#1F3F00" }}>
              Who We Are
            </h2>
            <p className="text-muted">
              We are a trusted real estate company dedicated to helping
              individuals, families, and investors find property that truly fits
              their needs. From residential homes to prime land and commercial
              spaces, we focus on transparency, value, and long-term growth.
            </p>
            <p className="text-muted">
              Our approach combines deep local market knowledge with a
              client-first mindset, ensuring every transaction is clear, secure,
              and rewarding.
            </p>
          </Col>
        </Row>

        {/* Our Story */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/src/assets/land2.jpg"
              alt="Our story"
              className="img-fluid rounded-4 shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#1F3F00" }}>
              Our Story
            </h2>
            <p className="text-muted">
              We started with a simple goal: to make property ownership easier
              and more accessible. Over time, we have grown by staying true to
              honest advice, verified listings, and meaningful client
              relationships.
            </p>
          </Col>
        </Row>

        {/* Mission Vision Values */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/src/assets/land2.jpg"
              alt="Mission and values"
              className="img-fluid rounded-4 shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#1F3F00" }}>
              Our Mission & Values
            </h2>
            <p className="text-muted">
              <strong>Mission:</strong> To connect people with property
              opportunities that build security and lasting value.
            </p>
            <p className="text-muted">
              <strong>Vision:</strong> To become a trusted name in real estate
              through integrity and excellence.
            </p>
            <ul className="text-muted">
              <li>Transparency</li>
              <li>Integrity</li>
              <li>Client-first service</li>
              <li>Market expertise</li>
            </ul>
          </Col>
        </Row>

        {/* What Makes Us Different */}
        <Row className="align-items-center mb-5 flex-md-row-reverse">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/src/assets/land2.jpg"
              alt="Why choose us"
              className="img-fluid rounded-4 shadow-sm"
            />
          </Col>
          <Col md={6}>
            <h2 className="fw-bold mb-3" style={{ color: "#1F3F00" }}>
              What Makes Us Different
            </h2>
            <ul className="text-muted">
              <li>Verified properties and clear documentation</li>
              <li>Personalized property matching</li>
              <li>Strong understanding of local markets</li>
              <li>End-to-end client support</li>
            </ul>
          </Col>
        </Row>

        {/* Team Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-4" style={{ color: "#1F3F00" }}>
            Meet the Team
          </h2>
          <Row className="g-4 justify-content-center">
            {[1, 2, 3].map((member) => (
              <Col key={member} md={4} sm={6}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Img
                    variant="top"
                    src="/src/assets/land2.jpg"
                    className="rounded-top-4"
                  />
                  <Card.Body className="text-center">
                    <Card.Title className="fw-bold">Team Member</Card.Title>
                    <Card.Text className="text-muted">
                      Real Estate Consultant
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Call to Action */}
        <div
          className="text-center py-5 rounded-4"
          style={{ backgroundColor: "#e9f2df" }}
        >
          <h3 className="fw-bold mb-3" style={{ color: "#1F3F00" }}>
            Ready to Find Your Next Property?
          </h3>
          <p className="text-muted mb-4">
            Explore our listings or get in touch with us today.
          </p>
          <button
            className="btn btn-success px-4 py-2"
            style={{ backgroundColor: "#698300", border: "none" }}
          >
            View Properties
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
