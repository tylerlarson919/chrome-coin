"use client";

import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, useProgress, Html } from "@react-three/drei";
import type { Product } from "@/data/products";
import * as THREE from "three";

// Loader component for the progress bar
function Loader() {
  const { progress } = useProgress();
  return (
    <Html as='div' style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      pointerEvents: 'none',
      zIndex: 10,
    }}>
      <div style={{
        height: '4px',
        width: `${progress}%`,
        backgroundColor: '#8A2BE2', // Purple
        transition: 'width 0.3s ease',
      }} />
    </Html>
  );
}

// Helper component to load, center, normalize, and handle progressive textures
function Model({ url, scale }: { url: string; scale?: number }) {
  const { scene: originalScene } = useGLTF(url);
  const [texturesApplied, setTexturesApplied] = useState(false);
  const [sceneToRender, setSceneToRender] = useState<THREE.Group | null>(null);

  // This synchronously prepares the untextured model before the first paint.
  useLayoutEffect(() => {
    const scene = originalScene.clone();

    // Scale and center the model
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scaleMultiplier = scale || 1; // Default to 1 if not provided
      const finalScale = (1.5 / maxDim) * scaleMultiplier;
      scene.scale.set(finalScale, finalScale, finalScale);
    }
    const scaledBox = new THREE.Box3().setFromObject(scene);
    const scaledSize = scaledBox.getSize(new THREE.Vector3());
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());
    scene.position.set(
      -scaledCenter.x,
      -scaledCenter.y + scaledSize.y / 2,
      -scaledCenter.z
    );

    // Apply a placeholder material and store the original
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.userData.originalMaterial = child.material;
        child.material = new THREE.MeshStandardMaterial({
          color: 0x888888,
          roughness: 1.0,
        });
      }
    });
    setSceneToRender(scene);
  }, [originalScene]);

  // This asynchronously applies the original textures after the untextured model has rendered.
  useEffect(() => {
    if (sceneToRender) {
      const applyTextures = () => {
        sceneToRender.traverse((child) => {
          if (child instanceof THREE.Mesh && child.userData.originalMaterial) {
            child.material = child.userData.originalMaterial;
            delete child.userData.originalMaterial;
          }
        });
      setTexturesApplied(true);
      };
      const timer = setTimeout(applyTextures, 500); // Corresponds to animation duration
      return () => clearTimeout(timer);
    }
  }, [sceneToRender]);

  if (!sceneToRender) return null;

  return (
    <>
      {!texturesApplied && (
        <Html as='div' style={{ position: 'absolute', top: 0, left: 0, width: '100%', pointerEvents: 'none', zIndex: 10 }}>
          <div style={{
            height: '4px',
            width: '100%',
            backgroundColor: '#8A2BE2', // Purple
            transformOrigin: 'left',
            animation: 'texture-load-animation 0.5s ease-out forwards',
          }} />
          <style>{`
            @keyframes texture-load-animation {
              from { transform: scaleX(0); }
              to   { transform: scaleX(1); }
            }
          `}</style>
        </Html>
      )}
      <primitive object={sceneToRender} />
    </>
  );
}

interface ModelViewerProps {
  product: Product;
}

export function ModelViewer({ product }: ModelViewerProps) {
  const { brightness = 1, yMovement = 0, xMovement = 0 } = product;
  const controlsRef = useRef<any>(null);

  if (!product.modelUrl) {
    return <div>3D Model not available.</div>;
  }

  const handleLogCoords = () => {
    if (controlsRef.current) {
      const cameraPosition = controlsRef.current.object.position;
      const targetPosition = controlsRef.current.target;
      console.log("Orbit (Target) XYZ Coords:", targetPosition);
      console.log("Canvas (Camera) XYZ Coords:", cameraPosition);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Canvas
        dpr={[1, 2]}
        camera={{
          fov: 45,
          position: [-1.4468853500113088, 0.4105277129348576, -1.795253642331638],
        }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5 * brightness} />
          <directionalLight position={[10, 10, 5]} intensity={1.5 * brightness} />
          <Environment preset="city" />
          <Model url={product.modelUrl} scale={product.scale} />
        </Suspense>
        <OrbitControls
          ref={controlsRef}
          target={[0 + (xMovement || 0), 0.71 + (yMovement || 0), 0]}
          autoRotate
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
      <button
        onClick={handleLogCoords}
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 100,
          padding: '8px 12px',
          cursor: 'pointer'
        }}
      >
        Log Coords
      </button>
    </div>
  );
}