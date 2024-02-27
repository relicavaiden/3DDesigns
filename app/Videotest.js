'use client'
import MuxPlayer from '@mux/mux-player-react';
import Video from 'next-video';
import Gastly from '../videos/GastlyVideo.mp4';

import React from 'react'

export default function Videotest() {
  return (
  <MuxPlayer
  streamType="on-demand"
  playbackId="fLNs7TYLUXG22jd5yMH6l1IDU1A00ZGn1BPHxO7RNTJg"
  metadataVideoTitle="Placeholder (optional)"
  metadataViewerUserId="Placeholder (optional)"
  primaryColor="#FFFFFF"
  secondaryColor="#000000"
/>
)
}
// 'use client'
// import React from 'react'
// import MuxPlayer from "@mux/mux-player-react";

// const Videotest = () => {
//   return (
//     <MuxPlayer
//         playbackId='kJOtPDn01o700NBa3202ipf393hM00deaMxrtiLELqIAuUU'
//         metadata={{
//             video_id: "Gastly 360",
//             video_title: "Gastly Demo",
//             viewer_user_id: "user_perchase_001",
//         }}
//     />
//   );
// }

// export default Videotest