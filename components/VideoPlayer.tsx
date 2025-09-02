import React from 'react';

interface VideoPlayerProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
}

export const VideoPlayer = ({
  src,
  controls = true,
  autoPlay = false,
  loop = true,
  muted = false,
  className = "",
}: VideoPlayerProps) => {
  return (
    <video
      src={src}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline // Important for autoplay on mobile devices
      className={`w-full h-full object-cover ${className}`}
    >
      Your browser does not support the video tag.
    </video>
  );
};