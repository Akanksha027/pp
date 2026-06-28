"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRouter } from "next/navigation";

const createCustomIcon = () => {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 20px;
        height: 20px;
        background: #DFFF66;
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 2px 12px rgba(223,255,102,0.5);
        position: relative;
        cursor: pointer;
      ">
        <div style="
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid #DFFF66;
        "></div>
      </div>
    `,
    iconSize: [20, 28],
    iconAnchor: [10, 28],
    popupAnchor: [0, -30],
  });
};

// Freelance projects only
const locations = [
  { name: "SVSFood", position: [22.9734, 78.6569], location: "Madhya Pradesh, India", slug: "svsfood" },
  { name: "TitanTech Investments", position: [25.2048, 55.2708], location: "Dubai", slug: "titantech" },
  { name: "SharpOrders", position: [-26.2041, 28.0473], location: "Johannesburg, South Africa", slug: "sharporders" },
  { name: "Lufasi Lodges", position: [-33.9249, 18.4241], location: "Cape Town, South Africa", slug: "lufasi-lodges" },
  { name: "Jara Beach Resort", position: [-29.8587, 31.0218], location: "Durban, South Africa", slug: "jara" },
  { name: "JobBissau", position: [11.8037, -15.1804], location: "Guinea-Bissau", slug: "jobbissau" },
  { name: "AI Research Paper Gen Agent", position: [28.7041, 77.1025], location: "Delhi, India", slug: "ai-research-paper-gen" },
  { name: "Luxenedge", position: [37.0902, -95.7129], location: "USA", slug: "luxenedge" },
  { name: "Ezlearn", position: [28.5355, 77.3910], location: "Noida, India", slug: "ezlearn" },
  { name: "Yogaflow", position: [30.0869, 78.2676], location: "Rishikesh, India", slug: "yogaflow" },
];

function MapInner() {
  const router = useRouter();
  const customIcon = createCustomIcon();

  return (
    <MapContainer
      center={[20, 10]}
      zoom={2}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {locations.map((loc, idx) => (
        <Marker key={idx} position={loc.position as [number, number]} icon={customIcon}>
          <Tooltip
            direction="top"
            offset={[0, -28]}
            opacity={1}
            permanent={false}
          >
            <span style={{ fontWeight: 600, fontSize: "12px", color: "#111", whiteSpace: "nowrap" }}>
              {loc.name}
            </span>
          </Tooltip>
          <Popup>
            <div style={{ fontFamily: "inherit", minWidth: "140px" }}>
              <p style={{ fontWeight: 600, fontSize: "14px", marginBottom: "4px", color: "#111" }}>{loc.name}</p>
              <p style={{ fontSize: "12px", color: "#888", marginBottom: "10px" }}>{loc.location}</p>
              <button
                onClick={() => router.push(`/works/${loc.slug}`)}
                style={{
                  background: "#DFFF66",
                  color: "#000",
                  border: "none",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                View Project →
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default function MapComponent() {
  return (
    <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-white/20 z-0 relative">
      <MapInner />
    </div>
  );
}
