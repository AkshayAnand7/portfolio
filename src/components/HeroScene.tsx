"use client";

import { Canvas } from "@react-three/fiber";
import ParticleField from "./ParticleField";

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <ParticleField />
    </Canvas>
  );
}
