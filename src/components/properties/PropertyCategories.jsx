import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaHome,
  FaBuilding,
  FaTree,
  FaWarehouse,
  FaTractor,
} from "react-icons/fa";

function PropertyCategories() {
  const categories = [
    {
      id: 1,
      icon: <FaHome size={40} color="#698300" />,
      title: "Houses",
      desc: "Modern and luxurious homes for families and individuals.",
      link: "#houses",
    },
    {
      id: 2,
      icon: <FaBuilding size={40} color="#698300" />,
      title: "Apartments",
      desc: "Affordable and spacious city apartments.",
      link: "#apartments",
    },
    {
      id: 3,
      icon: <FaTree size={40} color="#698300" />,
      title: "Land & Plots",
      desc: "Prime plots in great locations for your next investment.",
      link: "#land-plots", // ✅ fixed
    },
    {
      id: 4,
      icon: <FaWarehouse size={40} color="#698300" />,
      title: "Commercial Spaces",
      desc: "Office and retail properties in strategic areas.",
      link: "#commercial-spaces",
    },

    {
      id: 5,
      icon: <FaTractor size={40} color="#698300" />,
      title: "Borehole Drilling",
      desc: "Borehole Drilling services",
      link: "#borehole-drilling",
    },
  ];

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.querySelector(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8faf7" }}>
      <div className="container text-center text-black px-3">
        <h2 className="fw-bold mb-5" style={{ color: "#1F3F00" }}>
          Explore Property Categories
        </h2>

        {/* Category Cards */}
        <Row className="justify-content-center g-4">
          {categories.map((cat) => (
            <Col key={cat.id} xs={12} sm={6} md={4} lg={2}>
              <Card
                onClick={(e) => handleScroll(e, cat.link)}
                className="h-100 shadow-sm border-0 rounded-4 text-decoration-none"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#fff",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.backgroundColor = "#f9fff0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0, 0, 0, 0.05)";
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
              >
                <Card.Body className="p-4 d-flex flex-column align-items-center text-center">
                  <div className="mb-3">{cat.icon}</div>
                  <Card.Title
                    className="fw-bold mb-2"
                    style={{ color: "#1F3F00", fontSize: "1.1rem" }}
                  >
                    {cat.title}
                  </Card.Title>
                  <Card.Text
                    className="text-muted"
                    style={{ fontSize: "0.9rem", lineHeight: "1.4" }}
                  >
                    {cat.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default PropertyCategories;
