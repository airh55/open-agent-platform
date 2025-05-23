export default function StudioFallback() {
  return (
    <div style={{ padding: "40px", fontSize: "20px", textAlign: "center" }}>
      <h1>💪 Fitness Assistant</h1>
      <p>I'm here to answer questions about your fitness studio.</p>

      <div style={{ marginTop: "24px" }}>
        <strong>Try asking:</strong>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>What time is the next yoga class?</li>
          <li>How much is a monthly membership?</li>
          <li>What are your weekend hours?</li>
        </ul>
      </div>

      <p style={{ marginTop: "40px" }}>
        🛠 Full assistant UI is not installed — but you can extend it or embed a chatbot here!
      </p>
    </div>
  );
}
