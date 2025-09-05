// components/Background.tsx
"use client";

import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Cloud, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { MathUtils } from 'three';

// Custom hook to detect mobile screen sizes
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check on the client side
    const checkDevice = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, [breakpoint]);

  return isMobile;
};


// Refined Starfield with Parallax and Shimmering Effect
function Starfield({ isMobile }: { isMobile: boolean }) {
  const midStarsRef = useRef<THREE.Group>(null!);
  const topStarsRef = useRef<THREE.Group>(null!);
  const deepStarsRef = useRef<THREE.Group>(null!);

  const speedMultiplier = isMobile ? 1.25 : 1;

  useEffect(() => {
      if (deepStarsRef.current) deepStarsRef.current.position.set(0, 0, -30);
      if (midStarsRef.current) midStarsRef.current.position.set(0, 0, -10);
      if (topStarsRef.current) topStarsRef.current.position.set(0, 0, 10);
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Shimmer/twinkle effect for the top layer of stars
    if (topStarsRef.current) {
      topStarsRef.current.scale.setScalar(1 + Math.sin(time * 2 * speedMultiplier) * 0.05);
    }

    // Parallax effect for star layers based on mouse position (non-mobile only)
    if (!isMobile) {
      const { pointer } = state;
      // The middle layer moves less for a subtle depth effect
      if (midStarsRef.current) {
        midStarsRef.current.position.x = MathUtils.lerp(midStarsRef.current.position.x, pointer.x * 2, 0.025);
        midStarsRef.current.position.y = MathUtils.lerp(midStarsRef.current.position.y, pointer.y * 2, 0.025);
      }
      // The top layer moves more, creating a stronger parallax effect
      if (topStarsRef.current) {
        topStarsRef.current.position.x = MathUtils.lerp(topStarsRef.current.position.x, pointer.x * 4, 0.025);
        topStarsRef.current.position.y = MathUtils.lerp(topStarsRef.current.position.y, pointer.y * 4, 0.025);
      }
    }
  });

  return (
    <group>
      {/* Layer 1: Deep background stars (static) */}
      <group ref={deepStarsRef}>
        <Stars
          radius={100}
          depth={50}
          count={3000}
          factor={4}
          saturation={0}
          fade
          speed={0.5 * speedMultiplier}
        />
      </group>
      {/* Layer 2: Mid-ground stars (subtle parallax) */}
      <group ref={midStarsRef}>
        <Stars
          radius={120}
          depth={50}
          count={4000}
          factor={5}
          saturation={0}
          fade
          speed={0.7 * speedMultiplier}
        />
      </group>
      {/* Layer 3: Foreground stars (strong parallax + shimmer) */}
      <group ref={topStarsRef}>
        <Stars
          radius={150}
          depth={50}
          count={5000}
          factor={6}
          saturation={0}
          fade
          speed={1 * speedMultiplier}
        />
      </group>
    </group>
  );
}

// InteractiveSmoke component with slower movement
function InteractiveSmoke({ isMobile }: { isMobile: boolean }) {
  const cloudRef = useRef<any>(null!);
  const speedMultiplier = isMobile ? 3 : 2;

  useFrame((state) => {
    if (cloudRef.current) {
      // Animate the smoke texture over time
      cloudRef.current.seed = (state.clock.getElapsedTime() * speedMultiplier) / 10;
      
      // Disable pointer events on mobile
      if (isMobile) return;

      const { pointer } = state;
      // Reduced multiplier for slower, more subtle movement
      cloudRef.current.position.x = MathUtils.lerp(cloudRef.current.position.x, pointer.x * 0.5, 0.05);
      cloudRef.current.position.y = MathUtils.lerp(cloudRef.current.position.y, pointer.y * 0.5, 0.05);
    }
  });

  return (
    <Cloud
      ref={cloudRef}
      scale={2.5}
      position={[0, 0, 0]}
      speed={0.2 * speedMultiplier}
      segments={80}
      bounds={[10, 6, 3]}
      volume={8}
      color="#d34fda"
      fade={15}
      opacity={0.25}
    />
  );
}

export function Background() {
  const [isVisible, setIsVisible] = useState(false);
  const ambientLightRef = useRef<THREE.AmbientLight>(null!);
  const isMobile = useIsMobile();

  // Fade in the component on mount for a smooth entry
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (ambientLightRef.current) {
        ambientLightRef.current.intensity = 1.5;
    }
  }, []);

  return (
    <div
    className="fixed top-0 left-0 z-0 w-screen transition-opacity duration-1000 ease-in"
      style={{
        height: '100vh',
        opacity: isVisible ? 1 : 0,
        backgroundColor: 'black'
      }}
    >
      <div className="absolute inset-0 pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 25], fov: 75 }} resize={{ scroll: false }}>
          <ambientLight ref={ambientLightRef} />
          <Suspense fallback={null}>
            <Starfield isMobile={isMobile} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}