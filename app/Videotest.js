import MuxPlayer from '@mux/mux-player-react';

import React from 'react'

export default function Videotest() {
    return (
        <MuxPlayer
            streamType="on-demand"
            playbackId="fLNs7TYLUXG22jd5yMH6l1IDU1A00ZGn1BPHxO7RNTJg"
            metadataVideoTitle="Placeholder (optional)"
            metadataViewerUserId="Placeholder (optional)"
            primaryColor="gold"
            secondaryColor="#000000"
            accentColor='red'
            title="Gastly 360 view"
        />
    )
}