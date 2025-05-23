export default function Home() {
  return (
    <div style={{ padding: 40, fontSize: 24, textAlign: "center" }}>
      <h1>👋 Welcome to the Fitness Assistant!</h1>

      <img
        src="/assistant.png"
        alt="Fitness Assistant"
        style={{ width: 300, borderRadius: 16, margin: "20px 0" }}
      />

      <a
        href="/studio"
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#0070f3",
          color: "white",
          fontSize: 18,
          borderRadius: 8,
          textDecoration: "none",
        }}
      >
        👉 Open Assistant
      </a>
    </div>
  );
}
