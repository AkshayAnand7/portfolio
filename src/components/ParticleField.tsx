"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 800;

export default function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Generate initial random positions and velocities
  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      data.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15 - 5
        ),
        speed: 0.002 + Math.random() * 0.006,
        offset: Math.random() * Math.PI * 2,
        scale: 0.3 + Math.random() * 0.7,
      });
    }
    return data;
  }, []);

  // Track mouse position in normalized coordinates
  useMemo(() => {
    if (typeof window === "undefined") return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((particle, i) => {
      // Gentle floating motion
      const x =
        particle.position.x +
        Math.sin(time * particle.speed * 50 + particle.offset) * 0.3;
      const y =
        particle.position.y +
        Math.cos(time * particle.speed * 30 + particle.offset) * 0.5;
      const z = particle.position.z;

      // Subtle mouse repulsion
      const dx = x - mouseRef.current.x * viewport.width * 0.5;
      const dy = y - mouseRef.current.y * viewport.height * 0.5;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const repulsion = Math.max(0, 1 - dist / 3) * 0.5;

      dummy.position.set(
        x + (dx / dist || 0) * repulsion,
        y + (dy / dist || 0) * repulsion,
        z
      );

      const scale = particle.scale * (0.8 + Math.sin(time + particle.offset) * 0.2);
      dummy.scale.setScalar(scale * 0.02);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
    </instancedMesh>
  );
}
