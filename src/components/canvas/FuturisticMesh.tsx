"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

export const FuturisticMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 2) * 0.3;
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.position.y = Math.sin(t) * 0.1;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.4;
      coreRef.current.rotation.z = Math.cos(t / 1.5) * 0.2;
    }

    // Dynamic Mouse Parallax
    const { x, y } = state.pointer;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 1.5, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 1.5, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <group>
        {/* Outer Glass Icosahedron Shell */}
        <mesh ref={meshRef} scale={2.2}>
          <icosahedronGeometry args={[1, 0]} />
          <MeshTransmissionMaterial
            backside
            samples={16}
            resolution={512}
            transmission={0.95}
            roughness={0.15}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            thickness={0.6}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color="#8B5CF6"
          />
        </mesh>

        {/* Inner Glowing Energetic Core */}
        <mesh ref={coreRef} scale={1.0}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#06B6D4"
            emissive="#4F46E5"
            emissiveIntensity={3}
            wireframe
          />
        </mesh>

        {/* Orbiting Particle Field */}
        <points>
          <sphereGeometry args={[3.2, 32, 32]} />
          <pointsMaterial
            size={0.03}
            color="#4F46E5"
            transparent
            opacity={0.6}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>
    </Float>
  );
};