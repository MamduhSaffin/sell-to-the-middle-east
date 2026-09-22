import { ImageResponse } from "next/og"

export const alt = "GCC Market Entry — Malaysia to Saudi Arabia, UAE and the wider GCC"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fffdf8",
          color: "#064a38",
          padding: "64px 72px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            right: -180,
            top: -210,
            borderRadius: "50%",
            background: "#0c6549",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 460,
            height: 460,
            left: -230,
            bottom: -250,
            borderRadius: "50%",
            background: "#d6a431",
            opacity: 0.14,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 18,
              background: "#064a38",
              color: "#f5d56d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 900,
            }}
          >
            GCC
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: 1.5 }}>GCC MARKET ENTRY</div>
            <div style={{ fontSize: 18, color: "#66746e", marginTop: 4 }}>gccmarketentry.me</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 66, lineHeight: 1.03, fontWeight: 900, letterSpacing: -2 }}>
            Malaysia → GCC
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.22, marginTop: 18, color: "#123b2c", fontWeight: 700 }}>
            Practical market-entry guidance for Saudi Arabia, the UAE and the wider Gulf.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 24, fontSize: 20, fontWeight: 800 }}>
            <span>BUSINESS</span>
            <span style={{ color: "#d6a431" }}>•</span>
            <span>JOBS</span>
            <span style={{ color: "#d6a431" }}>•</span>
            <span>SCHOLARSHIPS</span>
            <span style={{ color: "#d6a431" }}>•</span>
            <span>OFFICIAL RESOURCES</span>
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, color: "#b98216" }}>GREEN + GOLD</div>
        </div>
      </div>
    ),
    size,
  )
}
