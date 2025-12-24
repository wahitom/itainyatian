import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      {/* Page Intro */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#f8faf7" }}
      >
        <div className="container">
          <h1 className="fw-bold" style={{ color: "#1F3F00" }}>
            Get in Touch
          </h1>
          <p className="text-muted mt-2">
            Reach out for property inquiries, viewings, or general feedback.
          </p>
        </div>
      </section>

      {/* Quick Contact (Minimal Version) */}
      <section className="py-3 border-bottom">
        <div className="container d-flex flex-column flex-md-row justify-content-center gap-4 text-center text-md-start">
          <div>
            <FaPhoneAlt className="me-2 text-success" />
            <strong>+254 700 000 000</strong>
          </div>
          <div>
            <FaEnvelope className="me-2 text-success" />
            <strong>info@yourcompany.co.ke</strong>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-5">
        <div className="container">
          <Row className="g-5 align-items-start">
            {/* Full Contact Info */}
            <Col md={5}>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100">
                <h4 className="fw-bold mb-4" style={{ color: "#1F3F00" }}>
                  Contact Information
                </h4>

                <p className="mb-3">
                  <FaPhoneAlt className="me-3 text-success" />
                  +254 700 000 000
                </p>

                <p className="mb-3">
                  <FaEnvelope className="me-3 text-success" />
                  info@yourcompany.co.ke
                </p>

                <p className="mb-3">
                  <FaMapMarkerAlt className="me-3 text-success" />
                  Nairobi, Kenya
                </p>

                <p className="mb-0">
                  <FaClock className="me-3 text-success" />
                  Monday – Friday: 8:00 AM – 5:00 PM
                </p>
              </Card>
            </Col>

            {/* Google Form Embed */}
            <Col md={7}>
              <Card className="border-0 shadow-sm rounded-4 p-3 h-100">
                <iframe
                  src="YOUR_GOOGLE_FORM_EMBED_LINK_HERE"
                  width="100%"
                  height="520"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </Card>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}

export default Contact;
