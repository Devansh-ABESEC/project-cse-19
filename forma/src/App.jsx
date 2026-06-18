import { useState, useEffect, useRef } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Viken Lounge Chair",
    category: "Seating",
    price: 1290,
    tag: "Bestseller",
    color: "#C4A882",
    description: "Oak frame, natural linen upholstery. Designed for reading corners and long afternoons.",
    dims: "W 72 × D 80 × H 76 cm",
  },
  {
    id: 2,
    name: "Hald Side Table",
    category: "Tables",
    price: 480,
    tag: "New",
    color: "#8B9E8B",
    description: "Smoked ash with hand-hammered brass inlay. A companion to the Viken chair.",
    dims: "Ø 45 × H 52 cm",
  },
  {
    id: 3,
    name: "Strom Shelf System",
    category: "Storage",
    price: 2150,
    tag: null,
    color: "#B0A090",
    description: "Modular walnut and steel shelving. Expands as your library does.",
    dims: "W 120 × D 28 × H 210 cm",
  },
  {
    id: 4,
    name: "Rask Dining Table",
    category: "Tables",
    price: 1850,
    tag: "New",
    color: "#A89070",
    description: "Solid white oak with a hand-oiled finish. Seats six with quiet confidence.",
    dims: "W 200 × D 90 × H 74 cm",
  },
  {
    id: 5,
    name: "Dalen Floor Lamp",
    category: "Lighting",
    price: 640,
    tag: null,
    color: "#C9A86C",
    description: "Spun brass shade, marble base. Warm 2700K light that makes every room feel considered.",
    dims: "Ø 28 × H 148 cm",
  },
  {
    id: 6,
    name: "Foss Bed Frame",
    category: "Bedroom",
    price: 1680,
    tag: "Bestseller",
    color: "#9EA8A0",
    description: "Upholstered in wool boucle, solid beech legs. King size, naturally.",
    dims: "W 180 × D 210 × H 88 cm",
  },
];

const MATERIALS = [
  { name: "Solid Oak", desc: "Air-dried for three years before shaping." },
  { name: "Smoked Ash", desc: "Heat-treated for depth and durability." },
  { name: "Spun Brass", desc: "Each piece hand-finished by our metalworkers." },
  { name: "Boucle Wool", desc: "100% natural fibre, naturally stain-resistant." },
];

