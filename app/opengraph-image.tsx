import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Muhammad Aamir Yameen — Senior Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
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
          backgroundColor: "#050505",
          backgroundImage:
            "radial-gradient(ellipse 80% 80% at 30% 20%, rgba(124,58,237,0.45), transparent 60%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c4b5fd",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#a855f7" }} />
          Senior Software Engineer
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 800,
            lineHeight: 1.05,
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #c4b5fd 45%, #818cf8 100%)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Muhammad Aamir Yameen
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 34,
            color: "#9ca3af",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          React Native &amp; Flutter · AI Agents &amp; Automation · 7+ Years Experience
        </div>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
          }}
        >
          {["React Native", "Flutter", "Next.js", "AI / LLM"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "12px 24px",
                borderRadius: 999,
                border: "1px solid rgba(168,85,247,0.4)",
                background: "rgba(168,85,247,0.12)",
                color: "#e9d5ff",
                fontSize: 26,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
