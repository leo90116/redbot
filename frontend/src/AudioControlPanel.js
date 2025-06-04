import React, { useState } from "react";

// SVG Icon Components
const Icon = {
  Play: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="7,4 21,12 7,20" /></svg>
  ),
  Pause: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
  ),
  Stop: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="6" y="6" width="12" height="12"/></svg>
  ),
  Skip: () => (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5,4 15,12 5,20"/><rect x="17" y="4" width="2" height="16"/></svg>
  ),
};

const AudioControlPanel = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [queue, setQueue] = useState([
    // Example queue items
    // { title: "Sample Song 1", url: "https://youtu.be/xxxx" },
    // { title: "Sample Song 2", url: "https://youtu.be/yyyy" }
  ]);

  // Placeholder handlers
  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleStop = () => setIsPlaying(false);
  const handleSkip = () => {};
  const handleUrlChange = (e) => setYoutubeUrl(e.target.value);
  const handleUrlSubmit = (e) => {
    e.preventDefault();
    if (youtubeUrl.trim()) {
      setQueue(q => [...q, { title: youtubeUrl, url: youtubeUrl }]);
      setYoutubeUrl("");
    }
  };

  return (
    <div className="audio-panel">
      <form className="audio-url-bar" onSubmit={handleUrlSubmit}>
        <input
          type="text"
          className="audio-url-input"
          placeholder="Enter YouTube link to play"
          value={youtubeUrl}
          onChange={handleUrlChange}
        />
        <button className="btn audio-url-btn" type="submit" title="Play from YouTube" disabled={!youtubeUrl.trim()}>
          Play
        </button>
      </form>
      <div className="audio-track-info">
        <div className="audio-track-title">{queue.length > 0 ? queue[0].title : "No track playing"}</div>
        <div className="audio-track-status">{isPlaying ? "Playing" : "Paused"}</div>
      </div>
      <div className="audio-controls-row">
        <button className="btn audio-btn" title="Play" onClick={handlePlay} disabled={isPlaying}>
          <Icon.Play />
        </button>
        <button className="btn audio-btn" title="Pause" onClick={handlePause} disabled={!isPlaying}>
          <Icon.Pause />
        </button>
        <button className="btn audio-btn" title="Stop" onClick={handleStop}>
          <Icon.Stop />
        </button>
        <button className="btn audio-btn" title="Skip" onClick={handleSkip}>
          <Icon.Skip />
        </button>
      </div>
      <div className="audio-queue-section">
        <div className="audio-queue-title">Queue</div>
        <ul className="audio-queue-list">
          {queue.length > 1 ? (
            queue.slice(1).map((item, idx) => (
              <li className="audio-queue-item" key={idx}>
                {item.title}
              </li>
            ))
          ) : (
            <li className="audio-queue-item audio-queue-empty">Queue is empty</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AudioControlPanel;
