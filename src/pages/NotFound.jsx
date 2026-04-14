import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Itaai Nyatian</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main style={{ minHeight: "60vh", display: "flex", flexDirection: "column",
                     alignItems: "center", justifyContent: "center",
                     backgroundColor: "#f8faf7", padding: "80px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "5rem", fontWeight: 800, color: "#1F3F00", margin: 0 }}>404</h1>
        <h2 style={{ color: "#698300", marginBottom: "16px" }}>Page Not Found</h2>
        <p style={{ color: "#718355", maxWidth: "380px", marginBottom: "32px" }}>
          Sorry, we couldn't find the page you're looking for. Let's get you back on track.
        </p>
        <Link to="/" style={{
          backgroundColor: "#698300", color: "#fff", padding: "12px 28px",
          borderRadius: "999px", fontWeight: 700, textDecoration: "none"
        }}>
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
