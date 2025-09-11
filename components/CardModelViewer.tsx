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
  const [targetRotation, setTargetRotation] = useState(Math.PI);
  const DURATION_SECONDS = 1.5; // Adjust this value to make the animation slower or faster
  const animation = useRef({ active: false, start: 0, from: 0 });
  const prevHovered = useRef(isHovered);
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

  useEffect(() => {
    if (!isHovered && groupRef.current) {
      const currentRotation = groupRef.current.rotation.y;
      const fullCircle = Math.PI * 2;
      
      const rotations = (currentRotation - Math.PI) / fullCircle;
      
      // Change Math.round to Math.ceil to always move forward
      const nextRotation = Math.ceil(rotations);
      
      const newTarget = Math.PI + nextRotation * fullCircle;
      
      setTargetRotation(newTarget);
    }
  }, [isHovered]);

  useFrame((state, delta) => {
    if (!groupRef.current || !isInitialized) return;

    let isStillAnimating = false;

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
      animation.current.active = false; // Cancel any return animation on re-hover
      groupRef.current.rotation.y += delta * 1.5;
      isStillAnimating = true;
    } else {
      // --- Timed Return Animation with Easing ---
      
      // Detect when hover has just ended to START the animation
      if (prevHovered.current && !isHovered) {
        animation.current = {
          active: true,
          start: state.clock.elapsedTime,
          from: groupRef.current.rotation.y,
        };
      }

      if (animation.current.active) {
        const elapsedTime = state.clock.elapsedTime - animation.current.start;
        const progress = Math.min(elapsedTime / DURATION_SECONDS, 1.0);

        // An ease-in-out cubic function for smooth acceleration and deceleration
        const easeInOutCubic = (t: number) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const easedProgress = easeInOutCubic(progress);

        // Interpolate rotation based on the eased progress
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          animation.current.from,
          targetRotation,
          easedProgress
        );

        isStillAnimating = true;

        // If animation is finished, deactivate it
        if (progress >= 1.0) {
          animation.current.active = false;
        }
      }
    }
    
    // Update the previous hover state at the end of the frame
    prevHovered.current = isHovered;

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