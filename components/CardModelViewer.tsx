"use-client";

import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Bounds } from "@react-three/drei";
import * as THREE from "three";

function Model({
  url,
  isHovered,
  onAnimationComplete,
}: {
  url: string;
  isHovered: boolean;
  onAnimationComplete: () => void;
}) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [introAnimationDone, setIntroAnimationDone] = useState(false);

  useEffect(() => {
    if (scene && groupRef.current && !isInitialized) {
      // Start at final scale, removing the "zoom in" effect.
      groupRef.current.scale.set(1, 1, 1);
      groupRef.current.rotation.y = Math.PI;

      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.transparent = true;
          child.material.opacity = 0; // Start fully transparent for fade-in effect.
        }
      });
      setIsInitialized(true);
    }
  }, [scene, isInitialized]);

  useFrame((state, delta) => {
    if (!groupRef.current || !isInitialized) return;

    let isStillAnimating = false;
    const targetRotation = Math.PI;

    // --- Intro Animation: Opacity Fade-in ---
    if (!introAnimationDone) {
      let maxOpacity = 0;
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material.opacity = THREE.MathUtils.lerp(
            child.material.opacity,
            1,
            0.1
          );
          if (child.material.opacity > maxOpacity) {
            maxOpacity = child.material.opacity;
          }
        }
      });
      isStillAnimating = true;

      // Once the model is nearly opaque, snap to full opacity and mark animation as done.
      if (maxOpacity > 0.995) {
        scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.opacity = 1;
          }
        });
        setIntroAnimationDone(true);
      }
    }

    // --- Hover Animation: Rotation ---
    if (isHovered) {
      groupRef.current.rotation.y += delta * 1.5;
      isStillAnimating = true; // Always animating while hovered
    } else {
      // Animate back to original rotation when not hovered
      if (Math.abs(groupRef.current.rotation.y - targetRotation) > 0.001) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotation,
          0.1
        );
        isStillAnimating = true;
      } else {
        // Snap to final value
        groupRef.current.rotation.y = targetRotation;
      }
    }

    // If no animations are active, notify the parent to stop the render loop
    if (!isStillAnimating) {
      onAnimationComplete();
    }
  });

  return (
    <group ref={groupRef}>
      {/* Increased Y position to move model up */}
      <primitive object={scene} position={[0, 0.38, 0]} />
    </group>
  );
}

interface CardModelViewerProps {
  modelUrl: string;
  isHovered: boolean;
  margin?: number;
  brightness?: number;
  yMovement?: number;
}

export function CardModelViewer({
  modelUrl,
  isHovered,
  margin = 1.2,
  brightness = 1,
  yMovement = 0,
}: CardModelViewerProps) {
  // This state controls the frameloop. We keep it active ('always')
  // as long as any animation (intro, hover, or return) is running.
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // When hovering starts, we must be animating.
    if (isHovered) {
      setIsAnimating(true);
    }
    // Note: We don't set isAnimating to false on hover-off.
    // The Model component will tell us when its return-animation is complete.
  }, [isHovered]);

  return (
    <Canvas
      frameloop={isAnimating ? "always" : "demand"}
      style={{ background: "transparent" }}
      camera={{ fov: 30 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={2.5 * brightness} />
        <directionalLight position={[10, 10, 5]} intensity={2 * brightness} />
        <group position={[0, yMovement, 0]}>
          <Bounds fit clip margin={margin}>
            <Model
              url={modelUrl}
              isHovered={isHovered}
              onAnimationComplete={() => {
                // The model is at rest. If we are not hovering over it,
                // we can stop the render loop.
                if (!isHovered) {
                  setIsAnimating(false);
                }
              }}
            />
          </Bounds>
        </group>
      </Suspense>
    </Canvas>
  );
}