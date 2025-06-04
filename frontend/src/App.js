import React, { useEffect, useState } from "react";
import "./styles/modern-dark.css";
import AudioControlPanel from "./AudioControlPanel";
import ChannelInfoBox from "./ChannelInfoBox";

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
    <div className="app-container">
      <h1>MUSika</h1>
      <div
        style={{
          fontSize: "0.95rem",
          color: "#2aa4db",
          marginBottom: "1.2rem",
          letterSpacing: "0.04em",
        }}
      >
        #redbot
      </div>
      {loading ? (
        <p>Loading bot status...</p>
      ) : status ? (
        <div className="status-card">
          <h2>Bot Status</h2>
          <pre>{JSON.stringify(status, null, 2)}</pre>
        </div>
      ) : (
        <p>Could not fetch bot status.</p>
      )}
      <AudioControlPanel />
      <ChannelInfoBox channelName="#music-room" />
    </div>
  );
}

export default App;
