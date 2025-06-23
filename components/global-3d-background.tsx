"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars as DreiStars } from "@react-three/drei"
import type { Group } from "three"

// Simplified and lighter background effect
function LightParticleField() {
  const groupRef = useRef<Group>(null!)

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.02
      groupRef.current.rotation.y += delta * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      <DreiStars
        radius={80} // Slightly smaller radius for a less overwhelming feel
        depth={40}
        count={4000} // Reduced count for performance
        factor={3.5} // Smaller star size
        saturation={0}
        fade
        speed={0.4} // Slightly faster individual star movement for a subtle dynamic
      />
      {/* Optional: A second layer of stars with different properties for depth */}
      <DreiStars
        radius={60}
        depth={30}
        count={2000}
        factor={3}
        saturation={1} // Add a hint of color (will pick up gold from lights)
        fade
        speed={0.3}
        color="#D4AF37" // Explicitly gold for this layer
      />
    </group>
  )
}

export default function Global3DBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        background: "var(--brand-black)",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1], fov: 70 }}>
        {" "}
        {/* Adjusted fov slightly */}
        <ambientLight intensity={0.1} color="#E0C670" /> {/* Lighter gold ambient light */}
        <Suspense fallback={null}>
          <LightParticleField />
        </Suspense>
      </Canvas>
    </div>
  )
}
