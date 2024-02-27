'use client'
import React from 'react'
import MuxPlayer from "@mux/mux-player-react";

const Videotest = () => {
  return (
    <MuxPlayer
        playbackId='kJOtPDn01o700NBa3202ipf393hM00deaMxrtiLELqIAuUU'
        metadata={{
            video_id: "Gastly 360",
            video_title: "Gastly Demo",
            viewer_user_id: "user_perchase_001",
        }}
    />
  );
}

export default Videotest