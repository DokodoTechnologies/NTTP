"use client";
import { useState } from "react";

export default function Principles() {
  const [showAll, setShowAll] = useState(false);

  const corePrinciples = [
    {
      title: "Diversity, Inclusion & Equity",
      desc: "We believe in inclusive and equitable peace process outcomes. We contribute to non-violence, democracy, human rights, and life with dignity.",
    },
    {
      title: "Impartiality & Democratic Values",
      desc: "Our approaches to conflict resolution are impartial, democratic, and free from bias.",
    },
    {
      title: "Passion, Professionalism & Partnership",
      desc: "We are committed with passion and accountability. We build trusted, respectful collaborations with like-minded partners.",
    },
    {
      title: "Integrity & Ethics",
      desc: "We uphold integrity and ethics while remaining transparent in our work and respecting confidentiality on sensitive matters.",
    },
    {
      title: "Advocacy",
      desc: "We advocate for democratic inclusion and the sincere implementation of peace agreements using evidence-based practices.",
    },
  ];

  return (
    <section
      style={{
        backgroundColor: "#f4f6f8",
        padding: "5rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "0.85rem",
            letterSpacing: "1.5px",
            color: "#5ba4d4",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          Our Core Principles
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            color: "#333",
            marginBottom: "2rem",
          }}
        >
          Guiding Values for Sustainable Peace
        </h2>

        <div style={{ textAlign: "left" }}>
          {corePrinciples.slice(0, showAll ? corePrinciples.length : 2).map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "1.5rem 2rem",
                marginBottom: "1.5rem",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h4 style={{ color: "#5ba4d4", marginBottom: "0.5rem" }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "1rem", color: "#555" }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => setShowAll(!showAll)}
            style={{
              backgroundColor: "#5ba4d4",
              border: "none",
              color: "#fff",
              padding: "0.6rem 1.5rem",
              borderRadius: "5px",
              fontSize: "0.95rem",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {showAll ? "Show Less" : "Learn More"}
          </button>
        </div>
      </div>
    </section>
  );
}
