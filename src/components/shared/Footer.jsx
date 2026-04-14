import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const PRIMARY   = "#1F3F00";
const ACCENT    = "#698300";
const MID_GREEN = "#2a5200";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: PRIMARY,
        color: "rgba(255,255,255,0.85)",
        fontFamily: "inherit",
      }}
      role="contentinfo"
      aria-label="Itaai Nyatian site footer"
    >
      {/* ── Top band ── */}
      <div
        style={{
          background: `linear-gradient(90deg, ${MID_GREEN} 0%, ${ACCENT} 100%)`,
          padding: "18px 0",
        }}
      >
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-3">
          <p style={{ margin: 0, fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
            Ready to find your perfect property?
          </p>
          <Link
            to="/contactus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#fff",
              color: PRIMARY,
              fontWeight: 700,
              fontSize: "0.88rem",
              padding: "9px 22px",
              borderRadius: "999px",
              textDecoration: "none",
              transition: "opacity .2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            Get in Touch →
          </Link>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div style={{ padding: "56px 0 36px" }}>
        <div className="container">
          <div className="row g-5">

            {/* ── Brand column ── */}
            <div className="col-12 col-md-4">
              <Link to="/" style={{ textDecoration: "none" }}>
                <img
                  src="/src/assets/logo.png"
                  alt="Itaai Nyatian logo"
                  style={{ height: "48px", marginBottom: "14px" }}
                />
                <span style={{
                  display: "block",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  letterSpacing: "-0.01em",
                  marginBottom: "14px",
                }}>
                  Itaai Nyatian
                </span>
              </Link>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: "280px" }}>
                A trusted real estate partner dedicated to helping you find
                property that truly fits your needs — with transparency, value,
                and long-term growth in mind.
              </p>

              {/* Socials */}
              <div style={{ display: "flex", gap: "10px", marginTop: "22px" }}>
                {[
                  { icon: <FaFacebookF size={14} />, label: "Facebook",  href: "#" },
                  { icon: <FaInstagram size={14} />, label: "Instagram", href: "#" },
                  { icon: <FaTwitter size={14} />,   label: "Twitter",   href: "#" },
                  { icon: <FaLinkedinIn size={14} />,label: "LinkedIn",  href: "#" },
                  { icon: <FaWhatsapp size={14} />,  label: "WhatsApp",  href: "#" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      color: "#fff",
                      textDecoration: "none",
                      border: "1px solid rgba(255,255,255,0.15)",
                      transition: "background-color .2s, transform .2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = ACCENT;
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Quick links ── */}
            <div className="col-6 col-md-2">
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem",
                           letterSpacing: "0.04em", textTransform: "uppercase",
                           marginBottom: "18px" }}>
                Quick Links
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }} role="list">
                {[
                  { label: "Home",       to: "/home" },
                  { label: "Properties", to: "/properties" },
                  { label: "About Us",   to: "/aboutus" },
                  { label: "Contact Us", to: "/contactus" },
                ].map(({ label, to }) => (
                  <li key={to} style={{ marginBottom: "10px" }}>
                    <Link
                      to={to}
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        transition: "color .2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#c5d96b")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Property types ── */}
            <div className="col-6 col-md-2">
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem",
                           letterSpacing: "0.04em", textTransform: "uppercase",
                           marginBottom: "18px" }}>
                Properties
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Residential", "Commercial", "Land & Plots", "Rental Units", "Investments"].map(item => (
                  <li key={item} style={{ marginBottom: "10px" }}>
                    <Link
                      to="/properties"
                      style={{
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: "0.88rem",
                        transition: "color .2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#c5d96b")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact info ── */}
            <div className="col-12 col-md-4">
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem",
                           letterSpacing: "0.04em", textTransform: "uppercase",
                           marginBottom: "18px" }}>
                Contact
              </h3>

              {[
                {
                  icon: <FaMapMarkerAlt size={14} />,
                  text: "Nairobi, Kenya",
                },
                {
                  icon: <FaPhoneAlt size={13} />,
                  text: "+254 722 850 574",
                },
                {
                  icon: <FaWhatsapp size={14} />,
                  text: "+254 721 827 435",
                },
                {
                  icon: <FaEnvelope size={13} />,
                  text: "itaainyatian@gmail.com",
                },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: "flex", alignItems: "flex-start",
                  gap: "12px", marginBottom: "14px",
                }}>
                  <span style={{
                    color: "#c5d96b", marginTop: "2px", flexShrink: 0,
                  }}>
                    {icon}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.88rem" }}>
                    {text}
                  </span>
                </div>
              ))}

              {/* Hours badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                backgroundColor: "rgba(197,217,107,0.14)",
                border: "1px solid rgba(197,217,107,0.28)",
                color: "#c5d96b", fontSize: "0.78rem", fontWeight: 600,
                padding: "7px 14px", borderRadius: "999px", marginTop: "8px",
              }}>
                <span style={{
                  width: "7px", height: "7px", borderRadius: "50%",
                  backgroundColor: "#c5d96b", flexShrink: 0,
                }} aria-hidden="true" />
                Mon – Fri · 8:00 AM – 5:00 PM
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "18px 0",
      }}>
        <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
          <p style={{ margin: 0, fontSize: "0.8rem", color: "rgba(255,255,255,0.45)" }}>
            © {year} Itaai Nyatian. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            {["Privacy Policy", "Terms of Service"].map(label => (
              <a key={label} href="#"
                 style={{
                   color: "rgba(255,255,255,0.45)", fontSize: "0.8rem",
                   textDecoration: "none", transition: "color .2s",
                 }}
                 onMouseEnter={e => (e.currentTarget.style.color = "#c5d96b")}
                 onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
