import MuxPlayer from '@mux/mux-player-react';

import React from 'react'

export default function Videotest() {
    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId="02RL1ouWSt1pz8GLVmy3OXGC3dlbTL6ZyBjp3BbMlziA"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="gold"
            secondaryColor="#000000"
            accentColor='red'
            title="Gastly 360 view"
        />
    )
}