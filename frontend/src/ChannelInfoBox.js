import React from "react";

const ChannelInfoBox = ({ channelName = "#music-room" }) => (
  <div className="channel-info-box">
    <span className="channel-info-label">Playing in:</span>
    <span className="channel-info-name">{channelName}</span>
  </div>
);

export default ChannelInfoBox;