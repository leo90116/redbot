import React, { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/bot/status/")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Redbot Remote Controller</h1>
      {loading ? (
        <p>Loading bot status...</p>
      ) : status ? (
        <div>
          <h2>Bot Status</h2>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      ) : (
        <p>Could not fetch bot status.</p>
      )}
    </div>
  );
}

export default App;