function ProductCard({ product, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        border: "1px solid #E8E2D8",
        borderRadius: 2,
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(0,0,0,0.08)" : "none",
        cursor: "pointer",
        animationDelay: `${index * 0.08}s`,
      }}
    >
      <div
        style={{
          height: 240,
          background: product.color + "22",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <FurnitureSVG product={product} hovered={hovered} />
        {product.tag && (
          <span
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: product.tag === "New" ? "#1C1C1E" : "#C9A86C",
              color: "#fff",
              fontSize: 11,
              letterSpacing: "0.08em",
              padding: "4px 10px",
              borderRadius: 1,
              fontFamily: "Inter, sans-serif",
              textTransform: "uppercase",
            }}
          >
            {product.tag}
          </span>
        )}
      </div>
      <div style={{ padding: "20px 22px 24px" }}>
        <p
          style={{
            fontSize: 11,
            letterSpacing: "0.1em",
            color: "#8B9E8B",
            textTransform: "uppercase",
            margin: "0 0 6px",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {product.category}
        </p>
        <h3
          style={{
            fontSize: 18,
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 600,
            color: "#1C1C1E",
            margin: "0 0 8px",
            lineHeight: 1.2,
          }}
        >
          {product.name}
        </h3>
        <p
          style={{
            fontSize: 13,
            color: "#6B6560",
            margin: "0 0 16px",
            lineHeight: 1.6,
            fontFamily: "Inter, sans-serif",
          }}
        >
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              color: "#1C1C1E",
            }}
          >
            £{product.price.toLocaleString()}
          </span>
          <button
            style={{
              background: "#1C1C1E",
              color: "#F5F0E8",
              border: "none",
              padding: "9px 18px",
              fontSize: 12,
              letterSpacing: "0.06em",
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              textTransform: "uppercase",
              borderRadius: 1,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#C9A86C")}
            onMouseLeave={(e) => (e.target.style.background = "#1C1C1E")}
          >
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

function FurnitureSVG({ product, hovered }) {
  const col = product.color;
  const dark = "#1C1C1E";
  const t = hovered ? "scale(1.05)" : "scale(1)";

  const svgs = {
    1: (
      <svg viewBox="0 0 200 160" width="160" style={{ transition: "transform 0.4s ease", transform: t }}>
        <rect x="30" y="80" width="140" height="50" rx="4" fill={col} />
        <rect x="30" y="68" width="140" height="18" rx="3" fill={col} opacity="0.8" />
        <rect x="30" y="60" width="140" height="12" rx="3" fill="#F5F0E8" />
        <rect x="38" y="130" width="12" height="20" rx="2" fill={dark} />
        <rect x="150" y="130" width="12" height="20" rx="2" fill={dark} />
        <rect x="60" y="80" width="80" height="6" rx="2" fill="#fff" opacity="0.4" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 200 160" width="140" style={{ transition: "transform 0.4s ease", transform: t }}>
        <ellipse cx="100" cy="90" rx="55" ry="12" fill={col} />
        <ellipse cx="100" cy="85" rx="55" ry="12" fill={col} opacity="0.9" />
        <rect x="90" y="95" width="4" height="50" rx="2" fill={col} opacity="0.7" />
        <rect x="106" y="95" width="4" height="50" rx="2" fill={col} opacity="0.7" />
        <ellipse cx="92" cy="146" rx="10" ry="4" fill={dark} opacity="0.3" />
        <ellipse cx="108" cy="146" rx="10" ry="4" fill={dark} opacity="0.3" />
        <circle cx="100" cy="85" r="8" fill="#C9A86C" opacity="0.8" />
      </svg>
    ),
    3: (
      <svg viewBox="0 0 200 160" width="140" style={{ transition: "transform 0.4s ease", transform: t }}>
        <rect x="40" y="20" width="120" height="130" rx="2" fill={col} opacity="0.2" />
        <rect x="40" y="20" width="4" height="130" fill={col} />
        <rect x="156" y="20" width="4" height="130" fill={col} />
        <rect x="40" y="20" width="120" height="4" fill={col} />
        <rect x="40" y="60" width="120" height="3" fill={col} opacity="0.7" />
        <rect x="40" y="100" width="120" height="3" fill={col} opacity="0.7" />
        <rect x="40" y="148" width="120" height="3" fill={col} />
        {[28, 68, 108].map((y, i) => (
          <rect key={i} x="48" y={y + 5} width={60 + i * 10} height="8" rx="1" fill={dark} opacity="0.15" />
        ))}
      </svg>
    ),
    4: (
      <svg viewBox="0 0 200 160" width="170" style={{ transition: "transform 0.4s ease", transform: t }}>
        <rect x="20" y="80" width="160" height="16" rx="2" fill={col} />
        <rect x="28" y="96" width="8" height="40" rx="1" fill={col} opacity="0.8" />
        <rect x="164" y="96" width="8" height="40" rx="1" fill={col} opacity="0.8" />
        <rect x="80" y="96" width="8" height="40" rx="1" fill={col} opacity="0.8" />
        <rect x="112" y="96" width="8" height="40" rx="1" fill={col} opacity="0.8" />
        <rect x="20" y="78" width="160" height="6" rx="1" fill="#fff" opacity="0.4" />
      </svg>
    ),
    5: (
      <svg viewBox="0 0 200 160" width="110" style={{ transition: "transform 0.4s ease", transform: t }}>
        <ellipse cx="100" cy="148" rx="30" ry="8" fill="#E8E2D8" />
        <rect x="96" y="80" width="8" height="68" rx="3" fill={dark} />
        <ellipse cx="100" cy="48" rx="32" ry="16" fill={col} />
        <path d="M70 48 Q100 80 130 48" fill={col} opacity="0.6" />
        <circle cx="100" cy="148" r="12" fill={col} opacity="0.5" />
      </svg>
    ),
    6: (
      <svg viewBox="0 0 200 160" width="170" style={{ transition: "transform 0.4s ease", transform: t }}>
        <rect x="20" y="80" width="160" height="60" rx="4" fill={col} />
        <rect x="20" y="68" width="160" height="18" rx="3" fill={col} opacity="0.7" />
        <rect x="20" y="130" width="160" height="8" rx="2" fill={dark} opacity="0.2" />
        <rect x="28" y="138" width="10" height="16" rx="1" fill={col} opacity="0.6" />
        <rect x="162" y="138" width="10" height="16" rx="1" fill={col} opacity="0.6" />
        <rect x="55" y="80" width="90" height="5" rx="2" fill="#fff" opacity="0.3" />
      </svg>
    ),
  };

  return svgs[product.id] || null;
}

export default function FormaWebsite() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrolled, setScrolled] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  const categories = ["All", "Seating", "Tables", "Storage", "Lighting", "Bedroom"];

  const filtered =
    activeFilter === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    setTimeout(() => setHeroVisible(true), 100);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F5F0E8", minHeight: "100vh" }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Inter:wght@300;400;500&display=swap"
        rel="stylesheet"
      />

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(245,240,232,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E0D8CC" : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 24,
            fontWeight: 700,
            color: "#1C1C1E",
            letterSpacing: "-0.01em",
          }}
        >
          Forma
        </span>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Collection", "Materials", "Studio", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: 13,
                color: "#1C1C1E",
                textDecoration: "none",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                opacity: 0.7,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = 1)}
              onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
            >
              {item}
            </a>
          ))}
          <button
            style={{
              background: "#1C1C1E",
              color: "#F5F0E8",
              border: "none",
              padding: "8px 20px",
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              cursor: "pointer",
              borderRadius: 1,
            }}
          >
            Bag (0)
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 40px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Big background text */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "-2%",
            transform: "translateY(-58%)",
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(80px, 16vw, 180px)",
            fontWeight: 700,
            color: "#1C1C1E",
            opacity: 0.05,
            lineHeight: 0.9,
            whiteSpace: "nowrap",
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          LIVE<br />WITH<br />LESS
        </div>

        {/* Abstract furniture silhouette */}
        <div
          style={{
            position: "absolute",
            right: 60,
            top: "50%",
            transform: `translateY(-50%) ${heroVisible ? "translateX(0)" : "translateX(60px)"}`,
            opacity: heroVisible ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          <svg viewBox="0 0 400 420" width="380">
            <rect x="60" y="220" width="280" height="90" rx="6" fill="#C4A882" />
            <rect x="60" y="200" width="280" height="28" rx="5" fill="#C4A882" opacity="0.75" />
            <rect x="60" y="185" width="280" height="20" rx="4" fill="#F5F0E8" />
            <rect x="72" y="308" width="20" height="70" rx="3" fill="#9A8068" />
            <rect x="308" y="308" width="20" height="70" rx="3" fill="#9A8068" />
            <rect x="60" y="218" width="280" height="10" rx="2" fill="#fff" opacity="0.25" />
            <circle cx="320" cy="155" r="50" fill="#8BAF8D" opacity="0.18" />
            <rect x="295" y="100" width="10" height="120" rx="3" fill="#8B9E8B" opacity="0.5" />
            <ellipse cx="300" cy="96" rx="36" ry="18" fill="#C9A86C" opacity="0.7" />
            <ellipse cx="300" cy="382" rx="38" ry="10" fill="#C9A86C" opacity="0.4" />
            <rect x="90" y="90" width="70" height="95" rx="2" fill="#E8E2D8" />
            <rect x="92" y="92" width="66" height="3" fill="#1C1C1E" opacity="0.1" />
            <rect x="94" y="100" width="40" height="5" rx="1" fill="#1C1C1E" opacity="0.1" />
            <rect x="94" y="110" width="55" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="94" y="118" width="48" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="94" y="130" width="52" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="94" y="138" width="38" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="94" y="150" width="50" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="94" y="162" width="44" height="4" rx="1" fill="#1C1C1E" opacity="0.07" />
            <rect x="90" y="183" width="70" height="3" fill="#1C1C1E" opacity="0.1" />
          </svg>
        </div>

        <div
          style={{
            transform: heroVisible ? "translateY(0)" : "translateY(30px)",
            opacity: heroVisible ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            maxWidth: 520,
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontSize: 12,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#8BAF8D",
              margin: "0 0 20px",
              fontWeight: 500,
            }}
          >
            New Collection — Autumn 2025
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(42px, 6vw, 72px)",
              fontWeight: 700,
              color: "#1C1C1E",
              lineHeight: 1.05,
              margin: "0 0 24px",
              letterSpacing: "-0.02em",
            }}
          >
            Objects made to<br />
            <em style={{ fontStyle: "italic", color: "#C9A86C" }}>outlast</em> trends.
          </h1>
          <p
            style={{
              fontSize: 16,
              color: "#6B6560",
              lineHeight: 1.7,
              margin: "0 0 36px",
              maxWidth: 400,
            }}
          >
            Scandinavian craft meets quiet luxury. Each Forma piece is built from sustainably sourced materials by makers who sign their work.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button
              style={{
                background: "#1C1C1E",
                color: "#F5F0E8",
                border: "none",
                padding: "14px 32px",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 1,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#C9A86C")}
              onMouseLeave={(e) => (e.target.style.background = "#1C1C1E")}
            >
              Shop Collection
            </button>
            <button
              style={{
                background: "transparent",
                color: "#1C1C1E",
                border: "1px solid #1C1C1E",
                padding: "14px 28px",
                fontSize: 13,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 1,
              }}
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: heroVisible ? 0.4 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1C1C1E" }}>
            Scroll
          </span>
          <div
            style={{
              width: 1,
              height: 48,
              background: "#1C1C1E",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* Stats strip */}
      <div
        style={{
          background: "#1C1C1E",
          padding: "36px 40px",
          display: "flex",
          gap: 0,
        }}
      >
        {[
          { num: "12+", label: "Years of craft" },
          { num: "100%", label: "Sustainably sourced" },
          { num: "40+", label: "Skilled makers" },
          { num: "5yr", label: "Full warranty" },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: "center",
              borderRight: i < 3 ? "1px solid #333" : "none",
              padding: "0 20px",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 36,
                fontWeight: 700,
                color: "#C9A86C",
                lineHeight: 1,
                marginBottom: 6,
              }}
            >
              {s.num}
            </div>
            <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "#999", fontWeight: 300 }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Collection */}
      <section style={{ padding: "90px 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8BAF8D", margin: "0 0 12px" }}>
              The Collection
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 42,
                fontWeight: 700,
                color: "#1C1C1E",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Every room, considered.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? "#1C1C1E" : "transparent",
                  color: activeFilter === cat ? "#F5F0E8" : "#6B6560",
                  border: "1px solid",
                  borderColor: activeFilter === cat ? "#1C1C1E" : "#D0C9BE",
                  padding: "7px 16px",
                  fontSize: 12,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: 1,
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </section>

      {/* Materials section */}
      <section
        style={{
          background: "#1C1C1E",
          padding: "90px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8BAF8D", margin: "0 0 16px" }}>
            How we build
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 40,
              fontWeight: 700,
              color: "#F5F0E8",
              margin: "0 0 24px",
              lineHeight: 1.1,
            }}
          >
            Material honesty is our only design rule.
          </h2>
          <p style={{ fontSize: 15, color: "#9A9490", lineHeight: 1.8, margin: "0 0 36px" }}>
            We don't cover our materials in veneer or lacquer. Oak looks like oak. Brass tarnishes exactly as it should. We believe furniture tells the story of its life, and that story should be visible.
          </p>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#C9A86C",
              textDecoration: "none",
            }}
          >
            Read our manifesto
            <span style={{ fontSize: 18 }}>→</span>
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {MATERIALS.map((m, i) => (
            <div
              key={i}
              style={{
                padding: "24px 0",
                borderBottom: i < MATERIALS.length - 1 ? "1px solid #2E2E2E" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 24,
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 19,
                    fontWeight: 600,
                    color: "#F5F0E8",
                    margin: "0 0 6px",
                  }}
                >
                  {m.name}
                </h3>
                <p style={{ fontSize: 13, color: "#6B6560", margin: 0, lineHeight: 1.6 }}>{m.desc}</p>
              </div>
              <span
                style={{
                  fontSize: 28,
                  color: "#C9A86C",
                  opacity: 0.4,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  minWidth: 36,
                  textAlign: "right",
                  marginTop: 2,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Studio CTA */}
      <section
        style={{
          padding: "100px 40px",
          textAlign: "center",
          background: "#F5F0E8",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#8BAF8D",
            opacity: 0.07,
            pointerEvents: "none",
          }}
        />
        <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8BAF8D", margin: "0 0 20px" }}>
          Bespoke service
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 52,
            fontWeight: 700,
            color: "#1C1C1E",
            margin: "0 0 20px",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Visit the Forma Studio.
        </h2>
        <p style={{ fontSize: 16, color: "#6B6560", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 40px" }}>
          Work with our designers to create something entirely your own. Every dimension, material, and finish selected for your space.
        </p>
        <button
          style={{
            background: "#C9A86C",
            color: "#1C1C1E",
            border: "none",
            padding: "16px 40px",
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            borderRadius: 1,
            fontWeight: 500,
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#B8934F")}
          onMouseLeave={(e) => (e.target.style.background = "#C9A86C")}
        >
          Book a consultation
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#1C1C1E",
          padding: "60px 40px 40px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 60 }}>
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 28,
                fontWeight: 700,
                color: "#F5F0E8",
                marginBottom: 16,
              }}
            >
              Forma
            </div>
            <p style={{ fontSize: 13, color: "#6B6560", lineHeight: 1.8, maxWidth: 260 }}>
              Furniture built to be lived with, not looked at. Designed in Copenhagen, made by hand.
            </p>
          </div>
          {[
            { title: "Shop", links: ["All Furniture", "Seating", "Tables", "Storage", "Lighting"] },
            { title: "Company", links: ["Our Story", "Materials", "Studio", "Press"] },
            { title: "Help", links: ["Delivery", "Returns", "Warranty", "Care Guide"] },
          ].map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#8BAF8D",
                  margin: "0 0 20px",
                  fontWeight: 500,
                }}
              >
                {col.title}
              </h4>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontSize: 13,
                    color: "#6B6560",
                    textDecoration: "none",
                    marginBottom: 10,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#F5F0E8")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B6560")}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: "1px solid #2E2E2E",
            paddingTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 12, color: "#444", margin: 0 }}>
            © 2025 Forma Studio Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#444", margin: 0 }}>
            Copenhagen · Stockholm · London
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
