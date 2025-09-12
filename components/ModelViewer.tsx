"use client";

import { Suspense, useMemo } from "react";
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
function Model({ url, scale }: { url?: string; scale?: number }) {
  if (!url) return null;
  const { scene: originalScene } = useGLTF(url, 'https://www.gstatic.com/draco/v1/decoders/'); 
 
  const scene = useMemo(() => { 
    if (!originalScene) return null; 
    const sceneToProcess = originalScene.clone(); 
 
    // Scale and center the model 
    const box = new THREE.Box3().setFromObject(sceneToProcess); 
    const size = box.getSize(new THREE.Vector3()); 
    const maxDim = Math.max(size.x, size.y, size.z); 
    if (maxDim > 0) { 
      const scaleMultiplier = scale || 1; 
      const finalScale = (1.5 / maxDim) * scaleMultiplier; 
      sceneToProcess.scale.set(finalScale, finalScale, finalScale); 
    } 
    const scaledBox = new THREE.Box3().setFromObject(sceneToProcess); 
    const scaledSize = scaledBox.getSize(new THREE.Vector3()); 
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3()); 
    sceneToProcess.position.set( 
      -scaledCenter.x, 
      -scaledCenter.y + scaledSize.y / 2, 
      -scaledCenter.z 
    ); 
    return sceneToProcess; 
  }, [originalScene, scale]); 
 
  if (!scene) return null; 
 
  return <primitive object={scene} />; 
}

function Scene({ product, brightness }: { product: Product, brightness: number }) {
  // useProgress gives us 'active', a boolean that's true while loading
  const { active } = useProgress();

  return (
    <>
      {/* Render Loader based on loading state, not in a fallback */}
      {active && <Loader />}
      <Suspense fallback={null}>
        <ambientLight intensity={0.5 * brightness} />
        <directionalLight position={[10, 10, 5]} intensity={1.5 * brightness} />
        <Environment preset="city" />
        <Model url={product.modelUrl} scale={product.scale} />
      </Suspense>
    </>
  );
}

interface ModelViewerProps {
  product: Product;
}

export function ModelViewer({ product }: ModelViewerProps) {
  const { brightness = 1, yMovement = 0, xMovement = 0 } = product;

  if (!product.modelUrl) {
    return <div>3D Model not available.</div>;
  }

  return (
      <Canvas
        key={product.name}
        dpr={[1, 2]}
        camera={{
          fov: 45,
          position: [-1.4468853500113088, 0.4105277129348576, -1.795253642331638],
        }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Scene product={product} brightness={brightness} />
        <OrbitControls
          target={[0 + xMovement, 0.71 + yMovement, 0]}
          autoRotate
          enableZoom={false}
          enablePan={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI}
        />
      </Canvas>
  );
}