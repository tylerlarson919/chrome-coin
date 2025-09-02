// components/Background.tsx

"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { MathUtils } from 'three';
import { PostProcessingEffects } from './PostProcessingEffects';

// The URLs for your cloud images
const cloudImageUrls = [
    'https://res.cloudinary.com/dqedckeaa/image/upload/v1752694093/cloud3_mdtq6x.webp',
    'https://res.cloudinary.com/dqedckeaa/image/upload/v1752694093/cloud2_eacfft.webp',
    'https://res.cloudinary.com/dqedckeaa/image/upload/v1752694093/cloud4_actyzm.webp',
    'https://res.cloudinary.com/dqedckeaa/image/upload/v1752693700/cloud1_i0xhb0.webp'
];

// A single cloud instance using an image on a plane
function Cloud({
    speed,
    texture,
    isPaused,
    ...props
}: {
    position: THREE.Vector3;
    scale: number;
    speed: number;
    texture: THREE.Texture;
    isPaused: boolean;
}) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [opacity, setOpacity] = useState(0);

    // Get aspect ratio of the texture to scale the plane correctly
    const aspect = useMemo(() => {
        if (!texture.image) return 1;
        return texture.image.width / texture.image.height;
    }, [texture]);

    const velocity = useMemo(() => new THREE.Vector3(speed, 0, 0), [speed]);

    useFrame((state, delta) => {
        if (!meshRef.current || isPaused) return;

        // Fade-in logic
        if (opacity < 0.9) {
            setOpacity((o) => MathUtils.lerp(o, 0.9, delta * 2.5));
        }

        // Movement
        meshRef.current.position.add(velocity.clone().multiplyScalar(delta));

        // Screen Wrapping Logic
        const { viewport, camera } = state;
        const distanceToCloud = camera.position.z - meshRef.current.position.z;
        const halfViewportWidthAtCloudDepth = (viewport.width * distanceToCloud) / camera.position.z / 2;
        
        // The cloud's width is its base scale multiplied by its texture's aspect ratio
        const cloudWorldWidth = props.scale * aspect;
        
        // Check if the cloud's left edge is past the viewport's right edge
        if (meshRef.current.position.x - cloudWorldWidth / 2 > halfViewportWidthAtCloudDepth) {
            // Reposition to the far left side of the viewport and reset fade
            meshRef.current.position.x = -halfViewportWidthAtCloudDepth - cloudWorldWidth / 2;
            setOpacity(0);
        }
    });

    return (
        <mesh ref={meshRef} {...props} scale={[props.scale * aspect, props.scale, 1]}>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <planeGeometry args={[1, 1]} />
            {/* eslint-disable react/no-unknown-property */}
            <meshStandardMaterial
                map={texture}
                transparent={true}
                opacity={opacity}
                roughness={0.9}
                depthWrite={false} // Important for rendering multiple transparent objects correctly
            />
            {/* eslint-enable react/no-unknown-property */}
        </mesh>
    );
}

// Manages and renders all the clouds
function CloudsManager({ isPaused }: { isPaused: boolean }) {
    const { viewport } = useThree();
    // Preload textures. This will be cached by drei/React.
    const textures = useTexture(cloudImageUrls);

    const isMobile = viewport.width < 768;
    const cloudCount = isMobile ? 25 : 60; // Fewer clouds needed as they are larger and more detailed
    const scaleRange = isMobile ? [1.5, 2.5] : [6, 8.5];

    const clouds = useMemo(() => {
        const halfViewportWidth = viewport.width / 2;
        const halfViewportHeight = viewport.height / 2;

        return Array.from({ length: cloudCount }, () => ({
            texture: textures[MathUtils.randInt(0, textures.length - 1)],
            position: new THREE.Vector3(
                // Spread clouds across a wider area to make looping less obvious
                MathUtils.randFloatSpread(halfViewportWidth * 3), 
                MathUtils.randFloat(-halfViewportHeight * 1.5, halfViewportHeight * 1.5),
                MathUtils.randFloat(-5, 2)
            ),
            scale: MathUtils.randFloat(scaleRange[0], scaleRange[1]),
            speed: MathUtils.randFloat(0.08, 0.25),
        }));
    }, [viewport.width, viewport.height, isMobile, textures]);

    return (
        <>
            {clouds.map((cloud, i) => (
                <Cloud key={i} {...cloud} isPaused={isPaused} />
            ))}
        </>
    );
}

// The main exportable Background component
export function Background() {
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // State for fade-in

  useEffect(() => {
    // When the component mounts, set it to visible to trigger the transition
    const timer = setTimeout(() => setIsVisible(true), 50); // Small delay to ensure transition triggers

    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[0] transition-opacity duration-1000 ease-in"
      style={{ opacity: isVisible ? 1 : 0 }} // Apply fade-in effect
    >
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <color attach="background" args={['#d34fda']} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <ambientLight intensity={1.5} />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <directionalLight position={[0, 5, 5]} intensity={2.5} />
        {/* Wrap cloud manager in Suspense to handle texture loading */}
        <React.Suspense fallback={null}>
          <CloudsManager isPaused={isPaused} />
        </React.Suspense>
        <PostProcessingEffects />
      </Canvas>
    </div>
  );
}