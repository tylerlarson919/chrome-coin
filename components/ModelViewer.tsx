"use client";

import { Suspense, useLayoutEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import type { Product } from "@/data/products";
import * as THREE from "three";

// Helper component to load, center, and normalize the GLB model
function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  useLayoutEffect(() => {
    // 1. Calculate the initial bounding box of the loaded scene
    const box = new THREE.Box3().setFromObject(scene);
    const size = box.getSize(new THREE.Vector3());

    // 2. Determine the maximum dimension and calculate a scale factor
    // This normalizes the model's size to fit nicely in the view
    const maxDim = Math.max(size.x, size.y, size.z);
    const scale = 1.5 / maxDim;
    scene.scale.set(scale, scale, scale);

    // 3. After scaling, the bounding box changes. We recalculate it.
    const scaledBox = new THREE.Box3().setFromObject(scene);
    const scaledSize = scaledBox.getSize(new THREE.Vector3());
    const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

    // 4. Reposition the model to be centered in the view and sit on the y=0 plane
    scene.position.set(
      -scaledCenter.x,
      -scaledCenter.y + scaledSize.y / 2,
      -scaledCenter.z
    );
  }, [scene]);

  // Use <primitive> to directly render the modified scene object
  return <primitive object={scene} />;
}

interface ModelViewerProps {
  product: Product;
}

export function ModelViewer({ product }: ModelViewerProps) {
  const { brightness = 1, yMovement = 0 } = product;

  if (!product.modelUrl) {
    return <div>3D Model not available.</div>;
  }

  return (
    <Canvas
      dpr={[1, 2]} // Sets device pixel ratio for performance
      // Set the initial camera position to your desired coordinates
      camera={{
        fov: 45,
        position: [
          0.8017536849629425, -0.59033168614362945, 1.2460163416884462,
        ],
      }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5 * brightness} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5 * brightness}
        />
        <Environment preset="city" />

        {/* The group for yMovement is still useful for product-specific tweaks */}
        <group position={[0, yMovement || 0, 0]}>
          <Model url={product.modelUrl} />
        </group>
      </Suspense>
      <OrbitControls
        // Set the controls target to your desired coordinates
        target={[
          -0.014800053829621304, -0.25,
          -0.015258936969356067,
        ]}
        autoRotate
        enableZoom={false} // Disables zooming
        enablePan={false} // Disables right-click panning
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
      />
    </Canvas>
  );
}