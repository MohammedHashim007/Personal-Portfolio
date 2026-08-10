"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { FuturisticMesh } from "./FuturisticMesh";

export const HeroCanvas = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full h-full bg-transparent" />;
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance", preserveDrawingBuffer: false }}
        dpr={[1, 1.5]} // Restricts render scaling to max 1.5x to prevent scroll lag
        frameloop="always"
        className="w-full h-full pointer-events-none"
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#4F46E5" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#06B6D4" />
        <Suspense fallback={null}>
          <FuturisticMesh />
        </Suspense>
      </Canvas>
    </div>
  );
};