// src/components/home/NewsletterSection.jsx

import React, { useState } from "react";
import { Form, Button, InputGroup, Alert } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";

function NewsletterSection() {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
      <div className="container text-center text-black">
        <FaEnvelope size={40} className="mb-3" style={{ color: "#698300ff" }} />
        <h2 className="fw-bold mb-2">Stay Updated With the Latest Listings</h2>
        <p className="text-muted mb-4">
          Subscribe to our newsletter and never miss out on great deals or
          property updates.
        </p>

        <Form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center flex-wrap gap-3"
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <InputGroup className="flex-grow-1">
            <Form.Control
              type="email"
              placeholder="Enter your email"
              required
              className="rounded-pill border-0 shadow-sm"
            />
          </InputGroup>
          <Button
            type="submit"
            className="rounded-pill px-4 fw-semibold shadow-sm"
            style={{
              backgroundColor: "#698300ff",
              borderColor: "#698300ff",
              transition: "background-color 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.backgroundColor = "#587000";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.backgroundColor = "#698300ff";
            }}
          >
            Subscribe
          </Button>
        </Form>

        {subscribed && (
          <Alert
            variant="success"
            className="mt-4 rounded-pill d-inline-block px-4 py-2 shadow-sm"
            style={{
              backgroundColor: "#698300ff",
              color: "#fff",
              border: "none",
            }}
          >
            🎉 Thank you for subscribing!
          </Alert>
        )}
      </div>
    </section>
  );
}

export default NewsletterSection;
