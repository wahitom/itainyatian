import React from "react";
import Carousel from "react-bootstrap/Carousel";
import land1 from "/src/assets/land1.jpg";

const properties = [
  { title: "Green Acres Estate", desc: "Lorem ipsum dolor sit amet." },
  { title: "Savannah View Plots", desc: "Consectetur adipiscing elit." },
  { title: "Sunset Gardens", desc: "Sed do eiusmod tempor incididunt." },
  { title: "Palm Grove", desc: "Ut labore et dolore magna aliqua." },
  { title: "Hilltop Residences", desc: "Quis nostrud exercitation ullamco." },
];

function HomeCarouselMulti() {
  const chunkedProperties = [];
  for (let i = 0; i < properties.length; i += 3) {
    chunkedProperties.push(properties.slice(i, i + 3));
  }

  return (
    <div style={{ paddingBottom: "80px", width: "90%", margin: "50px auto" }}>
      <h2 className="text-center mb-4" style={{ color: "#1F3F00" }}>
        Featured Properties
      </h2>
      <Carousel interval={null}>
        {chunkedProperties.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {group.map((property, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1",
                    background: "#cdd0cbff",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={land1}
                    alt={property.title}
                    style={{
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                  />
                  <div style={{ padding: "15px" }}>
                    <h4 style={{ color: "#1F3F00" }}>{property.title}</h4>
                    <p style={{ color: "#555" }}>{property.desc}</p>
                    <button
                      style={{
                        backgroundColor: "#698300",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        marginTop: "10px",
                        cursor: "pointer",
                      }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarouselMulti;
