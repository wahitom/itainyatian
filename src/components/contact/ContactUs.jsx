import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaExternalLinkAlt,
  FaWhatsapp,
} from "react-icons/fa";

// ─── Replace with your actual Google Form embed URL ───────────────────────────
const GOOGLE_FORM_SRC =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";
const GOOGLE_FORM_DIRECT =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";
// ─────────────────────────────────────────────────────────────────────────────

const PRIMARY = "#1F3F00";
const ACCENT = "#698300";

// Inject keyframes once
const injectKeyframes = () => {
  if (document.getElementById("contact-keyframes")) return;
  const style = document.createElement("style");
  style.id = "contact-keyframes";
  style.textContent = `
    @keyframes shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    @keyframes pulseGreen {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.35; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(26px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .cu-fade { opacity: 0; animation: fadeInUp 0.65s ease forwards; }
    .cu-fade.d1 { animation-delay: 0.08s; }
    .cu-fade.d2 { animation-delay: 0.2s; }
    .cu-fade.d3 { animation-delay: 0.32s; }
  `;
  document.head.appendChild(style);
};

function InfoItem({ icon, label, value }) {
  return (
    <div style={{ display:"flex", alignItems:"flex-start", gap:"14px", marginBottom:"22px" }}>
      <span style={{
        backgroundColor:"rgba(255,255,255,0.12)", borderRadius:"8px",
        padding:"8px", flexShrink:0, color:"#c5d96b", lineHeight:1
      }}>
        {icon}
      </span>
      <div>
        <p style={{ fontSize:"0.72rem", color:"rgba(255,255,255,0.5)", textTransform:"uppercase",
                    letterSpacing:"0.09em", margin:"0 0 2px" }}>{label}</p>
        <p style={{ fontWeight:600, fontSize:"0.9rem", color:"#fff", margin:0 }}>{value}</p>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [loaded, setLoaded]           = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const [visible, setVisible]         = useState(false);
  const sectionRef                    = useRef(null);

  useEffect(() => {
    injectKeyframes();
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => { if (!loaded) setShowFallback(true); }, 12000);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <>
      {/* ── Hero Banner ── */}
      <section
        aria-label="Contact page header"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY} 0%, #2d5c00 60%, ${ACCENT} 100%)`,
          padding: "72px 0 60px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* subtle radial overlays */}
        <div aria-hidden="true" style={{
          position:"absolute", inset:0, pointerEvents:"none",
          backgroundImage:
            "radial-gradient(circle at 18% 55%, rgba(105,131,0,0.28) 0%, transparent 55%)," +
            "radial-gradient(circle at 82% 18%, rgba(255,255,255,0.07) 0%, transparent 50%)",
        }}/>

        <div className="container" style={{ position:"relative", zIndex:1 }}>
          {/* pill label */}
          <span style={{
            display:"inline-block", backgroundColor:"rgba(255,255,255,0.14)",
            color:"#fff", fontSize:"0.75rem", fontWeight:700,
            letterSpacing:"0.13em", textTransform:"uppercase",
            padding:"6px 18px", borderRadius:"999px",
            border:"1px solid rgba(255,255,255,0.22)", marginBottom:"18px",
          }}>Contact Us</span>

          <h1 style={{
            color:"#fff", fontWeight:800,
            fontSize:"clamp(1.9rem, 5vw, 3rem)",
            letterSpacing:"-0.02em", lineHeight:1.15, marginBottom:"14px",
          }}>
            We'd Love to Hear From You
          </h1>
          <p style={{
            color:"rgba(255,255,255,0.8)", fontSize:"1.05rem",
            maxWidth:"480px", margin:"0 auto 28px", lineHeight:1.65,
          }}>
            Looking for your dream property or have a question? Our team is
            ready to help — reach out and let's talk.
          </p>

          <a
            href={GOOGLE_FORM_DIRECT} target="_blank" rel="noopener noreferrer"
            style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              backgroundColor: ACCENT, color:"#fff",
              fontWeight:600, fontSize:"0.9rem",
              padding:"11px 26px", borderRadius:"999px",
              textDecoration:"none",
              boxShadow:"0 4px 18px rgba(0,0,0,0.2)",
              transition:"transform .2s, box-shadow .2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "scale(1.04)";
              e.currentTarget.style.boxShadow = "0 6px 26px rgba(0,0,0,0.26)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.2)";
            }}
          >
            <FaExternalLinkAlt size={12} />
            Open Form in New Tab
          </a>
        </div>
      </section>

      {/* ── Quick contact bar ── */}
      <div style={{ backgroundColor:"#fff", borderBottom:"1px solid #e8ede4", padding:"14px 0" }}
           role="complementary" aria-label="Quick contact details">
        <div className="container">
          <div style={{
            display:"flex", flexWrap:"wrap",
            justifyContent:"center", gap:"24px", textAlign:"center",
          }}>
            {[
              { icon:<FaPhoneAlt/>, text:"+254 722 850 574" },
              { icon:<FaWhatsapp/>, text:"+254 721 827 435" },
              { icon:<FaEnvelope/>, text:"itaainyatian@gmail.com" },
              { icon:<FaClock/>,    text:"Mon – Fri · 8 AM – 5 PM" },
            ].map(({ icon, text }) => (
              <span key={text} style={{ display:"flex", alignItems:"center",
                gap:"7px", fontWeight:600, color:PRIMARY, fontSize:"0.88rem" }}>
                <span style={{ color:ACCENT }}>{icon}</span>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <section
        ref={sectionRef}
        aria-label="Contact form and information"
        style={{ backgroundColor:"#f8faf7", padding:"64px 0 80px" }}
      >
        <div className="container">
          <Row className="g-4 align-items-stretch">

            {/* ── Info card ── */}
            <Col xs={12} md={4}>
              <div
                className={`cu-fade d1`}
                style={{
                  backgroundColor: PRIMARY,
                  borderRadius:"16px", padding:"36px 28px",
                  color:"#fff", height:"100%", position:"relative",
                  overflow:"hidden",
                  boxShadow:"0 8px 32px rgba(31,63,0,0.2)",
                }}
                role="complementary" aria-label="Contact information"
              >
                {/* decorative circles */}
                <div aria-hidden="true" style={{ position:"absolute", bottom:"-40px", right:"-40px",
                  width:"160px", height:"160px", borderRadius:"50%",
                  backgroundColor:"rgba(255,255,255,0.05)" }}/>
                <div aria-hidden="true" style={{ position:"absolute", top:"-30px", right:"30px",
                  width:"80px", height:"80px", borderRadius:"50%",
                  backgroundColor:"rgba(105,131,0,0.22)" }}/>

                <h2 style={{ fontWeight:700, fontSize:"1.25rem",
                             marginBottom:"28px", color:"#fff" }}>
                  Contact Information
                </h2>

                <InfoItem icon={<FaPhoneAlt size={13}/>}     label="Phone"        value="+254 722 850 574" />
                <InfoItem icon={<FaWhatsapp size={13}/>}     label="WhatsApp"     value="+254 721 827 435" />
                <InfoItem icon={<FaEnvelope size={13}/>}     label="Email"        value="itaainyatian@gmail.com" />
                <InfoItem icon={<FaMapMarkerAlt size={13}/>} label="Location"     value="Nairobi, Kenya" />
                <InfoItem icon={<FaClock size={13}/>}        label="Office Hours" value="Mon – Fri: 8 AM – 5 PM" />

                {/* response time tag */}
                <div style={{
                  display:"inline-flex", alignItems:"center", gap:"7px",
                  backgroundColor:"rgba(197,217,107,0.18)", color:"#c5d96b",
                  fontSize:"0.77rem", fontWeight:600,
                  padding:"7px 14px", borderRadius:"999px",
                  border:"1px solid rgba(197,217,107,0.28)",
                  marginTop:"28px",
                }}>
                  <span aria-hidden="true" style={{
                    width:"7px", height:"7px", borderRadius:"50%",
                    backgroundColor:"#c5d96b",
                    animation:"pulseGreen 2s infinite",
                    flexShrink:0,
                  }}/>
                  Usually respond within 24 hours
                </div>
              </div>
            </Col>

            {/* ── Form card ── */}
            <Col xs={12} md={8}>
              <div
                className={`cu-fade d2`}
                style={{
                  backgroundColor:"#fff", borderRadius:"16px",
                  padding:"32px 28px", height:"100%",
                  border:"1px solid #e8ede4",
                  boxShadow:"0 4px 24px rgba(31,63,0,0.07)",
                }}
              >
                {/* Card header */}
                <div style={{
                  display:"flex", justifyContent:"space-between",
                  alignItems:"center", flexWrap:"wrap", gap:"10px",
                  marginBottom:"20px", paddingBottom:"16px",
                  borderBottom:"1px solid #f0f3ec",
                }}>
                  <div>
                    <h2 style={{ fontWeight:700, color:PRIMARY,
                                 fontSize:"1.2rem", marginBottom:"3px" }}>
                      Send Us a Message
                    </h2>
                    <p style={{ color:"#718355", fontSize:"0.83rem", margin:0 }}>
                      Fill in the form below and we'll be in touch shortly.
                    </p>
                  </div>
                  <a
                    href={GOOGLE_FORM_DIRECT} target="_blank" rel="noopener noreferrer"
                    aria-label="Open contact form in a new tab"
                    style={{
                      display:"inline-flex", alignItems:"center", gap:"6px",
                      color:ACCENT, fontSize:"0.79rem", fontWeight:600,
                      textDecoration:"none",
                    }}
                  >
                    <FaExternalLinkAlt size={10}/>
                    Open in new tab
                  </a>
                </div>

                {/* iframe wrapper */}
                <div
                  style={{ position:"relative", minHeight:"720px" }}
                  aria-live="polite"
                  aria-label="Google contact form"
                >
                  {/* Skeleton */}
                  {!loaded && !showFallback && (
                    <div aria-hidden="true" role="presentation"
                         style={{ position:"absolute", inset:0, zIndex:1, padding:"4px 0" }}>
                      {[...Array(7)].map((_, i) => (
                        <div key={i} style={{ marginBottom:"18px" }}>
                          <div style={{
                            height:"12px", width: i === 0 ? "50%" : "30%",
                            borderRadius:"4px", marginBottom:"8px",
                            background:"linear-gradient(90deg,#f0f0f0 25%,#e4e4e4 50%,#f0f0f0 75%)",
                            backgroundSize:"200% 100%", animation:"shimmer 1.5s infinite",
                          }}/>
                          <div style={{
                            height:"40px", borderRadius:"8px",
                            background:"linear-gradient(90deg,#f0f0f0 25%,#e4e4e4 50%,#f0f0f0 75%)",
                            backgroundSize:"200% 100%", animation:"shimmer 1.5s infinite",
                          }}/>
                        </div>
                      ))}
                      <p style={{ textAlign:"center", color:"#bbb",
                                  fontSize:"0.8rem", marginTop:"16px" }}>
                        Loading form…
                      </p>
                    </div>
                  )}

                  {/* Fallback */}
                  {showFallback && !loaded && (
                    <div role="alert" style={{
                      textAlign:"center", padding:"60px 20px", color:"#718355",
                    }}>
                      <FaEnvelope size={40} color={ACCENT}
                        style={{ marginBottom:"14px", opacity:0.6 }}/>
                      <p style={{ fontWeight:600, color:PRIMARY, marginBottom:"6px" }}>
                        Trouble loading the form?
                      </p>
                      <p style={{ fontSize:"0.86rem", marginBottom:"16px" }}>
                        Check your connection or open the form directly in a new tab.
                      </p>
                      <a
                        href={GOOGLE_FORM_DIRECT} target="_blank" rel="noopener noreferrer"
                        style={{
                          display:"inline-flex", alignItems:"center", gap:"8px",
                          backgroundColor:ACCENT, color:"#fff",
                          fontWeight:600, fontSize:"0.87rem",
                          padding:"10px 24px", borderRadius:"999px",
                          textDecoration:"none",
                        }}
                      >
                        <FaExternalLinkAlt size={12}/>
                        Open Form in New Tab
                      </a>
                    </div>
                  )}

                  {/* The iframe */}
                  <iframe
                    src={GOOGLE_FORM_SRC}
                    title="Itaai Nyatian Contact Form – property inquiries and messages"
                    loading="lazy"
                    width="100%"
                    onLoad={() => setLoaded(true)}
                    style={{
                      minHeight:"720px",
                      border:"none",
                      borderRadius:"10px",
                      display:"block",
                      opacity: loaded ? 1 : 0,
                      transition:"opacity 0.4s ease",
                    }}
                    sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* ── Address strip ── */}
          <div
            className="cu-fade d3"
            style={{
              marginTop:"44px", backgroundColor:"#fff", borderRadius:"14px",
              padding:"26px 32px", border:"1px solid #e8ede4",
              boxShadow:"0 2px 12px rgba(31,63,0,0.05)", textAlign:"center",
            }}
          >
            <FaMapMarkerAlt color={ACCENT} size={20} style={{ marginBottom:"10px" }}/>
            <h3 style={{ fontWeight:700, color:PRIMARY, fontSize:"1.05rem", marginBottom:"6px" }}>
              Visit Our Office
            </h3>
            <p style={{ color:"#718355", fontSize:"0.88rem", margin:0 }}>
              Nairobi, Kenya &nbsp;·&nbsp; Monday to Friday, 8:00 AM – 5:00 PM
              &nbsp;·&nbsp;{" "}
              <a
                href="https://maps.google.com/?q=Nairobi,Kenya"
                target="_blank" rel="noopener noreferrer"
                style={{ color:ACCENT, fontWeight:600, textDecoration:"none" }}
              >
                Get Directions →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Mobile iframe height tweaks */}
      <style>{`
        @media (max-width: 576px) {
          iframe[title*="Contact Form"] { min-height: 920px !important; }
        }
        @media (min-width: 577px) and (max-width: 768px) {
          iframe[title*="Contact Form"] { min-height: 820px !important; }
        }
      `}</style>
    </>
  );
}
