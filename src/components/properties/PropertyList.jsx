import React, { useEffect, useState } from "react";
import propertiesData from "../../data/propertiesData.json";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(propertiesData.properties);
  }, []);

  // Updated categories to match your JSON and PropertyCategories.jsx
  const categories = [
    "Houses",
    "Apartments",
    "Land & Plots",
    "Commercial Spaces",
    "Borehole Drilling",
  ];

  return (
    <section className="py-5 container">
      <h2 className="text-center mb-4" style={{ color: "#1F3F00" }}>
        Available Properties
      </h2>

      {categories.map((category) => {
        const filtered = properties.filter(
          (property) => property.category === category
        );

        return (
          <div
            key={category}
            // Match the scroll target from PropertyCategories.jsx
            id={category.replace(/\s+&\s+|\s+/g, "-").toLowerCase()}
            className="mb-5"
          >
            {/* Category Heading */}
            <h3
              className="fw-bold mb-4 text-center"
              style={{ color: "#698300" }}
            >
              {category}
            </h3>

            {/* Properties under this category */}
            <div className="row">
              {filtered.length > 0 ? (
                filtered.map((property) => (
                  <div key={property.id} className="col-md-4 mb-4">
                    <div className="card shadow-sm border-0 h-100">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="card-img-top"
                        style={{ height: "250px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{property.title}</h5>
                        <p className="card-text text-muted">
                          {property.location}
                        </p>
                        <p className="fw-bold">{property.price}</p>
                        <p>{property.description}</p>
                        <button
                          className="btn btn-success w-100"
                          style={{
                            backgroundColor: "#698300",
                            border: "none",
                            transition: "transform 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                          }
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-muted">
                  No {category.toLowerCase()} at the moment.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PropertyList;
