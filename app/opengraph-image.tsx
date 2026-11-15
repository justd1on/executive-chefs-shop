import { ImageResponse } from "next/og";

export const alt = "Ridge Cutlery: premium kitchen and BBQ knives";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1a2230",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800, letterSpacing: -2 }}>
          RIDGE&nbsp;<span style={{ color: "#e0a05c" }}>CUTLERY</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: "#f3ede1" }}>
          Premium Kitchen &amp; BBQ Knives
        </div>
        <div style={{ display: "flex", marginTop: 48, height: 6, width: 160, background: "#c17a3f" }} />
        <div style={{ display: "flex", marginTop: 40, fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
          Damascus-pattern chef knife sets · Pitmaster knives · Free US shipping
        </div>
      </div>
    ),
    size,
  );
}
